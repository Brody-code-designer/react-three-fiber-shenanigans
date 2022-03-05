import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Room } from "../Objects/Room/Room";
import { Physics } from "@react-three/cannon";
import { MovingPlayer } from "../player/MovingPlayer";
import { PointerLockTarget } from "../pointers/PointerLockTarget";

export const Canvas14 = () => {
  return (
    <>
      <PointerLockTarget />
      <Canvas
        raycaster={{
          computeOffsets: (_, { size: { width, height } }) => {
            return {
              offsetX: width / 2,
              offsetY: height / 2,
            };
          },
        }}
      >
        <ambientLight />
        <Stars />
        <Suspense fallback={null}>
          <Physics gravity={[0, -10, 0]}>
            {/* <Debug color="black" scale={1.1}> */}
            <Room />
            <MovingPlayer />
            {/* </Debug> */}
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
