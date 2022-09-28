import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

export default function Planet() {
  const sphereMap = useTexture("https://i.imgur.com/Z5NLElD.jpg");

  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight color="#fff" intensity={1} position={[0, 20, 20]} />
        <directionalLight color="#fff" position={[0, 50, -20]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial map={sphereMap} />
        </mesh>
      </Canvas>
    </>
  );
}
