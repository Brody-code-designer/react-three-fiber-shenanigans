import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { CameraAnimated } from "../cameras/CameraAnimated";

export const Canvas06 = () => {
   
  const [active, setActive] = useState(false)


    return (
    <>
    <button onClick={() => setActive(!active)}>Click to Animate Camera to look at box</button>
      <Canvas>
          <ambientLight />
          <CameraAnimated active={active} />
          {/* <OrbitControls /> */}
          <Stars />
      </Canvas>
    </>
  );
};
