import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Room } from "../Objects/Room/Room";
import { ThirdPersonMovingPlayer } from "../player/ThirdPersonMovingPlayer";

export const Canvas18 = () => {

  let walking = true

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stars />
          <Suspense fallback={null}>
          <Physics gravity={[0, -10, 0]}>
            {/* <Debug color="black" scale={1.1}> */}
              <Room />
              <ThirdPersonMovingPlayer walking={walking} />
            {/* </Debug> */}
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
