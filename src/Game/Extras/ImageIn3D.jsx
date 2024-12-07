import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ImageIn3D({ img, xyz, scale }) {
  const spriteRef = useRef();

  useEffect(() => {
    const texture = new THREE.TextureLoader().load(img);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    spriteRef.current.material = spriteMaterial;
  }, [img]);
  return <sprite ref={spriteRef} position={xyz} scale={scale || [1, 1, 1]} />;
}
