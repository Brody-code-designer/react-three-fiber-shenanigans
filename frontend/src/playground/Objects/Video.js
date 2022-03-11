import { useAspect } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import * as THREE from 'three'

export const Video = () => {
  const size = useAspect(1800, 1000);
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/Anime-Training-Montage-AMV.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    return vid;
  });

  console.log('video', video);
  // Keep in mind videos can only play once the user has interacted with the site ...
  useEffect(() => void video.play(), [video]);
  return (
    <>
      <mesh scale={size}>
        <planeBufferGeometry />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture
            attach="map"
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
      </mesh>
    </>
  );
};
