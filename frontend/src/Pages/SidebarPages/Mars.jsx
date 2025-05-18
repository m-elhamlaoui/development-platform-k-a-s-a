import React, { Suspense } from 'react';
import './Mars.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MarsModel from '../../Planets_files/Mars2';
import stars from '../../assets/img/stars.jpg'; 

function Mars() {
    return (
        <div className="mars-container">
            <Header />
            <Sidebar />

            <div
                className="mars-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mars-canvas-wrapper">
                    <Canvas className="mars-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <MarsModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Mars</h1>
                    <p>
                        Mars, surnommée la "planète rouge" en raison de sa surface riche en oxyde de fer, est la quatrième planète du système solaire. Elle abrite le plus haut volcan connu, Olympus Mons, et le plus grand canyon, Valles Marineris. Avec ses deux petites lunes, Phobos et Deimos, Mars présente des saisons similaires à celles de la Terre grâce à son inclinaison axiale comparable. Les missions spatiales ont révélé des traces d'eau ancienne et possiblement actuelle, faisant de Mars une cible privilégiée pour la recherche de vie extraterrestre.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Mars;