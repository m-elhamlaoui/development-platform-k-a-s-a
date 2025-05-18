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
                        Neptune, the eighth and farthest known planet from the Sun, is a cold ice giant with the strongest winds in the solar system reaching speeds of over 1,200 mph (2,000 km/h). Its deep blue color comes from methane in its atmosphere absorbing red light. Neptune has 14 known moons, with Triton being the largest and only large moon in the solar system to orbit in the opposite direction of its planet's rotation. Neptune also features the Great Dark Spot, a storm system similar to Jupiter's Great Red Spot but more transient in nature.

                    </p>
                </div>
            </div>

        </div>
    );
}

export default Neptune;