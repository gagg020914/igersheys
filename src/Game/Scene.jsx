import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import FirstPersonCamera from "./FirstPersonCamera";
import Ground from "./Extras/Ground";
import ImageIn3D from "./Extras/ImageIn3D";
import ian from "../assets/ian.jpg";
import Papper from "./Elements/Papper";

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<path d="M 0 100 C 35 0 65 0 100 100 L 85 100 C 55 20 45 20 15 100" stroke=" #865006" stroke-width="0.5" fill="#000A15"/>
</svg>

`;

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Ground />
      {/* <ImageIn3D img={ian} xyz={[4.5, 2, 0]} scale={[3, 3, 3]} /> */}
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 1, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 2, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 3, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 4, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 5, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 6, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 7, 0]}
      />
      <Papper
        svgCode={svgCode}
        position={[4.5, 4.5, 4.5]}
        rotation={[0, (Math.PI / 8) * 8, 0]}
      />

      <FirstPersonCamera />
    </Canvas>
  );
}
