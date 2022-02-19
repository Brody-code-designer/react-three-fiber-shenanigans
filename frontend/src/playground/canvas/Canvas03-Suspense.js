import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./canvas-01.css";
import Kakashi from "../3D-Components/Kakashi";
import { OrbitControls } from "@react-three/drei";

/**
 * 
 * This canvas demonstrates how you can use nested suspense to load stuff while other stuff loads
 */
export const Canvas03 = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Canvas>
          <ambientLight />
          <Suspense
            fallback={
              <mesh>
                <boxGeometry />
                <meshStandardMaterial />
              </mesh>
            }
          >
            <Kakashi />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </>
  );
};
