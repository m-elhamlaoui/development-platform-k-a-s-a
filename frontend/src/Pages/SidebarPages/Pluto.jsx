import React, { Suspense } from 'react';
import './Pluto.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import PlutoModel from '../../Planets_files/Pluto2';
import stars from '../../assets/img/stars.jpg'; 

function Pluto() {
    return (
        <div className="pluto-container">
            <Header />
            <Sidebar />

            <div
                className="pluto-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="pluto-canvas-wrapper">
                    <Canvas className="pluto-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <PlutoModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Pluto</h1>
                    <p>
                        Pluto, reclassified as a dwarf planet in 2006, orbits in the distant Kuiper Belt beyond Neptune. Despite its small size (smaller than Earth's moon), Pluto has five moons of its own, with Charon being the largest. NASA's New Horizons mission revealed a surprisingly complex world with mountains of water ice, glaciers of nitrogen ice, and a thin atmosphere that expands and contracts as Pluto's highly elliptical orbit takes it closer to and farther from the Sun. Pluto's surface features include the heart-shaped Tombaugh Regio and evidence of geological activity.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Pluto;