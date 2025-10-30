import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingLotus from './FloatingLotus';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className = '' }: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
          <FloatingLotus />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
