import { useBox, usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import React from "react";
import { LinearMipmapLinearFilter, NearestFilter, RepeatWrapping } from "three";
import marble from "../../../textures/marble_01_diff_1k.jpg";

export const RoomFloor = () => {
  const texture = useTexture(marble);

  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

    const [ref] = useBox( () => ({
        rotation: [Math.PI / 2, Math.PI, Math.PI],
        args: [100, 100, 0.1],
        type: "Static"
    }))


  return (
    <>
      <mesh ref={ref}>
        <planeBufferGeometry 
        args={[100, 100]}
         />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
