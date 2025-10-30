import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface Icon3DProps {
  type: 'chili' | 'wok' | 'leaf';
}

const ChiliIcon = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[0.3, 1.5, 8]} />
      <meshStandardMaterial color="#ff4444" metalness={0.4} roughness={0.3} />
    </mesh>
  );
};

const WokIcon = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <cylinderGeometry args={[0.8, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );
};

const LeafIcon = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[1.2, 0.05, 0.6]} />
      <meshStandardMaterial color="#22c55e" metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

const Feature3DIcon = ({ type }: Icon3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#D4AF37" />
        {type === 'chili' && <ChiliIcon />}
        {type === 'wok' && <WokIcon />}
        {type === 'leaf' && <LeafIcon />}
      </Canvas>
    </div>
  );
};

export default Feature3DIcon;
