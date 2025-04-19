

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/solar_system.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.472, 0.12, 0]} scale={0.063}>
          <group name="5ce69907e7be4b5a89c12dcbbc7d7108fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Torus_007" rotation={[-Math.PI / 2, 0, 0]} scale={6.317}>
                  <mesh name="Torus_007_unnamed_0" geometry={nodes.Torus_007_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_006" rotation={[-Math.PI / 2, 0, 0]} scale={5.361}>
                  <mesh name="Torus_006_unnamed_0" geometry={nodes.Torus_006_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_005" rotation={[-Math.PI / 2, 0, 0]} scale={4.531}>
                  <mesh name="Torus_005_unnamed_0" geometry={nodes.Torus_005_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_004" rotation={[-Math.PI / 2, 0, 0]} scale={3.485}>
                  <mesh name="Torus_004_unnamed_0" geometry={nodes.Torus_004_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_003" rotation={[-Math.PI / 2, 0, 0]} scale={2.51}>
                  <mesh name="Torus_003_unnamed_0" geometry={nodes.Torus_003_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_002" rotation={[-Math.PI / 2, 0, 0]} scale={1.832}>
                  <mesh name="Torus_002_unnamed_0" geometry={nodes.Torus_002_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_000" rotation={[-Math.PI / 2, 0, 0]} scale={1.326}>
                  <mesh name="Torus_000_unnamed_0" geometry={nodes.Torus_000_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="Torus_001" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Torus_001_unnamed_0" geometry={nodes.Torus_001_unnamed_0.geometry} material={materials.unnamed} />
                </group>
                <group name="BezierCircle_008" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={74.656}>
                  <group name="Sphere_008" position={[-0.756, -0.653, 0.011]} rotation={[0, 0, 0.124]} scale={0.031}>
                    <mesh name="Sphere_008_Material_010_0" geometry={nodes.Sphere_008_Material_010_0.geometry} material={materials.Material_010} />
                  </group>
                </group>
                <group name="BezierCircle_007" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={63.315}>
                  <group name="Sphere_007" position={[-0.805, 0.597, 0.013]} scale={0.02}>
                    <mesh name="Sphere_007_Material_009_0" geometry={nodes.Sphere_007_Material_009_0.geometry} material={materials.Material_009} />
                  </group>
                </group>
                <group name="BezierCircle_006" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={53.529}>
                  <group name="Sphere_006" position={[0.88, 0.457, 0.016]} rotation={[0, 0, 0.476]} scale={0.035}>
                    <mesh name="Sphere_006_Material_008_0" geometry={nodes.Sphere_006_Material_008_0.geometry} material={materials.Material_008} />
                  </group>
                </group>
                <group name="BezierCircle_005" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={41.142}>
                  <group name="Sphere_005" position={[-0.907, -0.403, 0.021]} rotation={[0, 0, -1.618]} scale={0.066}>
                    <mesh name="Sphere_005_Material_007_0" geometry={nodes.Sphere_005_Material_007_0.geometry} material={materials.Material_007} />
                  </group>
                </group>
                <group name="BezierCircle_004" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={29.634}>
                  <group name="Sphere" position={[0.732, -0.675, 0.028]} rotation={[0, 0, -0.749]} scale={0.055}>
                    <mesh name="Sphere_Material_003_0" geometry={nodes.Sphere_Material_003_0.geometry} material={materials.Material_003} />
                  </group>
                </group>
                <group name="BezierCircle_002" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={21.574}>
                  <group name="Sphere_003" position={[0.568, 0.815, 0.072]} rotation={[0, 0, 2.606]} scale={0.076}>
                    <group name="BezierCircle_003" rotation={[0, 0, 0.407]} scale={1.597}>
                      <group name="Sphere_010" position={[-0.919, -0.354, 0.056]} rotation={[0, 0, 2.482]} scale={0.11}>
                        <mesh name="Sphere_010_Material_011_0" geometry={nodes.Sphere_010_Material_011_0.geometry} material={materials.Material_011} />
                      </group>
                    </group>
                    <mesh name="Sphere_003_Material_004_0" geometry={nodes.Sphere_003_Material_004_0.geometry} material={materials.Material_004} />
                  </group>
                </group>
                <group name="BezierCircle_001" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={15.593}>
                  <group name="Sphere_009" position={[0.045, 0.98, 0.072]} rotation={[0, 0, 0.626]} scale={0.076}>
                    <mesh name="Sphere_009_Material_006_0" geometry={nodes.Sphere_009_Material_006_0.geometry} material={materials.Material_006} />
                  </group>
                </group>
                <group name="BezierCircle" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={11.745}>
                  <group name="Sphere_002" position={[0.309, 0.958, 0.072]} rotation={[0, 0, 1.245]} scale={0.062}>
                    <mesh name="Sphere_002_Material_005_0" geometry={nodes.Sphere_002_Material_005_0.geometry} material={materials.Material_005} />
                  </group>
                </group>
                <group name="Sphere_001" position={[0.016, -0.873, 0.083]} rotation={[-Math.PI / 2, 0, 0]} scale={5.337}>
                  <mesh name="Sphere_001_Material_002_0" geometry={nodes.Sphere_001_Material_002_0.geometry} material={materials.Material_002} />
                </group>
                <group name="Sun" position={[0, 5.74, 0]}>
                  <group name="Object_50" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_51" />
                  </group>
                </group>
                <group name="Lamp_001" position={[0.01, -0.921, 0.078]} rotation={[1.89, 0.881, -2.045]}>
                  <group name="Object_53" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_54" />
                  </group>
                </group>
                <group name="Lamp" position={[0.01, -0.921, 0.078]} rotation={[1.89, 0.881, -2.045]}>
                  <group name="Object_56" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_57" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/solar_system.gltf')
