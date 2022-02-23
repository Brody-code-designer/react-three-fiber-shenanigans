import React, { useRef } from 'react'
import * as THREE from "three"

export const BasicWall  = ({position, rotation}) => {

const ref = useRef()

console.log('ref', ref);

return (
<>
<mesh position={position} rotation={rotation} ref={ref}>
    <planeBufferGeometry args={[1000, 1000]} />
    <meshMatcapMaterial side={THREE.DoubleSide} />
</mesh>
</>
)}