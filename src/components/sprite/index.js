import React from "react";

export default function Sprite({ image, data, position }) {
  const { y, x, h, w } = data;
  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}`,
        top: `${position.y}`,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}
    ></div>
  );
}
