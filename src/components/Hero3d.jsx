import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";

function Sphere(props) {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      castShadow>
      <sphereGeometry args={[0.75, 64, 64]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default function Counter() {
  const currentYear = new Date().getFullYear();
  const dateRange = `2003 - ${currentYear}`;

  return (
    <Canvas
      orthographic
      camera={{ zoom: 70, position: [0, 0, 100] }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 20, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight
        position={[-10, -20, -10]}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight
        position={[10, 20, 10]}
        color={"red"}
        decay={0}
        intensity={Math.PI}
      />
      <Float>
        <Sphere
          position={[0, -0.2, -3]}
          scale={3.5}
          color={"#333a3f"}
        />
        <Sphere
          position={[-4.5, 2, 0]}
          scale={2.5}
          color={"#333a3f"}
        />
        <Sphere
          position={[-3.5, -2, 0]}
          scale={1.25}
          color={"#333a3f"}
        />
        <Sphere
          position={[-3.2, -0.4, 0]}
          scale={0.5}
          color={"#333a3f"}
        />
        <Sphere
          position={[-3.5, -0.9, 0]}
          scale={0.2}
          color={"#FF1E86"}
        />
        <Sphere
          position={[3.5, -1, 0]}
          scale={0.8}
          color={"#333a3f"}
        />
      </Float>
      <Float>
        <Sphere
          position={[4.5, 1, 0]}
          scale={0.5}
          color={"#333a3f"}
        />
        <Sphere
          position={[4.6, 0.4, 0.1]}
          scale={0.1}
          color={"#FF1E86"}
        />
        <Sphere
          position={[-2.6, 1, -6]}
          scale={2}
          color={"#FF1E86"}
        />
        <Sphere
          position={[2.6, 0.5, 2]}
          scale={2}
          color={"#FF1E86"}
        />
      </Float>

      <Center rotation={[0, 0, Math.PI * 0.5]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.05}
          size={1}
          font="/Inter_Bold.json">
          {dateRange}
          <meshBasicMaterial color={"#FF1E86"} />
        </Text3D>
      </Center>

      {/* <OrbitControls enablePan={true} enableRotate={true} enableZoom={false} /> */}
    </Canvas>
  );
}
