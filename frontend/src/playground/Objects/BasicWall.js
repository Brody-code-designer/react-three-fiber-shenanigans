import React from 'react'
import * as THREE from "three"

export const BasicWall  = ({position, rotation}) => {

return (
<>
<mesh position={position} rotation={rotation} >
    <planeBufferGeometry args={[100, 100]} />
    <meshStandardMaterial side={THREE.DoubleSide} />
</mesh>
</>
)}