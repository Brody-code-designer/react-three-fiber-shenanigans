import React, { useEffect, useRef } from "react";
import * as THREE from "three";

//instancing objects makes only one draw calls for thousands of objects. Very good for performance
const InstancingCube = () => {
  let count = 10000;

  let temp = new THREE.Object3D();

  const ref = useRef();

  //sets the min and max position
  let min = Math.ceil(-150);
  let max = Math.ceil(150);

  useEffect(() => {
    //set positions

    for (let i = 0; i < count; i++) {
      temp.position.set(
        Math.random() * (max - min) + min,
        Math.random() * (max - min) + min,
        Math.random() * (max - min) + min
      );
      temp.updateMatrix();
      // console.log("ref", temp.position);
      ref.current.setMatrixAt(i, temp.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <>
      <instancedMesh ref={ref} args={[null, null, count]}>
        <boxGeometry />
        <meshBasicMaterial color={"blue"} />
      </instancedMesh>
    </>
  );
};

export default InstancingCube;
