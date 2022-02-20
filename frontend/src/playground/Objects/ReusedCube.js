import { useThree } from "@react-three/fiber";
import React from "react";

export const ReusedCube = ({position, box, red}) => {

  const {camera} = useThree

  console.log('camera', camera);

  return (
    <>
      <mesh scale={10} position={position} geometry={box} material={red} />
    </>
  );
};
