import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import ModelAni from './components/Waving'

function App() {
  return (
    <Canvas 
      camera={{ position: [4, 3, 12.25], fov: 15 }}
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#495579',
      }}
    >
      <ambientLight intensity={0.85} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5} />
      <ModelAni position={[0, 0, 0]} />
      <OrbitControls target={[0, 1.2, 0]} enableDamping={true} />
    </Canvas>
  );
}

export default App;
