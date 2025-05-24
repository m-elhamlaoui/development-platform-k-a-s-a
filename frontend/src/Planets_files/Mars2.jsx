import React, { useRef } from 'react';  
import { useGLTF } from '@react-three/drei';  
import { useFrame } from '@react-three/fiber';  

export default function MarsModel(props) {  
  const { nodes, materials } = useGLTF('/mars_files/mars.gltf');  
  const marsRef = useRef();  

  // Rotation de Mars autour de l'axe Y
  useFrame(() => {  
    if (marsRef.current) {  
      marsRef.current.rotation.y += 0.002; // vitesse de rotation  
    }  
  });

  return (  
    <group ref={marsRef} {...props} dispose={null} scale={2.5} position={[0, -3.4, 0]}>  
      <mesh   
        geometry={nodes.Object_2.geometry}   
        material={materials['Material.001']}   
        rotation={[-Math.PI / 2, 0, 0]}  // Inclinaison de la planète
      />  
    </group>  
  );  
}  

useGLTF.preload('/mars_files/mars.gltf');
