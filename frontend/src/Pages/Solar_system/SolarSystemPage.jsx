
import { useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Solar_system from '../../Components/Solar_system';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './SolarSystemPage.css';


function SolarSystemPage() {
    const [count, setCount] = useState(0)


    return(
        <>
        <div className="solarsystem">
            <div className="header">
              <Header />
            </div>

            <div className="model">
                <Canvas>
                    <ambientLight/>
                    <OrbitControls/>
                    <Suspense fallback={null}>
                        <Solar_system/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="footer">
                <Footer />
            </div>
            </div>
        </>
    )
}


export default SolarSystemPage;


