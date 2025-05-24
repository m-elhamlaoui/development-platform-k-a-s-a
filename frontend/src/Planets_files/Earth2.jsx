import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function EarthModel(props) {
  const { nodes, materials } = useGLTF('/earth_files/earth.gltf');
  const earthRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/earth_files/earth.gltf');
