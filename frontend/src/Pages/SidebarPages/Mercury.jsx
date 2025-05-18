import React, { Suspense } from 'react';
import './Mercury.css';
import Sidebar from '../../Components/SideMenu/sideMenu';
import Header from '../../Components/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MercuryModel from '../../Planets_files/Mercury2';
import stars from '../../assets/img/stars.jpg'; 

function Mercury() {
    return (
        <div className="mercury-container">
            <Header />
            <Sidebar />

            <div
                className="mercury-page"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mercury-canvas-wrapper">
                    <Canvas className="mercury-canvas">
                        <ambientLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <MercuryModel />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>

                <div className="description">
                    <h1>mercury</h1>
                    <p>
                        Mercury is the smallest and innermost planet in our solar system, orbiting closest to the Sun. With virtually no atmosphere to retain heat, Mercury experiences the most extreme temperature variations of any planet, ranging from 800°F (430°C) during the day to -290°F (-180°C) at night. Its heavily cratered surface resembles our Moon, and it rotates so slowly that a single day on Mercury lasts for about 176 Earth days. Despite its proximity to the Sun, radar observations have detected ice in permanently shadowed craters at Mercury's poles.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Mercury;