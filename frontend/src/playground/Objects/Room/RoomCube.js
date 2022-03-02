import { useBox } from "@react-three/cannon";
import React from "react";

export const RoomCube = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
  }));

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry />
      </mesh>
    </>
  );
};
