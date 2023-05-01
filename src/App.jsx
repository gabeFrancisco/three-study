import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import threeImage from "../public/assets/three.png";
import "./App.css";

import ModelViewer from "./components/ModelViewer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Camera, Vector3 } from "three";

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <img src={threeImage} alt="Three.JS logo" />
        <h1>Three Study</h1>
      </div>
      <h3>A project for learning Three.JS with react-three-fiber!</h3>

      <div className="app-area">
        <h4>
          Let's start importing a glTF 2.0 file (*.glb) and showing it below:
        </h4>
        <p>
          I proundly made this C++ icon in Blender, just to import here for
          learn 3D modeling and Three.JS at the same time 😄
        </p>
        <div
          style={{
            borderRadius: "20px",
            margin: "1rem;",
            padding: "10rem",
            width: "20rem",
            height: "20rem",
          }}
        >
          <Canvas>
            <PerspectiveCamera up={new Vector3(0,0,1)}>
             
              <ModelViewer />
              <ambientLight
                color={0xffffff}
                intensity={0.5}
              />
              <OrbitControls
                enableDamping={false}
                enablePan={true}
                autoRotate
                
              />
            </PerspectiveCamera>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
