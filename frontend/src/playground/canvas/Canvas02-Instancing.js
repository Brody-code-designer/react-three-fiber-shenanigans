import { Canvas } from "@react-three/fiber";
import React from "react";
import "./canvas-01.css";
import { OrbitControls } from "@react-three/drei";
import InstancingCube from "../Objects/InstancingCube";

/**
 * instancing objects makes only one draw calls for thousands of objects. Very good for performance*/
export const Canvas02 = () => {
  
  return (
    <>
      <Canvas>
        <ambientLight />
        <InstancingCube />
        <OrbitControls />
      </Canvas>
    </>
  );
};
