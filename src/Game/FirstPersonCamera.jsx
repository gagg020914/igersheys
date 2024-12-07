import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import { button } from "framer-motion/client";

export default function FirstPersonCamera() {
  const { camera } = useThree();
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    top: false,
    button: false,
  });
  const speed = 0.05;
  const mode = true;

  useEffect(() => {
    camera.position.set(4.5, 1, 10);
    const handleKeyDown = (e) => {
      if (e.key === "w") setMovement((prev) => ({ ...prev, forward: true }));
      if (e.key === "s") setMovement((prev) => ({ ...prev, backward: true }));
      if (e.key === "a") setMovement((prev) => ({ ...prev, left: true }));
      if (e.key === "d") setMovement((prev) => ({ ...prev, right: true }));
      if (e.key === "o" && mode)
        setMovement((prev) => ({ ...prev, top: true }));
      if (e.key === "p" && mode)
        setMovement((prev) => ({ ...prev, bottom: true }));
    };

    const handleKeyUp = (e) => {
      if (e.key === "w") setMovement((prev) => ({ ...prev, forward: false }));
      if (e.key === "s") setMovement((prev) => ({ ...prev, backward: false }));
      if (e.key === "a") setMovement((prev) => ({ ...prev, left: false }));
      if (e.key === "d") setMovement((prev) => ({ ...prev, right: false }));
      if (e.key === "o" && mode)
        setMovement((prev) => ({ ...prev, top: false }));
      if (e.key === "p" && mode)
        setMovement((prev) => ({ ...prev, bottom: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const direction = new THREE.Vector3();
    const sideDirection = new THREE.Vector3();

    if (movement.forward || movement.backward) {
      camera.getWorldDirection(direction);
      direction.y = 0;
      direction.normalize();

      if (movement.backward) direction.negate();
      camera.position.addScaledVector(direction, speed);
    }

    if (movement.left || movement.right) {
      camera.getWorldDirection(direction);
      sideDirection.set(-direction.z, 0, direction.x);
      sideDirection.normalize();

      if (movement.left) sideDirection.negate();
      camera.position.addScaledVector(sideDirection, speed);
    }
    if (movement.top || movement.bottom) {
      camera.getWorldDirection(direction);
      sideDirection.set(0, -direction.y, 0);
      sideDirection.normalize();

      if (movement.bottom) sideDirection.negate();
      camera.position.addScaledVector(sideDirection, speed);
    }
  });

  return (
    <>
      <PointerLockControls />
    </>
  );
}
