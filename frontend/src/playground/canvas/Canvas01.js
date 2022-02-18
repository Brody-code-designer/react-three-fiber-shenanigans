import React from "react";
import { Canvas } from "@react-three/fiber";
import { SpecialCube } from "../Objects/SpecialCube";
import { OrbitControls } from "@react-three/drei";
import "./canvas-01.css"

export const Canvas01 = () => {
    return(
        <>
         <Canvas>
        {/* <perspectiveCamera fov={10} view={{enabled: true}} /> */}
        <ambientLight />
          <SpecialCube position={[5, 5, 5]} />
          <SpecialCube position={[5, 15, 15]} />
          <SpecialCube position={[10, 0, 5]} />
        <OrbitControls />
        {/* <Box /> */}
      </Canvas>
        </>
    )
}