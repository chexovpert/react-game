import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "../../hooks/use-intervel/use-interval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "../../snake-start";
import {useConfig} from "../config-file/config"
import PlayTheme from "../music/playtheme.mp3"
import Hud from "../music/doom/StatusBar.png"
//import useImage from "use-image"
//import { Image } from 'react-konva';


// function SimpleApp() {  
  

//   // "image" will DOM image element or undefined

//   return (
//     <Image image={image} />
//   );
// }
const Snake = () => {
  //const [image] = useImage(Hud);
  const canvasRef = useRef();
  const config = useConfig();
  
  useEffect(()=> {
    config.musicHandler(PlayTheme)
    
    
  }, [])

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  };

  const createApple = () =>
    apple.map((elem, i) =>
      Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
    );

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
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
    //context.width = document.body.clientWidth;
    //context.height = document.body.clientHeight;
    //console.log(hud)
    
    
    //context.drawImage(hud, 100, 100)
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    const hud = new Image();
    hud.src = 'https://s-media-cache-ak0.pinimg.com/236x/d7/b3/cf/d7b3cfe04c2dc44400547ea6ef94ba35.jpg';
    
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    //context.drawImage(hud, 100, 100)
    hud.onload = function() {
      context.drawImage(hud, 100, 100)
} ()
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
    
  }, [snake, apple, gameOver]);

  useInterval(() => gameLoop(), speed);
  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
      <canvas
        style={{boxSizing: "border-box", border: "1px solid white", width:`100%`, height: "90vh" }}
        ref={canvasRef}
        // width={document.body.clientWidth}
        // height={document.body.clientHeight}
        
        //height={`90vh`}
        width={`${CANVAS_SIZE[0]}`}
        height={`${CANVAS_SIZE[1]}`}
        
      />
      {gameOver && <div style={{backgroundImage: Hud}}>GAME OVER!</div>}
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default Snake;
