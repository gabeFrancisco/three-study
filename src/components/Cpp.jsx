/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cpp.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Cpp(props) {
  const { nodes, materials } = useGLTF("/assets/cpp.glb", false);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.2, 0]}
        // rotation={[-1.57, 1, -1.67]}
        scale={[1, 0.14, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.003"]}
        />
        <pointLight position={[10, 10, 10]} color={0xffffff} intensity={0.8} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["Material.004"]}
          position={[-0.05, 0.81, -0.19]}
          rotation={[-3.14, 0, 3.11]}
          scale={[0.66, 6.48, 0.66]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["Material.004"]}
          position={[-0.05, 0.81, -0.19]}
          rotation={[-3.14, 0, 3.11]}
          scale={[0.66, 6.48, 0.66]}
        />
        <pointLight position={[10, 10, 10]} color={0xffffff} intensity={0.8} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.004"]}
          position={[0.73, 0.55, -0.45]}
          rotation={[-3.14, 0, 3.11]}
          scale={[1.42, 17.69, 1.42]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/cpp.glb");
