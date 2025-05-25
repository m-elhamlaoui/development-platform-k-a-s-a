import React, { Suspense } from 'react';
import './Venus.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import VenusModel from '../../Planets_files/Venus2';
import stars from '../../assets/img/stars.jpg'; 

function Venus() {
    return (
        <div className="venus-container">
            <Header />
            <Sidebar />

            <div
                className="venus-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="venus-canvas-wrapper">
                    <Canvas className="venus-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <VenusModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Vénus</h1>
                    <p>
                        Vénus, deuxième planète du système solaire, est souvent qualifiée de jumelle de la Terre en raison de sa taille et de sa masse similaires. Cependant, elle présente des conditions extrêmes avec une atmosphère composée à 96% de dioxyde de carbone, créant un effet de serre runaway qui maintient sa surface à 465°C, température la plus chaude du système solaire. Entourée d'épais nuages d'acide sulfurique, Vénus tourne sur elle-même dans le sens inverse des autres planètes et si lentement qu'un jour vénusien dure plus longtemps que son année. Sa surface est dominée par des plaines volcaniques et plus de 1 600 volcans majeurs.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Venus;