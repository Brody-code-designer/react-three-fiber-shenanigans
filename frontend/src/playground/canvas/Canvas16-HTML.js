import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export const Canvas16 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
      </Canvas>
    </>
  );
};
