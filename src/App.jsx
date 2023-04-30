import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import threeImage from '../public/assets/three.png'

import "./App.css";

import Row from "react-bootstrap/Row";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <div className="app-title">
          <img src={threeImage} alt="Three.JS logo" />
          <h1>Three Study</h1>
        </div>
        <h3>A project for learning Three.JS!</h3>
      </div>
      <div className="app-area">
        <h4>
          Let's start importing a glTF 2.0 file (*.glb) and showing it below:
        </h4>
        <p>
          I proundly made this C++ icon in Blender, just to import here for
          learn 3D modeling and Three.JS at the same time 😄
        </p>
      </div>
    </div>
  );
}

export default App;
