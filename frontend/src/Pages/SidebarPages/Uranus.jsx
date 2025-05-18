import React, { Suspense } from 'react';
import './Uranus.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import UranusModel from '../../Planets_files/Uranus2';
import stars from '../../assets/img/stars.jpg'; 

function Uranus() {
    return (
        <div className="uranus-container">
            <Header />
            <Sidebar />

            <div
                className="uranus-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="uranus-canvas-wrapper">
                    <Canvas className="uranus-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <UranusModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>Uranus</h1>
                    <p>
                        Uranus is unique among planets as it rotates on its side, with its axis tilted at nearly 98 degrees, likely the result of a massive collision early in its history. This ice giant appears as a featureless blue-green sphere due to methane in its atmosphere, which absorbs red light. Uranus has 27 known moons, all named after characters from the works of Shakespeare and Alexander Pope, and a system of 13 faint rings. With an average temperature of -355°F (-215°C), Uranus is the coldest planet in our solar system, despite not being the furthest from the Sun.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Uranus;