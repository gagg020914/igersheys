import React from "react";
import { Canvas } from "@react-three/fiber";
import FirstPersonCamera from "./FirstPersonCamera";
import Ground from "./Extras/Ground";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Ground />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={"red"} />
      </mesh>
      <FirstPersonCamera />
    </Canvas>
  );
}
