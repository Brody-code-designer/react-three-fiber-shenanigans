import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./camera-look-at.css"

export const CameraLookAt = () => {
  return (
    <>
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Box />
        </Canvas>
    </>
  );
};
