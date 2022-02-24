import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { MovementController } from "../../controls/MovementController";
import { BasicFloor } from "../Objects/BasicFloor";

export const Canvas11 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />

        <OrbitControls />
        <Stars />

        <Suspense fallback={null}>
          <MovementController />
          <group position={[0, -5, 0]}>
          <BasicFloor />
          </group>
         
        </Suspense>
      </Canvas>
    </>
  );
};
