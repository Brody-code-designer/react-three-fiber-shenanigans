import { useTexture } from "@react-three/drei";
import React from "react";

export const DynamicPlane = ({texture, position, rotation}) => {

    const newTexture = useTexture(texture)

  return (
    <>
      <mesh position={position} rotation={rotation}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial map={newTexture} />
      </mesh>
    </>
  );
};
