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
                    <h1>Sun</h1>
                    <p>
                        The Sun is the star at the center of our solar system and contains 99.8% of the system's total mass. This yellow dwarf star fuses about 600 million tons of hydrogen into helium every second, generating the heat and light that sustains life on Earth. The Sun's surface temperature is about 5,500°C (10,000°F), while its core reaches 15 million°C (27 million°F). Its atmosphere consists of the photosphere (visible surface), chromosphere, and corona (outer atmosphere). Solar activity includes sunspots, solar flares, and coronal mass ejections that can affect Earth's magnetic field and electronics.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Sun;