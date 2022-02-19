import React, { Suspense } from "react";
import { Html, OrbitControls, Stats, useDetectGPU } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Kakashi from "../3D-Components/Kakashi";
import "./canvas-01.css";

export const Canvas05 = () => {
//   const gpu = useDetectGPU();

//   console.log("gpu", gpu);

  return (
    <>
    
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
          <Kakashi />
          <Stats />
          <OrbitControls />
          <Html center> 
          <h1>hello</h1>
          <h2>Mars</h2>
        </Html>
          </Suspense> 
        </Canvas>
    </>
  );
};
