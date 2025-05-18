import React, { Suspense } from 'react';
import './Mercury.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MercuryModel from '../../Planets_files/Mercury2';
import stars from '../../assets/img/stars.jpg'; 

function Mercury() {
    return (
        <div className="mercury-container">
            <Header />
            <Sidebar />

            <div
                className="mercury-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mercury-canvas-wrapper">
                    <Canvas className="mercury-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <MercuryModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Mercure</h1>
                    <p>
                        Mercure est la planète la plus proche du Soleil et la plus petite du système solaire. Dépourvue d'atmosphère significative, elle subit des variations de température extrêmes, passant de 430°C le jour à -180°C la nuit. Sa surface, criblée de cratères comme notre Lune, témoigne d'une activité géologique ancienne. Mercure effectue une rotation complète sur elle-même en 59 jours terrestres, tandis que son année ne dure que 88 jours, créant ainsi un jour mercurien équivalent à 176 jours terrestres.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Mercury;