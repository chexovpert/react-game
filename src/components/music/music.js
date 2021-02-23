import React from "react";
import MenuTheme from "./menutheme.mp3";
import config from "../config-file/config"

const music = null

function init() {
  music = new Audio(MenuTheme);
  music.autoplay = true;
  music.loop = true;
  //music.play();
  // const btn=document.querySelector(".sound_btn")
  // btn.addEventListener("click", play(music))
}

function play(music) {
  if (config.soundOn) {
    music.play()
  } else {
    music.pause()
  }
}

export default function Music() {
  init();
}
