import { useThree } from "@react-three/fiber";
import React from "react";

export const SpecialCube = ({position}) => {

  const {camera} = useThree

  console.log('camera', camera);

  return (
    <>
      <mesh scale={10} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};
