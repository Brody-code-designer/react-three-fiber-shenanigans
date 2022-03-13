import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";
import { Debug, Physics } from "@react-three/cannon";
import { Room } from "../Objects/Room/Room";
import { ThirdPersonMovingPlayer } from "../player/ThirdPersonMovingPlayer";

export const Canvas17 = () => {
  return (
    <>
      <Canvas>
          <ambientLight />
          {/* <OrbitControls /> */}
          <Stars />
          <Suspense fallback={null}>
          <Physics>
            <Debug color="black" scale={1.1}>
              <Room />
              <ThirdPersonMovingPlayer />
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
