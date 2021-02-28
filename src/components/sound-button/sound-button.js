import React, { useState, useEffect } from "react";
import { useConfig } from "../config-file/config";
import styleObj from "./sound.module.scss";
import MenuTheme from "../music/menutheme.mp3";
import Button from "@material-ui/core/Button";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";

// let music = null
// music = new Audio(MenuTheme);
// music.autoplay = true;
// music.loop = true;

export default () => {
  const config = useConfig();
  //console.log(config)
  //const [sound, setSound] = useState(config.soundOn)
  console.log(MenuTheme);
  //const [musicSrc, setMusicSrc] = useState(config.music);
  const [music, setMusic] = useState(new Audio(config.music));
  //const [volume, setVolume] = useState(config.volume)
  music.volume = config.musicVolume;
  music.autoplay = true;
  music.loop = true;

  function toggleSound() {
    if (config.music || config.sound) {
      config.musicHandler(false);
      config.soundHandler(false);
    } else if (!config.music && !config.sound) {
      config.musicHandler(true);
      config.soundHandler(true);
    }
    //config.musicHandler(!config.music);
    // config.soundOn = sound;
  }

  useEffect(() => {
    music.volume = config.musicVolume;
  }, [config.musicVolume]);

  useEffect(() => {
    music.src = config.track;
    if (config.music) {
      music.play();
    } else {
      music.pause();
    }
  }, [config.track]);
  useEffect(() => {
    if (config.music) {
      music.play();
    } else {
      music.pause();
    }
  }, [config.music]);

  return (
    // <div className={styleObj.sound_btn} onClick={toggleSound} > { config.sound ? "Звук включен" : "Звук выключен"}</div>
    <Button onClick={toggleSound} variant="contained" color="secondary">
      {config.music || config.sound ? <VolumeUp /> : <VolumeOffIcon />}
    </Button>
  );
};
