import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { MovementController } from "../../controls/MovementController";
import { BasicFloor } from "../Objects/BasicFloor";

export const Canvas11 = () => {

  const [active, setActive] = useState(false);

  return (
    <>
    <button onClick={() => setActive(!active)}>move</button>
      <Canvas>
        <ambientLight />

        <OrbitControls />
        <Stars />

        <Suspense fallback={null}>
          <MovementController active={active} />
          <group position={[0, -5, 0]}>
          <BasicFloor />
          </group>
         
        </Suspense>
      </Canvas>
    </>
  );
};
