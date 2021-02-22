import React from "react";
import MenuTheme from "./menutheme.mp3";

function init() {
  const music = new Audio(MenuTheme);
  music.autoplay = true;
  music.loop = true;
  music.play();
}

export default function Music() {
  init();
}
