import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function UranusModel(props) {
  const { nodes, materials } = useGLTF('/uranus_files/uranus.gltf');
  const uranusRef = useRef();

  useFrame(() => {
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={uranusRef} {...props} dispose={null} position={[0, -0.5, 0]}>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Uranus planète */}
          <mesh
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials['Material.002']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2}
          />
          {/* Anneaux agrandis indépendamment */}
          <mesh
            geometry={nodes.Circle_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={3.4}
          />
          <mesh
            geometry={nodes.Circle001_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={3.2}
          />
          <mesh
            geometry={nodes.Circle002_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={3}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/uranus_files/uranus.gltf');
