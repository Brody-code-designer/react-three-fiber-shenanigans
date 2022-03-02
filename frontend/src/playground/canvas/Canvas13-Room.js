import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export const Canvas13 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stars />
      </Canvas>
    </>
  );
};
