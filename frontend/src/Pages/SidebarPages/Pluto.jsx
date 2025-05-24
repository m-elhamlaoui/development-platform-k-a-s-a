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
                    <h1>Pluton</h1>
                    <p>
                        Pluton, autrefois considérée comme la neuvième planète du système solaire, est désormais classée comme planète naine depuis 2006. Avec un diamètre d'environ 2 370 km, elle est composée principalement de roche et de glaces. Sa surface présente des caractéristiques étonnantes comme la "Tombaugh Regio", une région en forme de cœur formée de glace d'azote. Accompagnée de cinq lunes dont Charon, la plus grande, Pluton effectue une orbite excentrique qui la fait parfois passer plus près du Soleil que Neptune.

                    </p>
                </div>
            </div>

        </div>
    );
}

export default Pluto;