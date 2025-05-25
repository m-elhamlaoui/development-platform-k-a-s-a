import React, { Suspense } from 'react';
import './Uranus.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import UranusModel from '../../Planets_files/Uranus2';
import stars from '../../assets/img/stars.jpg'; 

function Uranus() {
    return (
        <div className="uranus-container">
            <Header />
            <Sidebar />

            <div
                className="uranus-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="uranus-canvas-wrapper">
                    <Canvas className="uranus-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <UranusModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Uranus</h1>
                    <p>
                        Uranus, septième planète du système solaire, se distingue par son axe de rotation incliné à 98 degrés, la faisant littéralement "rouler" sur son orbite. Cette géante glacée, composée principalement d'hydrogène, d'hélium et de glaces d'eau, d'ammoniac et de méthane, présente une couleur bleu-vert caractéristique. Entourée de 27 lunes connues et de 13 anneaux étroits et sombres, Uranus possède une atmosphère dynamique malgré sa température extrêmement froide d'environ -224°C, faisant d'elle l'une des planètes les plus froides du système solaire.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Uranus;