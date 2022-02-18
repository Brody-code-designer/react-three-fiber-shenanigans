import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

export const RotatingCube = () => {
  const ref = useRef();

  const [active, setActive] = useState(true);

  const { invalidate } = useThree();

  useFrame(({ clock }) => {
    if (active) {
      ref.current.rotation.x = clock.getElapsedTime();
        //only recalls a new frame when spinning
      invalidate();
    }
  });

  return (
    <>
      <mesh
        ref={ref}
        position={[100, 50, 0]}
        scale={30}
        onClick={() => setActive(!active)}
      >
        <boxGeometry />
        <meshBasicMaterial color="royalblue" />
      </mesh>
    </>
  );
};
