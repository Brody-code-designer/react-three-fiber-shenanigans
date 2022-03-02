import React from "react";
import { RoomCube } from "./RoomCube";
import { RoomFloor } from "./RoomFloor";

export const Room = () => {
  return (
    <>
      <RoomFloor />
      <RoomCube />
    </>
  );
};
