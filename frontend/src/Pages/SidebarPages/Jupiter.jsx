import React, { Suspense } from 'react';
import './Jupiter.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import JupiterModel from '../../Planets_files/Jupiter2';
import stars from '../../assets/img/stars.jpg'; 

function Jupiter() {
    return (
        <div className="jupiter-container">
            <Header />
            <Sidebar />

            <div
                className="jupiter-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="jupiter-canvas-wrapper">
                    <Canvas className="jupiter-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <JupiterModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Jupiter</h1>
                    <p>
                        Jupiter est la plus grande planète du système solaire, avec une masse 318 fois supérieure à celle de la Terre. Cette géante gazeuse est caractérisée par sa Grande Tache Rouge, un gigantesque anticyclone qui persiste depuis au moins 400 ans. Entourée de 79 lunes connues et d'un faible système d'anneaux, Jupiter possède un puissant champ magnétique et une atmosphère composée principalement d'hydrogène et d'hélium, créant des bandes nuageuses colorées qui encerclent la planète.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Jupiter;