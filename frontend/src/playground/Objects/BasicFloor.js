import { useTexture } from "@react-three/drei";
import React from "react";
import marbleTexture from "../../textures/marble_01_diff_1k.jpg";
import { LinearMipMapLinearFilter, NearestFilter, RepeatWrapping } from "three";

export const BasicFloor = () => {
  const texture = useTexture(marbleTexture);

  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipMapLinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <>
      <mesh rotation={[Math.PI / 2, Math.PI, Math.PI]}>
        <planeBufferGeometry args={[1000, 1000]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
