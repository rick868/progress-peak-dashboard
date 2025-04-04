
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDScene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  
  // Animation for the sphere
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      // Gentle floating motion
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      sphereRef.current.rotation.y = time * 0.1;
    }
    
    if (lightRef.current) {
      // Moving light to create dynamic shadows
      lightRef.current.position.x = Math.sin(time * 0.6) * 3;
      lightRef.current.position.z = Math.cos(time * 0.6) * 3;
    }
  });

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.2} />
      
      {/* Moving Point Light */}
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1} color="#ffffff" />
      
      {/* Main Sphere with distortion */}
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial 
          color="#6366f1"
          attach="material"
          distort={0.4} 
          speed={1.5} 
          roughness={0.5}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Small decorative spheres */}
      <group>
        {[...Array(20)].map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const y = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 10;
          const size = Math.random() * 0.2 + 0.1;
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[size, 16, 16]} />
              <meshStandardMaterial 
                color="#4f46e5" 
                transparent
                opacity={0.7} 
                roughness={0.5}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
};

export default ThreeDScene;
