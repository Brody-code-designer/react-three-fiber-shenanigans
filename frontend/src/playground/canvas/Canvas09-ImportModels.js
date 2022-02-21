import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Abe from "../3D-Components/Abe";
import Kakashi from "../3D-Components/Kakashi";
import "./canvas-01.css";

export const Canvas09 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <Stars />
        <OrbitControls />
        <Suspense fallback={null}>
          <Abe />
          <group position={[3, 0, 0]}>
            <Kakashi />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};
