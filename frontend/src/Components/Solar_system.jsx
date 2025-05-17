import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { PerspectiveCamera } from '@react-three/drei';  // Importer la caméra

import starsTexture from '../assets/img/stars.jpg';
import sunTexture from '../assets/img/sun.jpg';
import mercuryTexture from '../assets/img/mercury.jpg';
import venusTexture from '../assets/img/venus.jpg';
import earthTexture from '../assets/img/earth.jpg';
import marsTexture from '../assets/img/mars.jpg';
import jupiterTexture from '../assets/img/jupiter.jpg';
import saturnTexture from '../assets/img/saturn.jpg';
import saturnRingTexture from '../assets/img/saturn ring.png';
import uranusTexture from '../assets/img/uranus.jpg';
import uranusRingTexture from '../assets/img/uranus ring.png';
import neptuneTexture from '../assets/img/neptune.jpg';

// 💫 Composant Planète avec rotation sur elle-même et orbite
function Planet({ texture, position, size, ring, orbitSpeed = 0.005, rotationSpeed = 0.01 }) {
  const map = useLoader(TextureLoader, texture);
  const meshRef = React.useRef();
  const objRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed;
    if (objRef.current) objRef.current.rotation.y += orbitSpeed;
  });

  return (
    <group ref={objRef}>
      {/* Orbite */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[position - 0.1, position + 0.1, 64]} />
        <meshBasicMaterial color="white" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Planète */}
      <mesh ref={meshRef} position={[position, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={map} />
      </mesh>

      {/* Anneau si besoin */}
      {ring && (
        <mesh position={[position, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 32]} />
          <meshStandardMaterial
            map={useLoader(TextureLoader, ring.texture)}
            side={THREE.DoubleSide}
            transparent
          />
        </mesh>
      )}
    </group>
  );
}

// 🪐 Système Solaire
const SolarSystem = () => {
  const sunMap = useLoader(TextureLoader, sunTexture);
  const starsMap = useLoader(TextureLoader, starsTexture);

  // 📸 Caméra pour observer le système solaire
  const cameraPosition = new THREE.Vector3(0, 50, 200);  // Position de la caméra
  const lookAt = new THREE.Vector3(0, 0, 0);  // Cible de la caméra (le centre du système solaire)

  useFrame((state) => {
    state.scene.rotation.y += 0.0005;
  });

  return (
    <>
      {/* Définir la caméra */}
      <PerspectiveCamera makeDefault position={cameraPosition} fov={75} near={0.1} far={1000} />
      
      <ambientLight intensity={0.2} />
      <pointLight color={0xffffff} intensity={2} position={[0, 0, 0]} />

      {/* Fond étoilé - Augmenter encore la taille de la sphère */}
      <mesh>
        <sphereGeometry args={[500, 64, 64]} /> {/* Sphère encore plus grande pour couvrir toute la scène */}
        <meshBasicMaterial map={starsMap} side={THREE.BackSide} /> {/* Appliquer la texture d'étoiles avec BackSide */}
      </mesh>

      {/* Soleil */}
      <mesh>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial map={sunMap} />
      </mesh>

      {/* Planètes avec orbite + rotation réelle */}
      <Planet texture={mercuryTexture} position={20} size={2} orbitSpeed={0.04} rotationSpeed={0.005} />
      <Planet texture={venusTexture} position={30} size={3} orbitSpeed={0.03} rotationSpeed={-0.001} /> {/* Rotation rétrograde */}
      <Planet texture={earthTexture} position={40} size={3.5} orbitSpeed={0.025} rotationSpeed={0.02} />
      <Planet texture={marsTexture} position={50} size={2.5} orbitSpeed={0.02} rotationSpeed={0.018} />
      <Planet texture={jupiterTexture} position={65} size={5} orbitSpeed={0.01} rotationSpeed={0.04} />
      <Planet
        texture={saturnTexture}
        position={80}
        size={4.5}
        orbitSpeed={0.008}
        rotationSpeed={0.038}
        ring={{ innerRadius: 6, outerRadius: 10, texture: saturnRingTexture }}
      />
      <Planet
        texture={uranusTexture}
        position={95}
        size={4.2}
        orbitSpeed={0.006}
        rotationSpeed={0.03}
        ring={{ innerRadius: 6, outerRadius: 9, texture: uranusRingTexture }}
      />
      <Planet texture={neptuneTexture} position={110} size={3.5} orbitSpeed={0.005} rotationSpeed={0.032} />
    </>
  );
};

export default SolarSystem;
