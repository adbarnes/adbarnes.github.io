import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Sphere(props) {
  const ref = useRef();
  return (
    <mesh {...props} ref={ref} castShadow>
      <sphereGeometry args={[0.75, 64, 64]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default function Counter() {
  return (
    <Canvas orthographic camera={{ zoom: 70, position: [0, 0, 100] }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 20, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -20, -10]} decay={0} intensity={Math.PI} />
      <pointLight
        position={[10, 20, 10]}
        color={"red"}
        decay={0}
        intensity={Math.PI}
      />
      <Sphere position={[0, -0.2, -3]} scale={3.5} color={"#333a3f"} />
      <Sphere position={[-4.5, 2, 0]} scale={2.5} color={"#333a3f"} />
      <Sphere position={[-3.5, -2, 0]} scale={1.25} color={"#333a3f"} />
      <Sphere position={[-3.2, -0.4, 0]} scale={0.5} color={"#333a3f"} />
      <Sphere position={[-3.5, -0.9, 0]} scale={0.2} color={"#FF1E86"} />
      <Sphere position={[3.5, -1, 0]} scale={0.8} color={"#333a3f"} />

      <Sphere position={[4.5, 1, 0]} scale={0.5} color={"#333a3f"} />
      <Sphere position={[4.6, 0.4, 0.1]} scale={0.1} color={"#FF1E86"} />
      <Sphere position={[-2.6, 1, -6]} scale={2} color={"#FF1E86"} />
      <Sphere position={[2.6, 0.5, 2]} scale={2} color={"#FF1E86"} />
      {/* <Box position={[-3, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
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
          font="/Inter_Bold.json"
        >
          {`2003 - 2024`}
          <meshBasicMaterial color={"#FF1E86"} />
        </Text3D>
      </Center>
      {/* <OrbitControls enablePan={true} enableRotate={true} enableZoom={false} /> */}
    </Canvas>
  );
}
