import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useKeyboardControls } from "../../hooks/useKeyboardControls";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

export const ThirdPersonMovingPlayer = () => {
  const { moveForward, moveBackward, moveRight, moveLeft } =
    useKeyboardControls();

  const { camera } = useThree();

  const orbitControlsRef = useRef()

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [5, 5, 5],
    type: "Dynamic",
    args: [1],
  }));

  const cameraDirection = new Vector3()
  const position = useRef({ x: 0, y: 0, z: 0 });


  useEffect(() => {
    api.position.subscribe((v) => {
      // console.log("position", orbitControlsRef);
      position.current.x = v[0];
      position.current.y = v[1];
      position.current.z = v[2];
    });
  }, []);

  const movementSpeed = 5;

  const frontVector = new THREE.Vector3(0, 0, moveBackward - moveForward);

  const sideVector = new THREE.Vector3(moveLeft - moveRight, 0, 0);

  const direction = new THREE.Vector3();

  const camOffset = 10;

  useFrame(() => {

    ref.current.getWorldPosition( orbitControlsRef.current.target )
    orbitControlsRef.current.update()

    cameraDirection.subVectors( camera.position, orbitControlsRef.current.target )
    cameraDirection.normalize().multiplyScalar( camOffset)

    // console.log('sub vec', cameraDirection);
    camera.position.copy(cameraDirection.add(orbitControlsRef.current.target));

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(movementSpeed)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, 0, direction.z);
  });

  return (
    <>
      {/* <CameraPointerLockControls /> */}
      
        <OrbitControls
        ref={orbitControlsRef}
          enablePan={false}
          enableZoom={false}
        />
      <group ref={ref} />
    </>
  );
};
