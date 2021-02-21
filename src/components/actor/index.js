import React from "react";
import Sprite from "../sprite/index";
export default function Actor({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
}) {
  const { h, w } = data;
  return (
    <Sprite
      position={position}
      image={sprite}
      data={{ x: step * w, y: dir * h, w, h }}
    />
  );
}
