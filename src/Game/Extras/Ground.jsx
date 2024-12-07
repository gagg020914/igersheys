import React from "react";

const Ground = () => {
  const rows = 10; // Número de filas
  const cols = 10; // Número de columnas

  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => {
          const x = colIndex; // Posición X basada en la columna
          const z = rowIndex; // Posición Z basada en la fila
          const color = (rowIndex + colIndex) % 2 === 0 ? "#AAA" : "#DDD"; // Color alternado

          return (
            <mesh position={[x, -1, z]} key={`${rowIndex}-${colIndex}`}>
              <boxGeometry args={[1, 1, 1]} />
              <meshPhongMaterial color={color} />
            </mesh>
          );
        })
      )}
    </>
  );
};

export default Ground;
