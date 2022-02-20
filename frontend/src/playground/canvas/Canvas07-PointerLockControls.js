import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { CameraPointerLockControls } from "../cameras/CameraPointerLockControls";
import "./canvas-01.css";
import "./canvas-pointerLock.css";
import { BiTargetLock } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

/**
 * This canvas creates pointer lock controls that lock the cursor. In order for the target to be set in the middle of the screen a raycaster is set on the canvas
 */
export const Canvas07 = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <IconContext.Provider value={ {color: active ? "magenta" : "black", className: "target" } }>
        <BiTargetLock  />
      </IconContext.Provider>
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
