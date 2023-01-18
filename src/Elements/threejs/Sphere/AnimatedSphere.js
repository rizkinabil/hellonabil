import React from 'react'

import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial 
            color="#D296D4" 
            attach='material' 
            distort={0.3} 
            speed={1.5} 
            roughness={1} 
        />
    </Sphere>
  );
}
