import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import "./canvas-01.css";
import { Video } from "../Objects/Video";

export const Canvas15 = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked === true ? (
        <>
          <Canvas>
            <ambientLight />
            <Stars />
            <OrbitControls />
            <Video />
          </Canvas>
        </>
      ) : (
        <>
          <button onClick={() => setClicked(true)}>Start</button>
        </>
      )}
    </>
  );
};
