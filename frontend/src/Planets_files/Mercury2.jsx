import React, { useRef } from 'react';  
import { useGLTF } from '@react-three/drei';  
import { useFrame } from '@react-three/fiber';  

export default function MercuryModel(props) {  
  const { nodes, materials } = useGLTF('/mercury_files/mercury.gltf');  
  const mercuryRef = useRef();  



  return (  
    <group ref={mercuryRef} {...props} dispose={null} position={[-1.5, -1.2, 1]} scale={1.4}>  
      <mesh   
        geometry={nodes.Object_2.geometry}   
        material={materials.moon}   
        rotation={[-Math.PI / 2, 0, 0]}  // Inclinaison de la planète
      />  
    </group>  
  );  
}  

useGLTF.preload('/mercury_files/mercury.gltf');
