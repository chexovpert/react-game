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
  const [music, setMusic] = useState(new Audio(MenuTheme));
  //const [volume, setVolume] = useState(config.volume)
  music.volume = config.sound;
  music.autoplay = true;
  music.loop = true;

  function toggleSound() {
    config.soundHandler(!config.sound);
    // config.soundOn = sound;
  }
  useEffect(() => {
    music.volume = config.volume;
  }, [config.volume]);
  useEffect(() => {
    //config.sound = sound;
    //console.log(config)
    if (config.sound) {
      music.play();
    } else {
      music.pause();
    }
  }, [config.sound]);

  return (
    // <div className={styleObj.sound_btn} onClick={toggleSound} > { config.sound ? "Звук включен" : "Звук выключен"}</div>
    <Button onClick={toggleSound} variant="contained" color="secondary">
      {config.sound ? <VolumeUp /> : <VolumeOffIcon />}
    </Button>
  );
};
