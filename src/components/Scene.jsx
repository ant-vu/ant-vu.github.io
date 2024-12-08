import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Computer } from "./Computer";
import { Color, Vector2, Euler } from "three";

export function Scene() {
  const refComputer = useRef(null);
  const mouse = useRef(new Vector2());
  const { viewport } = useThree();
  const time = useRef(0);
  const baseRotation = useRef(new Euler());

  useFrame(({ mouse: { x, y } }) => {
    const { current: group } = refComputer;
    if (group) {
      // Update mouse position
      mouse.current.x = (x * viewport.width) / 2;
      mouse.current.y = (y * viewport.height) / 2;

      // Update time
      time.current += 0.005;

      // Store the base rotation if it hasn't been set yet
      if (baseRotation.current.equals(new Euler())) {
        baseRotation.current.copy(group.rotation);
      }
      group.rotation.x = baseRotation.current.x + 0.01*Math.sin(time.current);
      group.rotation.y = baseRotation.current.y + 0.013*Math.sin(time.current+2);
      // Keep the sine wave movement for y position
      group.position.y = 0.1 * Math.sin(time.current) + 1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow=""
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Computer
        ref={refComputer}
        position={[0, 0, 0]}
        colors={[
          new Color("#344541").convertLinearToSRGB(),
          new Color("#38574d").convertLinearToSRGB(),
          new Color("#7FAE58").convertLinearToSRGB(),
          new Color("#CDE583").convertLinearToSRGB(),
        ]}
      />
    </>
  );
}