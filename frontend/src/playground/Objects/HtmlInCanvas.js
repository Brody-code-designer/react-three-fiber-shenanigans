import { Html, Icosahedron } from "@react-three/drei";
import React from "react";

export const HtmlInCanvas = () => {
  return (
    <>
      <group 
      // position={[10, 100, 0]}
      >
          <Icosahedron position={[3, 3, 0]} >
          <meshBasicMaterial color={"blue"} wireframe />    
          <Html>
            <button onClick={() => console.log("clicked")}>Click Here</button>
          </Html>
          </Icosahedron>
      </group>
    </>
  );
};
