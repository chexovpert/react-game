import React, { useState, useEffect } from "react";
import { useConfig } from "../config-file/config";
//import styleObj from "./sound.module.scss";
import MenuTheme from "../../assets/music/menutheme.mp3";
import Button from "@material-ui/core/Button";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";

// let music = null
// music = new Audio(MenuTheme);
// music.autoplay = true;
// music.loop = true;

export default () => {
  const config = useConfig();
  const [music, setMusic] = useState(new Audio(config.music));
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
    <Button onClick={toggleSound} variant="contained" color="secondary">
      {config.music || config.sound ? <VolumeUp /> : <VolumeOffIcon />}
    </Button>
  );
};
