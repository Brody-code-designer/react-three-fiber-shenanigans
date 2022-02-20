import React from "react";
import { Canvas } from "@react-three/fiber";
import { ReusedCube } from "../Objects/ReusedCube";
import { OrbitControls } from "@react-three/drei";
import "./canvas-01.css";
import * as THREE from "three";
import { RotatingCube } from "../Objects/RotatingCube";
/**
 * Reusing meshs can help performance. Declare on global level to reuse. 
 * Setting frameloop on Canvas stops new frames when nothing has updated
 */
export const Canvas01 = () => {
  //create meshs that can be reused
  const red = new THREE.MeshLambertMaterial({ color: "red" });
  const box = new THREE.BoxGeometry(1, 1, 1);

  return (
    <>
      <Canvas frameloop="demand">
       
        <ambientLight />
        <ReusedCube position={[5, 5, 5]} box={box} red={red} />
        <ReusedCube position={[5, 15, 15]} box={box} red={red} />
        <ReusedCube position={[10, 0, 5]} box={box} red={red} />
        <OrbitControls />

       <RotatingCube /> 
      </Canvas>
    </>
  );
};
