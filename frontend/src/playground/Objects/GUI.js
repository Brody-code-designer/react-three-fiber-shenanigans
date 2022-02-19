import React, { useRef} from "react";
import { useSpring, animated } from "@react-spring/three";


export const GUI = ({active}) => {
  const { scale } = useSpring({ scale: active ? 3 : 1 });

  return (
    <>
      <animated.mesh scale={scale}>
        <boxGeometry />
        <meshStandardMaterial />
      </animated.mesh>
    </>
  );
};
