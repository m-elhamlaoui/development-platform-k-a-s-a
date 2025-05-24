import React, { useRef } from 'react';  
import { useGLTF } from '@react-three/drei';  
import { useFrame } from '@react-three/fiber';  

export default function NeptuneModel(props) {  
  const { nodes, materials } = useGLTF('/neptune_files/neptune.gltf');  
  const neptuneRef = useRef();  

  // // Rotation de Neptune autour de l'axe Y
  // useFrame(() => {  
  //   if (neptuneRef.current) {  
  //     neptuneRef.current.rotation.y += 0.001; // vitesse de rotation
  //   }  
  // });

  return (  
    <group ref={neptuneRef} {...props} dispose={null} scale={1.4} position={[-1, -1.5, 0]}>  
      <mesh   
        geometry={nodes.Object_2.geometry}   
        material={materials.moon}   
        rotation={[-Math.PI / 2, 0, 0]}  // Inclinaison de Neptune
      />  
    </group>  
  );  
}  

useGLTF.preload('/neptune_files/neptune.gltf');
