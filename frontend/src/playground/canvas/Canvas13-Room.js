import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Room } from "../Objects/Room/Room";
import { Debug, Physics } from "@react-three/cannon";

export const Canvas13 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stars />
        <Suspense fallback={null}>
          <Physics>
            <Debug color="black" scale={1.1}>
              <Room />
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
