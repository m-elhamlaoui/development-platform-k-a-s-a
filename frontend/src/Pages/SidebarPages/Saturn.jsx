import React, { Suspense } from 'react';
import './Saturn.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import SaturnModel from '../../Planets_files/Saturn2';
import stars from '../../assets/img/stars.jpg'; 

function Saturn() {
    return (
        <div className="saturn-container">
            <Header />
            <Sidebar />

            <div
                className="saturn-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="saturn-canvas-wrapper">
                    <Canvas className="saturn-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <SaturnModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Saturne</h1>
                    <p>
                        Saturne, sixième planète du système solaire, est célèbre pour son spectaculaire système d'anneaux composés de glace et de poussières, s'étendant sur plus de 280 000 km. Cette géante gazeuse, composée principalement d'hydrogène et d'hélium, possède une densité si faible qu'elle flotterait dans un océan suffisamment grand. Avec 82 lunes confirmées, dont Titan qui possède une atmosphère dense, Saturne présente des phénomènes uniques comme un hexagone nuageux à son pôle nord et des tempêtes périodiques gigantesques.                    </p>
                </div>
            </div>

        </div>
    );
}

export default Saturn;