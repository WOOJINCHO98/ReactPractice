import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelAni from './components/Waving'
import styles from "./App.css";
import { BrowserView, MobileView } from 'react-device-detect';


function App() {
  return (
    
    <><Container></Container>

    <div className='App'>
      <BrowserView>
        <header className='App-header'>
        </header>


        <body className='App-body'>
          <div className='Main'>
            <div className='TitleContainer'>
              <p className='Title'>HelloWorld!</p>
              <p className='subTitle'>조우진입니다.</p>
            </div>
            <img src='img/ASDF.png' className='ASDF' alt='ASDF'/>
            <div className='CanvasBack' src='img/ASDF.png'>
              <div className='CanvasContainer'>
                <Canvas
                  className='Canvas'
                  camera={{ position: [2, 2, 12.25], fov: 6 }}
                  style={{
                    height: '50vh',
                    width: '50vw',
                  }}
                >
                  <ambientLight intensity={0.85} />
                  <ambientLight intensity={0.1} />
                  <directionalLight intensity={0.5} />
                  <ModelAni position={[0, 0, 0]} />
                  <OrbitControls target={[0, 1.2, 0]} enableDamping={true} enableZoom={false}/>
                </Canvas>
              </div>
            </div>
          </div>
          




          <div className='TextContainer'></div>
        </body>
      </BrowserView>

      <MobileView>
      <header className='App-header'>
          <p className='Title'>HelloWorld!</p>
          <p className='subTitle'>모바일.</p>
          

          </header>

        <body className='App-body'>

        <div className='CanvasContainer'>

        <Canvas
          className='Canvas'
          camera={{ position: [4, 3, 12.25], fov: 15 }}
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#000',
            justifyContent: 'right',
            alignItems: 'right',

          }}
        >
            <ambientLight intensity={0.85} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.5} />
            <ModelAni position={[0, 0, 0]} />
            <OrbitControls target={[0, 1.2, 0]} enableDamping={true} enableZoom={false}/>
          </Canvas>
          </div>
          <div className='TextContainer'></div>
          </body>

      </MobileView>
    </div>
    </>

  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  background-size: cover;
`;
export default App;
