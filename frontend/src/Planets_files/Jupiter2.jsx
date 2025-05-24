import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function JupiterModel(props) {
  const { nodes, materials } = useGLTF('/jupiter_files/jupiter.gltf');
  const jupiterRef = useRef();



  return (
    <group ref={jupiterRef} {...props} dispose={null} position={[-3, -2, -2]} scale={2.4}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.moon}
        rotation={[-Math.PI / 2, 0, 0]} // orientation du modèle
      />
    </group>
  );
}

useGLTF.preload('/jupiter_files/jupiter.gltf');
