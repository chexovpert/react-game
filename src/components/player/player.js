import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-keys/keys";
import useWalk from "../../hooks/use-walk/use-walk";

export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  //   const directions = {
  //     down: 0,
  //     left: 1,
  //     right: 2,
  //     up: 3,
  //   };

  useKeyPress((e) => {
    //const dir = ;
    // if (directions.hasOwnProperty(dir)) {
    //     console.dir(dir);
    //     e.preventDefault();
    //   }
    //walk(dir);
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault();
  });
  return (
    <Actor
      sprite={`/sprites/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}
