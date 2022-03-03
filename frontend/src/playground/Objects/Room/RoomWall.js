import React from "react";

export const RoomWall = ({wall, wallMaterial, position, rotation}) => {
  return (
    <>
      <mesh geometry={wall} material={wallMaterial} position={position} rotation={rotation} />
    </>
  );
};
