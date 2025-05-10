import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SolarSystem from '../../Components/Solar_system';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './SolarSystemPage.css';
import Sidebar from '../../Components/SideMenu/sideMenu';

function SolarSystemPage() {
    return (
        <>
            <div className="solarsystem">
                <div className="header">
                    <Header />
                </div>


                <div className="main-content">
                    <Sidebar/>

                    <div className="model">
                        <Canvas>
                            <ambientLight />
                            <OrbitControls />
                            <Suspense fallback={null}>
                                <SolarSystem />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>


                
            </div>
        </>
    );
}

export default SolarSystemPage;