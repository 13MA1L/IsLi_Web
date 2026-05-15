import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Tile({ position, rotation, color }) {
  return (
    <Float speed={2} rotationIntensity={0.35} floatIntensity={1.2}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[1.8, 0.08, 2.5]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.15} />
      </mesh>
    </Float>
  );
}

export default function TileScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 5, 5]} intensity={3} />
      <pointLight position={[-4, 3, 4]} intensity={2} color="#c90000" />

      <Tile position={[-2.5, 0.4, 0]} rotation={[0.4, 0.4, 0.1]} color="#d8d8d8" />
      <Tile position={[0, -0.3, -0.2]} rotation={[0.1, -0.5, 0.2]} color="#d8c3a5" />
      <Tile position={[2.4, 0.5, 0]} rotation={[-0.3, 0.5, -0.2]} color="#ffffff" />
      <Tile position={[1, 1.5, -1]} rotation={[0.5, 0.2, 0.5]} color="#151515" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}