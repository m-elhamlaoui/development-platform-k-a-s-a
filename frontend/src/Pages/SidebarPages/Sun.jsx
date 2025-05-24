import React, { Suspense } from 'react';
import './Sun.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import SunModel from '../../Planets_files/Sun2';
import stars from '../../assets/img/stars.jpg'; 

function Sun() {
    return (
        <div className="sun-container">
            <Header />
            <Sidebar />

            <div
                className="sun-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="sun-canvas-wrapper">
                    <Canvas className="sun-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <SunModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Soleil</h1>
                    <p>
                        Le Soleil est l'étoile au centre de notre système solaire, représentant 99,86% de la masse totale de celui-ci. Cette sphère de plasma brûlant à environ 15 millions de degrés en son cœur génère son énergie par fusion nucléaire, transformant l'hydrogène en hélium. Sa surface visible, la photosphère, affiche une température d'environ 5 500°C et présente des phénomènes comme les taches solaires et les éruptions solaires. Âgé d'environ 4,6 milliards d'années, le Soleil est à mi-parcours de sa vie et continuera de briller pendant encore 5 milliards d'années avant de se transformer en géante rouge.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Sun;