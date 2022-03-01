import {  useThree } from "@react-three/fiber";
import React, { useRef, } from "react";


import { useSpring, animated } from "@react-spring/three";

export const MovementController = ({active}) => {
  const ref = useRef();

  const { camera } = useThree();

  console.log("ref", ref.current);
  console.log("camera", camera);


  const { position} = useSpring({ 
      position: active ? [5, 0, 0] : [0, 0, 0],
 });

    if (ref.current) {
        camera.position.copy(ref.current.position);
      }

  return (
    <>
      <animated.mesh
        ref={ref}
        position={position}
      >
      </animated.mesh>
    </>
  );
};
