import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "../../hooks/use-intervel/use-interval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  //SPEED,
  DIRECTIONS,
} from "../../snake-start";
import { useConfig } from "../config-file/config";
import PlayTheme from "../music/playtheme.mp3";
import Hud from "../music/doom/StatusBar.png";
import Map from "../music/map.png";
import Map1 from "../music/map1.png";
import Map2 from "../music/map2.png";
import Button from "@material-ui/core/Button";
import GameOver from "../menu/gameover/gameover";
import { makeStyles } from "@material-ui/core/styles";

import DeathSound from "../music/doom/dspldeth.wav";
import FoodSound from "../music/doom/dspistol.wav";

import Head from "../sprites/STFGOD0.png";
import Head1 from "../sprites/head2.png";
import Body from "../sprites/ARM1B0.png";
import Body1 from "../sprites/ARM2B0.png";

import HudHead from "../sprites/hud1.png";
import HudHead1 from "../sprites/hud2.png";
import HudHead2 from "../sprites/hud3.png";

import GameOverHead from "../sprites/STFDEAD0.png";

import Skull from "../sprites/SKULA1.png";
import Skull1 from "../sprites/SKULB1.png";
import Skull2 from "../sprites/SKULC1.png";
import Caco from "../sprites/HEADA1.png";
import Caco1 from "../sprites/HEADB1.png";
import Caco2 from "../sprites/HEADC1.png";
import Zombie from "../sprites/SPOSA1.png";
import Zombie1 from "../sprites/SPOSB1.png";
import Zombie2 from "../sprites/SPOSC1.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "fixed",
    top: "0px",
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
      //   marginLeft: theme.spacing(10),
      // marginRight: theme.spacing(10),
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
}));
const Snake = () => {
  //const [image] = useImage(Hud);
  const canvasRef = useRef();
  const config = useConfig();
  const classes = useStyles();

  const foodSound = new Audio();
  foodSound.src = FoodSound;
  foodSound.volume = config.soundVolume;

  const deathSound = new Audio();
  deathSound.src = DeathSound;
  deathSound.volume = config.soundVolume;

  const hud = new Image();
  hud.src = Hud;

  const maps = [Map, Map1, Map2];
  const map = new Image();
  map.src = maps[config.map];

  const skull = new Image();
  skull.src = Skull;
  const skull1 = new Image();
  skull1.src = Skull1;
  const skull2 = new Image();
  skull2.src = Skull2;

  const caco = new Image();
  caco.src = Caco;
  const caco1 = new Image();
  caco1.src = Caco1;
  const caco2 = new Image();
  caco2.src = Caco2;

  const zombie = new Image();
  zombie.src = Zombie;
  const zombie1 = new Image();
  zombie1.src = Zombie1;
  const zombie2 = new Image();
  zombie2.src = Zombie2;

  const monster = [zombie, zombie1, zombie2];
  const monster1 = [skull, skull1, skull2];
  const monster2 = [caco, caco1, caco2];

  const monsterslist = [monster, monster1, monster2];

  const hudHead = new Image();
  hudHead.src = HudHead;
  const hudHead1 = new Image();
  hudHead1.src = HudHead1;
  const hudHead2 = new Image();
  hudHead2.src = HudHead2;

  const HudHeads = [hudHead, hudHead1, hudHead2];

  //let currentMonster=monsters1;
  const Heads = [Head, Head1];
  const head = new Image();
  head.src = Heads[config.skin];

  const Bodies = [Body, Body1];
  const body = new Image();
  body.src = Bodies[config.skin];
  // useEffect(() => {
  //   config.musicHandler(PlayTheme);
  // }, []);
  let snakePosition = null;
  let applePosition = null;
  let scoreValue = null;
  let dirValue = null;
  if ("snake" in localStorage) {
    snakePosition = JSON.parse(localStorage.snake);
    applePosition = JSON.parse(localStorage.apple);
    dirValue = JSON.parse(localStorage.dir);
    scoreValue = JSON.parse(localStorage.score);
  } else {
    snakePosition = SNAKE_START;
    applePosition = APPLE_START;
    scoreValue = 0;
    dirValue = [0, -1];
  }
  const [snake, setSnake] = useState(snakePosition);
  const [apple, setApple] = useState(applePosition);
  const [dir, setDir] = useState(dirValue);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(scoreValue);
  const [date, setDate] = useState(new Date());
  const [currentMonster, setCurrentMonster] = useState(monster);

  const startGame = () => {
    //console.log(snakePosition);
    config.trackHandler(PlayTheme);
    canvasRef.current.focus();
    setSnake(snakePosition);
    setApple(applePosition);
    setDir(dirValue);
    setSpeed(config.speed);
    setGameStart(true);
    setGameOver(false);
    setScore(scoreValue);
  };

  const endGame = () => {
    setDate(new Date());
    setSpeed(null);
    //canvasRef.current.getContext("2d").drawImage(GameOverHead, 13, 14, 4, 4);
    recordHandler(score, date);
    localStorage.snake = JSON.stringify(SNAKE_START);
    localStorage.apple = JSON.stringify(APPLE_START);
    localStorage.score = JSON.stringify(0);
    localStorage.dir = JSON.stringify([0, -1]);
    soundHandler(deathSound);
    setGameOver(true);
  };
  const monsterHandler = () => {
    setCurrentMonster(
      monsterslist[Math.floor(Math.random() * monsterslist.length)]
    );
  };
  const recordHandler = (score, date) => {
    let records = null;
    const currentScore = {
      score: score,
      date: `${date.toLocaleDateString()}`,
      time: `${date.getHours()}:${date.getMinutes()}`,
    };
    if ("records" in localStorage) {
      records = JSON.parse(localStorage.records);
      records.push(currentScore);
      records.sort(function (a, b) {
        return b.score - a.score;
      });
      records.length = records.length > 10 ? 10 : records.length;
    } else {
      records = [];
      records.push(currentScore);
    }

    localStorage.records = JSON.stringify(records);
  };

  const soundHandler = (sound) => {
    if (config.sound) {
      sound.play();
    }
  };
  const moveSnake = (event) => {
    event.preventDefault();
    if (event.keyCode === 37 && dirValue[0] !== 1) {
      setDir(DIRECTIONS[event.keyCode]);
    } else if (event.keyCode === 38 && dirValue[1] !== 1) {
      setDir(DIRECTIONS[event.keyCode]);
    } else if (event.keyCode === 39 && dirValue[0] !== -1) {
      setDir(DIRECTIONS[event.keyCode]);
    } else if (event.keyCode === 40 && dirValue[1] !== -1) {
      setDir(DIRECTIONS[event.keyCode]);
    } 
    event.keyCode === 32 && speed && setSpeed(null);
    event.keyCode === 32 && !speed && setSpeed(config.speed);
  };

  const createApple = () =>
    apple.map((elem, i) =>
      Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
    );

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] - (CANVAS_SIZE[1] - SCALE * 14) ||
      piece[1] < 0
    ) {
      return true;
    }
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      monsterHandler();
      setScore(score + 1);

      soundHandler(foodSound);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) {
      snakeCopy.pop();
    }

    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.drawImage(hud, 0, 14, 30, 4);
    context.drawImage(map, 0, 0, 30, 14);
    snake.forEach(([x, y], index) => {
      if (index === 0) {
        context.drawImage(head, x, y, 1, 1);
      } else {
        context.drawImage(body, x, y, 1, 1);
      }
    });
    context.font = "2px Changa One";
    context.fillStyle = "red";
    context.fillText(score, 2, 16);
    context.drawImage(
      HudHeads[Math.floor(Math.random() * HudHeads.length)],
      13,
      14,
      4,
      4
    );
    //
    context.drawImage(
      currentMonster[Math.floor(Math.random() * currentMonster.length)],
      apple[0],
      apple[1],
      1,
      1
    );
    localStorage.snake = JSON.stringify(snake);
    localStorage.apple = JSON.stringify(apple);
    localStorage.score = JSON.stringify(score);
    localStorage.dir = JSON.stringify(dir);
  }, [snake, apple, score]);

  useInterval(() => gameLoop(), speed);
  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
      <canvas
        style={{
          boxSizing: "border-box",
          border: "1px solid white",
          width: `100%`,
          height: "87vh",
        }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}`}
        height={`${CANVAS_SIZE[1]}`}
        tabindex="1"
      />
      {!gameStart && (
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.paper}
            onClick={startGame}
          >
            Start
          </Button>
        </div>
      )}
      {gameOver && (
        <GameOver score={score} date={date} startHandler={startGame}>
          GAME OVER!
        </GameOver>
      )}
    </div>
  );
};

export default Snake;
