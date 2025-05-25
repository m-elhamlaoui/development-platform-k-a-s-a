import React, { Suspense } from 'react';
import './Earth.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import EarthModel from '../../Planets_files/Earth2';
import stars from '../../assets/img/stars.jpg'; 

function Earth() {
    return (
        <div className="earth-container">
            <Header />
            <Sidebar />

            <div
                className="earth-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="earth-canvas-wrapper">
                    <Canvas className="earth-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <EarthModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Terre</h1>
                    <p>
                        La Terre, troisième planète du système solaire, est le seul monde connu abritant la vie. Composée d'un noyau de fer, d'un manteau rocheux et d'une fine croûte, elle est recouverte à 71% d'eau liquide. Son atmosphère riche en azote et en oxygène protège la surface des radiations solaires et maintient une température moyenne de 15°C. La Terre possède un champ magnétique généré par son noyau qui la protège du vent solaire. Accompagnée de la Lune, son unique satellite naturel, elle présente des cycles jour/nuit et des saisons qui ont façonné l'évolution de la vie depuis plus de 3,5 milliards d'années.


                    </p>
                </div>
            </div>

        </div>
    );
}

export default Earth;