import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { BasicFloor } from "../Objects/BasicFloor";
import { BasicSphere } from "../Objects/BasicSphere";
import { BasicWall } from "../Objects/BasicWall";
import { DynamicPlane } from "../Objects/DynamicPlane";
import brickWall from "../../textures/brick_wall_003_ao_1k.jpg"
import stoneBrickWall from "../../textures/stone_brick_wall_001_ao_1k.jpg"

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
          <BasicWall position={[0, 0, -100]} rotation={[0, Math.PI, 0]} />
          <BasicSphere />
          <DynamicPlane texture={brickWall} position={[0, 0, 100]} rotation={[0, Math.PI, 0]} />
          <DynamicPlane texture={stoneBrickWall} position={[-100, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        </Suspense>
        
        {/* <Stars /> */}
      </Canvas>
    </>
  );
};
