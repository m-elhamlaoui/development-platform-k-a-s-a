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
                    <h1>Saturn</h1>
                    <p>
                        Saturn is instantly recognizable for its magnificent ring system, composed primarily of ice particles with some rocky debris and dust. This gas giant is the second-largest planet in our solar system but has the lowest density—so low that it would float in water if there were an ocean large enough. Saturn's atmosphere is primarily hydrogen and helium, and it has at least 82 moons, including Titan, the only moon in the solar system with a substantial atmosphere, and Enceladus, which has subsurface oceans and active geysers.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Saturn;