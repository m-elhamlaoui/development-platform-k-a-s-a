  import React, { Suspense } from 'react';
import './Neptune.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MercuryModel from '../../Planets_files/Neptune2';
import stars from '../../assets/img/stars.jpg'; 

function Neptune() {
    return (
        <div className="neptune-container">
            <Header />
            <Sidebar />

            <div
                className="neptune-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="neptune-canvas-wrapper">
                    <Canvas className="neptune-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <MercuryModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Neptune</h1>
                    <p>
                        Neptune, huitième planète du système solaire, est la plus éloignée du Soleil et la dernière des géantes gazeuses. Caractérisée par sa couleur bleue intense due à la présence de méthane dans son atmosphère, elle abrite les vents les plus rapides du système solaire atteignant 2 100 km/h. Neptune possède 14 lunes connues, dont Triton qui orbite dans le sens opposé à la rotation de la planète, ainsi que cinq anneaux principaux. Découverte par calculs mathématiques plutôt que par observation directe, elle n'a été visitée qu'une seule fois par la sonde Voyager 2 en 1989.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Neptune;