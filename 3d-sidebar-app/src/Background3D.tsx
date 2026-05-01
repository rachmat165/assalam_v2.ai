import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function EmeraldOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[4, 0, -5]}>
        <MeshDistortMaterial
          color="#34d399"
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

function GoldenOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 48, 48]} position={[-5, 2, -6]}>
        <MeshDistortMaterial
          color="#fbbf24"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.12}
        />
      </Sphere>
    </Float>
  );
}

function TealOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.8}>
      <Sphere ref={meshRef} args={[1.8, 48, 48]} position={[0, -3, -4]}>
        <MeshDistortMaterial
          color="#5eead4"
          attach="material"
          distort={0.2}
          speed={1.8}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="bg-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fef3c7" />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#a7f3d0" />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#ffffff" />
        <EmeraldOrb />
        <GoldenOrb />
        <TealOrb />
      </Canvas>
    </div>
  );
}
