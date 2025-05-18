import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function VenusModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/venus_files/venus.gltf')

  // Rotation automatique
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  })

  return (
    <group ref={group} {...props} dispose={null} scale={1.8} position={[0, -0.1, 0]}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/venus_files/venus.gltf')
