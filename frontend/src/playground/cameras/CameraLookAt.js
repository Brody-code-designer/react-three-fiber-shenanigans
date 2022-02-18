import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./camera-look-at.css";
import * as THREE from "three";
import {SpecialCube} from "../Objects/SpecialCube"

export const CameraLookAt = () => {
  const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);

  return (
    <>
     
    </>
  );
};
