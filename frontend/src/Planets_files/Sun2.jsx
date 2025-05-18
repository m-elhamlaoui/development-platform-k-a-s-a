import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sun_files/sun.gltf')
  const sunRef = useRef()

  // Rotation du Soleil
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001; // Vitesse de rotation (ajuste selon besoin)
    }
  })

  return (
    <group ref={sunRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2.633} />
    </group>
  )
}

useGLTF.preload('/sun_files/sun.gltf')
