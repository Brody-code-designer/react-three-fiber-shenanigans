import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import rockTexture from "../textures/brick_wall_003_ao_1k.jpg";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

export const MovementController = () => {
  const texture = useTexture(rockTexture);

  const ref = useRef();

  const { camera } = useThree();

  console.log("ref", ref.current);
  console.log("camera", camera);

  let cameraPosition = new THREE.Vector3(0, 10, 0);

  // cameraPosition.set(0, 0, 0)

  
  const [active, setActive] = useState(false);

  const { position} = useSpring({ 
      position: active ? [5, 0, 0] : [0, 0, 0],
 });

 
    if (ref.current) {
        camera.position.copy(ref.current.position);
        // camera.position.y = 5
        // camera.position.x = 0
        camera.position.z = 15;
      }

 

  return (
    <>
      <animated.mesh
        ref={ref}
        position={position}
        onClick={() => setActive(!active)}
      >
        <sphereBufferGeometry />
        <meshStandardMaterial map={texture} />
      </animated.mesh>
    </>
  );
};
