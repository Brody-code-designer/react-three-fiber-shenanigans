import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import "./canvas-01.css";
import { OrbitControls, Stats } from "@react-three/drei";
import { GUI } from "../Objects/GUI";

/**
 * This canvas uses a button overlay as GUI. When clicked it animates the Cube
 */
export const Canvas04 = () => {

    const [active, setActive] = useState(false)
  
  return (
    <>
    <button onClick={() => setActive(!active)}>Increase Scale</button>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <GUI active={active} />
      </Canvas>
    </>
  );
};
