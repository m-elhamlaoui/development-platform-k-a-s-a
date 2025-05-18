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
                        Mars, often called the Red Planet due to its rusty iron oxide surface, is the fourth planet from the Sun. It features the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that would stretch across the United States. Mars has two small moons, Phobos and Deimos, and evidence suggests it once had flowing water on its surface. With thin atmosphere composed mainly of carbon dioxide, Mars experiences extreme temperature variations and frequent dust storms that can engulf the entire planet.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Mars;