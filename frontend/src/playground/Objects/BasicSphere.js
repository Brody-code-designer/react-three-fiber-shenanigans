import { useTexture } from "@react-three/drei";
import React from "react";
import rockTexture from "../../textures/rock_boulder_dry_diff_1k.jpg";

export const BasicSphere = () => {

const texture = useTexture(rockTexture)

  return (
    <>
      <mesh position={[-10, 15, 0]}>
        <sphereBufferGeometry args={[15, 32, 16]} />
        {/* <meshBasicMaterial /> */}
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
