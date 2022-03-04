import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Room } from "../Objects/Room/Room";
import { Debug, Physics } from "@react-three/cannon";
import { MovingPlayer } from "../player/MovingPlayer";


export const Canvas14 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <Stars />
        <Suspense fallback={null}>
          <Physics>
            <Debug color="black" scale={1.1}>
              <Room />
              <MovingPlayer />
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
