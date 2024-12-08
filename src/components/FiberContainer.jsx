import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from "./Scene";

export function FiberContainer ()
{
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} shadows>
      <Scene />
      <OrbitControls minDistance={1} maxDistance={200}/>
    </Canvas>
  );
}