import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function SaturnModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/saturn_files/saturn.gltf');

  // Rotation automatique
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0012;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.8} position={[0, -0.2, -8]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes['Saturn_Material_#50_0'].geometry}
          material={materials.Material_50}
        />
        <mesh
          geometry={nodes['Saturn_Clouds_Material_#62_0'].geometry}
          material={materials.Material_62}
        />
        <mesh
          geometry={nodes['Saturn_Rings_Material_#63_0'].geometry}
          material={materials.Material_63}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/saturn_files/saturn.gltf');
