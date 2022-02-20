import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { BoxHelper } from "three";

export const ObjectHelper = () => {
    const ref = useRef();

    useHelper(ref, BoxHelper, "cyan");
  return (
    <>
      <mesh ref={ref} position={[0, -2, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
