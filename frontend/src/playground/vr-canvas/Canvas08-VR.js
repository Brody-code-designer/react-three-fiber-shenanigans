import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Money from "../3D-Components/Where-my-money";
import { VRCanvas, DefaultXRControllers, Hands } from "@react-three/xr";

export const Canvas08 = () => {

  return (
    <>
      <VRCanvas>
        <DefaultXRControllers />
        <Hands />
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Money />
        </Suspense>

        {/* <Stars /> */}
      </VRCanvas>
    </>
  );
};
