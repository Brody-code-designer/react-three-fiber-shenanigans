import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { CameraPointerLockControls } from "../cameras/CameraPointerLockControls";
import { PointerLockTarget } from "../pointers/PointerLockTarget";
import "./canvas-01.css";


/**
 * This canvas creates pointer lock controls that lock the cursor. In order for the target to be set in the middle of the screen a raycaster is set on the canvas
 */
export const Canvas07 = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      
      <PointerLockTarget active={active} />

      <Canvas
      raycaster={{
        computeOffsets: (_, {size: {width, height}}) => {
          return {
            offsetX: width / 2,
            offsetY: height / 2
          }
        }
      }}
      >
        <ambientLight />

        <CameraPointerLockControls />

        <mesh
          onPointerEnter={() => {
            setActive(true);
          }}
          onPointerLeave={() => setActive(false)}
        >
          <boxGeometry />
          <meshStandardMaterial color={active ? "cyan" : "red"} />
        </mesh>
        <Stars />
      </Canvas>
    </>
  );
};
