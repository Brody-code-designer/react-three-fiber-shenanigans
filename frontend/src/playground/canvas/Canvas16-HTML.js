import { Html, OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { HtmlInCanvas } from "../Objects/HtmlInCanvas";

export const Canvas16 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stars />
        <HtmlInCanvas />
      </Canvas>
    </>
  );
};
