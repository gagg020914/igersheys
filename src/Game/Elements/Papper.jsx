import React, { useState, useEffect } from "react";
import * as THREE from "three";

export default function Papper({ svgCode, position, rotation }) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const width = 2000;
    const height = 2000;
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    const svgBlob = new Blob([svgCode], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    img.onload = () => {
      context.drawImage(img, 0, 0, width, height);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;

      setTexture(texture);
    };
    img.src = svgUrl;

    return () => URL.revokeObjectURL(svgUrl);
  }, [svgCode]);

  if (!texture) return null;

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
        alphaTest={0.5}
      />
    </mesh>
  );
}
