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
                        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
                        This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water.
                    </p>
                    <p>
                        Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. 
                        The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses 
                        within Earth's land hemisphere.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Pluto;
