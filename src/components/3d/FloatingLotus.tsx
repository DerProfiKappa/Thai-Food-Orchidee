import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingLotus = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Lotus center */}
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.6} roughness={0.2} />
      
      {/* Lotus petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.6;
        const z = Math.sin(angle) * 0.6;
        return (
          <group key={i} rotation={[0, angle, 0]}>
            <mesh position={[x, 0, z]} rotation={[Math.PI / 6, 0, 0]}>
              <boxGeometry args={[0.4, 0.05, 0.6]} />
              <meshStandardMaterial color="#ff6b6b" metalness={0.3} roughness={0.4} />
            </mesh>
          </group>
        );
      })}
    </mesh>
  );
};

export default FloatingLotus;
