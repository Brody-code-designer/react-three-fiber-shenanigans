import React from "react";
import { RoomCube } from "./RoomCube";
import { RoomFloor } from "./RoomFloor";
import * as THREE from "three";
import { RoomWall } from "./RoomWall";
import brick from "../../../textures/stone_brick_wall_001_ao_1k.jpg";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export const Room = () => {
  const brickMaterial = useTexture(brick);

  const wall = new THREE.PlaneBufferGeometry(100, 50);
  const wallMaterial = new THREE.MeshStandardMaterial({ map: brickMaterial, side:DoubleSide });

  return (
    <>
      <RoomFloor />
      <RoomCube />
      <RoomWall
        wall={wall}
        wallMaterial={wallMaterial}
        position={[0,25, 50]}
        rotation={[0, 0, 0]}
      />
       <RoomWall
        wall={wall}
        wallMaterial={wallMaterial}
        position={[0, 25, -50]}
        rotation={[0, 0, 0]}
      />
       <RoomWall
        wall={wall}
        wallMaterial={wallMaterial}
        position={[50, 25, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
       <RoomWall
        wall={wall}
        wallMaterial={wallMaterial}
        position={[-50, 25, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
};
