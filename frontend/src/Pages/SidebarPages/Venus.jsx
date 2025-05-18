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
                    <h1>Venus</h1>
                    <p>
                        Venus, often called Earth's sister planet due to similar size and mass, is the second planet from the Sun and the hottest planet in our solar system. Its thick atmosphere of carbon dioxide creates a runaway greenhouse effect, trapping heat and resulting in surface temperatures of about 900°F (475°C)—hot enough to melt lead. Venus rotates backwards compared to other planets and so slowly that a day on Venus is longer than its year. The planet's surface is covered with volcanoes, mountains, and vast lava plains, hidden beneath permanent clouds of sulfuric acid that make it the brightest natural object in Earth's night sky after the Moon.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Venus;