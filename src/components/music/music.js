import React from "react";
import MenuTheme from "../../assets/music/menutheme.mp3";
import config from "../config-file/config";

const music = null;

function init() {
  music = new Audio(MenuTheme);
  music.autoplay = true;
  music.loop = true;
}

function play(music) {
  if (config.soundOn) {
    music.play();
  } else {
    music.pause();
  }
}

export default function Music() {
  init();
}
