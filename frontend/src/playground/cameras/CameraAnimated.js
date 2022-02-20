import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {useSpring, animated} from "@react-spring/three"

export const CameraAnimated = ({ active }) => {
  const ref = useRef();
  const boxRef = useRef()

  const {camera} = useThree()

  const {position} = useSpring({position: active ? [0, 0, 0] : [0, 10, 0]})

  useFrame( () => {
    ref.current.lookAt(boxRef.current.position)
  })

  console.log('active', active);


  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} makeDefault={true} ref={ref} />

      <animated.mesh ref={boxRef} position={position}>
        <boxGeometry />
        <meshLambertMaterial color={"blue"} />
      </animated.mesh>

      <cameraHelper args={[camera]} />
    </>
  );
};
