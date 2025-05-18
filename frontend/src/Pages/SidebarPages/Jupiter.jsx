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
                        Jupiter is the largest planet in our solar system, with a mass two and a half times that of all other planets combined. This gas giant is known for its Great Red Spot, a massive storm that has been raging for at least 400 years. Jupiter's atmosphere consists mainly of hydrogen and helium, and it has a strong magnetic field that traps radiation in belts around the planet. With 79 known moons, including the four large Galilean moons (Io, Europa, Ganymede, and Callisto), Jupiter is like a miniature solar system.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Jupiter;