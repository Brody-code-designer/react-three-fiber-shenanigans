import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { BasicFloor } from "../Objects/BasicFloor";
import { BasicWall } from "../Objects/BasicWall";

export const Canvas10 = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <group position={[0, -2, 0]}>
            <BasicFloor />
          </group>
          <BasicWall position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />
        </Suspense>
        {/* <Stars /> */}
      </Canvas>
    </>
  );
};
