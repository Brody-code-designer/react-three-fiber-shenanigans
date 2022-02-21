/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import money from '../../3D-assests/where-my-money.glb'

export default function Money({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(money)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-56.31, -28.14, -95.08]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.84, 1.84, 1.84]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[2.09, 0, 0]}>
            <group position={[0, 0.49, 0]} scale={0.96}>
              <group position={[94.15, 86.11, -38.81]} scale={[29.75, 25.77, 45.7]}>
                <mesh
                  geometry={nodes.pasted__pasted__pTorus1_pasted__pasted__blinn3_0.geometry}
                  material={nodes.pasted__pasted__pTorus1_pasted__pasted__blinn3_0.material}
                />
              </group>
            </group>
            <group position={[0, 7.81, 0.61]} rotation={[1.4, 0, 0]} scale={0.1}>
              <group
                position={[877.31, 238.96, -653.16]}
                rotation={[Math.PI, -0.02, Math.PI]}
                scale={[2.91, 5.73, 5.36]}>
                <mesh
                  geometry={nodes.pasted__pasted__pTorus2_pasted__blinn5_0.geometry}
                  material={nodes.pasted__pasted__pTorus2_pasted__blinn5_0.material}
                />
              </group>
              <group position={[860.6, 238.96, -653.16]} scale={[2.89, 5.73, 5.29]}>
                <mesh
                  geometry={nodes.pasted__pTorus2_pasted__blinn5_0.geometry}
                  material={nodes.pasted__pTorus2_pasted__blinn5_0.material}
                />
              </group>
              <group
                position={[850.83, 240.98, -637.52]}
                rotation={[Math.PI, -0.58, Math.PI]}
                scale={[11.89, 6.82, 3.51]}>
                <mesh
                  geometry={nodes.pasted__pasted__pasted__pSphere1_pasted__pasted__blinn3_0.geometry}
                  material={nodes.pasted__pasted__pasted__pSphere1_pasted__pasted__blinn3_0.material}
                />
              </group>
              <group
                position={[846.81, 238.53, -656.41]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[3.72, 6.82, 1.46]}>
                <mesh
                  geometry={nodes.pasted__pasted__pSphere1_pasted__pasted__blinn3_0.geometry}
                  material={nodes.pasted__pasted__pSphere1_pasted__pasted__blinn3_0.material}
                />
              </group>
              <group position={[887.46, 237, -668.27]} rotation={[0, 0.56, 0]} scale={[11.45, 6.82, 3.5]}>
                <mesh
                  geometry={nodes.pasted__pasted__pSphere2_pasted__pasted__blinn3_0.geometry}
                  material={nodes.pasted__pasted__pSphere2_pasted__pasted__blinn3_0.material}
                />
              </group>
              <group position={[891.01, 239.45, -649.31]} rotation={[0, -0.12, 0]} scale={[3.91, 6.82, 1.58]}>
                <mesh
                  geometry={nodes.pasted__pSphere1_pasted__pasted__blinn3_0.geometry}
                  material={nodes.pasted__pSphere1_pasted__pasted__blinn3_0.material}
                />
              </group>
            </group>
            <group position={[89.95, 122.14, -37.08]} scale={[53.69, 46.5, 82.47]}>
              <mesh geometry={nodes.pasted__pCone1_blinn5_0.geometry} material={materials.blinn5} />
            </group>
            <group position={[89.95, 76.01, -37.08]} scale={[29.75, 25.77, 45.7]}>
              <mesh
                geometry={nodes.pasted__pTorus1_pasted__blinn5_0.geometry}
                material={nodes.pasted__pTorus1_pasted__blinn5_0.material}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[98.45, 54.05, -136.61]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.84, 1.84, 1.84]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[5.19, -4.33, -11.07]} scale={47.89}>
            <mesh geometry={nodes.Kirby_body_Material008_0.geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.19, -4.33, -11.07]} scale={47.89}>
            <mesh geometry={nodes.Kirby_shoe_Material007_0.geometry} material={materials['Material.007']} />
          </group>
          <group position={[-10.72, 8.94, 22.85]} rotation={[-Math.PI / 2, 0, 0]} scale={10.95}>
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={nodes.Sphere_Material002_0.material} />
            <mesh geometry={nodes.Sphere_Material002_0001.geometry} material={nodes.Sphere_Material002_0001.material} />
          </group>
        </group>
      </group>
      <group position={[102.73, -24.96, 204.21]} rotation={[-1.51, -0.02, 0]} scale={[21.44, -22.95, 17.25]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[2.61, 0.63, -0.65]} rotation={[0.14, 0, 0]} scale={[1.55, 1.55, 1.64]}>
            <mesh
              geometry={nodes.pasted__pCube1_blinn_skin_0.geometry}
              material={nodes.pasted__pCube1_blinn_skin_0.material}
            />
          </group>
          <group position={[2.65, 4.52, -1.3]} rotation={[-0.29, 0, 0]} scale={[0.83, 1.5, 0.74]}>
            <mesh
              geometry={nodes.pasted__pCylinder1_brown_lambert_0.geometry}
              material={nodes.pasted__pCylinder1_brown_lambert_0.material}
            />
          </group>
          <group position={[2.48, 5.92, -1.86]} rotation={[0.05, -0.01, -0.27]} scale={[1.1, 0.95, 1]}>
            <mesh
              geometry={nodes.pasted__pSphere10_brown_lambert_0.geometry}
              material={nodes.pasted__pSphere10_brown_lambert_0.material}
              position={[-0.08, 0, -0.26]}
            />
          </group>
          <group position={[-2.61, 2.27, -0.58]} rotation={[-0.41, 0, 0]} scale={[1.2, 1.69, 1.08]}>
            <mesh
              geometry={nodes.pasted__pSphere11_brown_lambert_0.geometry}
              material={nodes.pasted__pSphere11_brown_lambert_0.material}
            />
          </group>
          <group position={[0, 1.89, -0.18]} rotation={[1.57, 0.79, 0]}>
            <mesh geometry={nodes.pPlane1_lambert_tie_0.geometry} material={nodes.pPlane1_lambert_tie_0.material} />
          </group>
          <group position={[0.23, 3.46, -0.18]} rotation={[1.58, 0.17, 0]} scale={[0.37, 0.88, 3.27]}>
            <mesh geometry={nodes.pPlane2_lambert_tie_0.geometry} material={nodes.pPlane2_lambert_tie_0.material} />
          </group>
          <group position={[-0.23, 3.46, -0.18]} rotation={[1.58, -0.17, 0]} scale={[0.37, 0.88, 3.27]}>
            <mesh geometry={nodes.pPlane3_lambert_tie_0.geometry} material={nodes.pPlane3_lambert_tie_0.material} />
          </group>
          <group position={[0.02, 3.05, -0.18]} rotation={[1.58, 0, 0]} scale={[0.67, 0.88, 1.52]}>
            <mesh geometry={nodes.pPlane4_lambert_tie_0.geometry} material={nodes.pPlane4_lambert_tie_0.material} />
          </group>
          <group position={[0, 8.83, -0.85]} scale={[0.85, 1.08, 0.85]}>
            <mesh geometry={nodes.pCone1_brown_lambert_0.geometry} material={nodes.pCone1_brown_lambert_0.material} />
          </group>
          <group position={[-2.61, 0.63, -0.65]} rotation={[0.14, 0, 0]} scale={[1.55, 1.55, 1.64]}>
            <mesh geometry={nodes.pCube1_blinn_skin_0.geometry} material={nodes.pCube1_blinn_skin_0.material} />
          </group>
          <group position={[-1.95, 0, -3.83]} rotation={[0, -0.2, 0]} scale={[1.53, 0.7, 2.15]}>
            <mesh geometry={nodes.pCube2_blinn_skin_0.geometry} material={nodes.pCube2_blinn_skin_0.material} />
          </group>
          <group position={[1.95, 0, -3.83]} rotation={[0, 0.2, 0]} scale={[1.53, 0.7, 2.15]}>
            <mesh geometry={nodes.pCube3_blinn_skin_0.geometry} material={nodes.pCube3_blinn_skin_0.material} />
          </group>
          <group position={[-2.65, 4.52, -1.3]} rotation={[-0.29, 0, 0]} scale={[0.83, 1.5, 0.74]}>
            <mesh
              geometry={nodes.pCylinder1_brown_lambert_0.geometry}
              material={nodes.pCylinder1_brown_lambert_0.material}
            />
          </group>
          <group position={[-1.82, 1.08, -3.81]} rotation={[0.36, 0, -0.07]} scale={[0.8, 1.18, 0.77]}>
            <mesh
              geometry={nodes.pCylinder2_brown_lambert_0.geometry}
              material={nodes.pCylinder2_brown_lambert_0.material}
            />
          </group>
          <group position={[1.82, 1.08, -3.81]} rotation={[0.36, 0, 0.07]} scale={[0.8, 1.18, 0.77]}>
            <mesh
              geometry={nodes.pCylinder3_brown_lambert_0.geometry}
              material={nodes.pCylinder3_brown_lambert_0.material}
            />
          </group>
          <group position={[0, 6.63, -0.21]} rotation={[0.14, 0, 0]} scale={[1, 0.84, 0.95]}>
            <mesh
              geometry={nodes.pSphere1_blinn_skin_0.geometry}
              material={nodes.pSphere1_blinn_skin_0.material}
              position={[0, -0.08, 0.01]}
            />
          </group>
          <group position={[-2.48, 5.92, -1.86]} rotation={[0.05, -0.01, -0.27]} scale={[1.1, 0.95, 1]}>
            <mesh
              geometry={nodes.pSphere10_brown_lambert_0.geometry}
              material={nodes.pSphere10_brown_lambert_0.material}
            />
          </group>
          <group position={[2.61, 2.27, -0.58]} rotation={[-0.41, 0, 0]} scale={[1.2, 1.69, 1.08]}>
            <mesh
              geometry={nodes.pSphere11_brown_lambert_0.geometry}
              material={nodes.pSphere11_brown_lambert_0.material}
            />
          </group>
          <group position={[0.98, 3.63, -5.02]} rotation={[1.69, 0.17, 0.12]} scale={[1.45, 1.13, 1.18]}>
            <mesh
              geometry={nodes.pSphere12_brown_lambert_0.geometry}
              material={nodes.pSphere12_brown_lambert_0.material}
              position={[-0.01, 0.01, 0.06]}
            />
          </group>
          <group position={[-0.99, 3.63, -5.02]} rotation={[1.69, 0.13, -0.16]} scale={[1.45, 1.13, 1.18]}>
            <mesh
              geometry={nodes.pSphere13_brown_lambert_0.geometry}
              material={nodes.pSphere13_brown_lambert_0.material}
              position={[-0.01, 0.01, 0.06]}
            />
          </group>
          <group position={[1.38, 2.68, -4.12]} rotation={[-0.9, 0, 0.3]} scale={[1.09, 1.75, 0.98]}>
            <mesh
              geometry={nodes.pSphere14_brown_lambert_0.geometry}
              material={nodes.pSphere14_brown_lambert_0.material}
            />
          </group>
          <group position={[-1.38, 2.68, -4.12]} rotation={[-0.87, -0.3, -0.06]} scale={[1.09, 1.75, 0.98]}>
            <mesh
              geometry={nodes.pSphere15_brown_lambert_0.geometry}
              material={nodes.pSphere15_brown_lambert_0.material}
            />
          </group>
          <group position={[0.41, 7.37, 0]} scale={0.31}>
            <mesh
              geometry={nodes.pSphere16_blinn_eye_0.geometry}
              material={nodes.pSphere16_blinn_eye_0.material}
              position={[0, 0, 0.83]}
              scale={[1.13, 1.13, 1.13]}
            />
          </group>
          <group position={[-0.41, 7.3, 0]} scale={0.31}>
            <mesh
              geometry={nodes.pSphere17_blinn_eye_0.geometry}
              material={nodes.pSphere17_blinn_eye_0.material}
              position={[0, 0.18, 0.97]}
            />
            <mesh
              geometry={nodes.pSphere17_blinn_eye_0001.geometry}
              material={nodes.pSphere17_blinn_eye_0001.material}
              position={[0.01, 0.23, 0.9]}
            />
          </group>
          <group position={[0, 6.58, -0.11]} rotation={[-0.05, 0, 0]} scale={[1, 0.24, 1]}>
            <mesh geometry={nodes.pSphere18_blinn_skin_0.geometry} material={nodes.pSphere18_blinn_skin_0.material} />
          </group>
          <group position={[0, 6.45, -0.11]} rotation={[0.04, 0, 0]} scale={[1, 0.24, 1]}>
            <mesh geometry={nodes.pSphere19_blinn_skin_0.geometry} material={nodes.pSphere19_blinn_skin_0.material} />
          </group>
          <group position={[0, 7, -0.87]} scale={[1, 1.36, 1]}>
            <mesh
              geometry={nodes.pSphere2_brown_lambert_0.geometry}
              material={nodes.pSphere2_brown_lambert_0.material}
            />
          </group>
          <group position={[0.46, 7.46, -0.34]} rotation={[0, 0.36, 0]} scale={[0.72, 0.57, 0.41]}>
            <mesh geometry={nodes.pSphere3_blinn_skin_0.geometry} material={nodes.pSphere3_blinn_skin_0.material} />
          </group>
          <group position={[0, 5.56, -2.02]} rotation={[0.57, 0, 0]} scale={[3.44, 1.55, 1.32]}>
            <mesh
              geometry={nodes.pSphere5_brown_lambert_0.geometry}
              material={nodes.pSphere5_brown_lambert_0.material}
              position={[0, -0.04, 0.03]}
            />
          </group>
          <group position={[0, 4.4, -3.36]} rotation={[0.72, 0, 0]} scale={[1.74, 1.57, 1.01]}>
            <mesh
              geometry={nodes.pSphere6_brown_lambert_0.geometry}
              material={nodes.pSphere6_brown_lambert_0.material}
            />
          </group>
          <group position={[-0.46, 7.46, -0.34]} rotation={[0, -0.36, 0]} scale={[0.72, 0.57, 0.41]}>
            <mesh
              geometry={nodes.pSphere7_blinn_skin_0.geometry}
              material={nodes.pSphere7_blinn_skin_0.material}
              position={[0, -0.12, 0]}
            />
          </group>
          <group position={[0.4, 7.36, -0.21]} scale={0.46}>
            <mesh
              geometry={nodes.pSphere8_phong_eye_0.geometry}
              material={nodes.pSphere8_phong_eye_0.material}
              position={[0, 0, 0.57]}
            />
          </group>
          <group position={[-0.4, 7.29, -0.21]} scale={0.46}>
            <mesh
              geometry={nodes.pSphere9_phong_eye_0.geometry}
              material={nodes.pSphere9_phong_eye_0.material}
              position={[0, 0.18, 0.47]}
            />
          </group>
          <group position={[0, 6.28, -0.9]} rotation={[0.92, 0, 0]} scale={[0.94, 0.94, 1.28]}>
            <mesh geometry={nodes.pTorus1_lambert_tie_0.geometry} material={nodes.pTorus1_lambert_tie_0.material} />
          </group>
        </group>
      </group>
      <mesh
        geometry={nodes.L_Schwarzlose.geometry}
        material={materials['L Schwarzlose']}
        position={[110.01, 16.85, -22.95]}
        scale={[14.03, 13.21, 14.06]}
      />
    </group>
  )
}

useGLTF.preload('/where-my-money.glb')
