import React, { Suspense, useRef } from "react";
import {
  Html,
  OrbitControls,
  Stats,
  useDetectGPU,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Kakashi from "../3D-Components/Kakashi";
import "./canvas-01.css";
import { BoxHelper } from "three";
import { ObjectHelper } from "../Objects/ObjectHelper";

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
        <ObjectHelper />
      </Canvas>
    </>
  );
};
