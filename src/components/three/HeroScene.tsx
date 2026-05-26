"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Particles({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 6;
      pos[i * 3 + 0] = Math.cos(theta) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * r;
      spd[i] = 0.15 + Math.random() * 0.55;
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (!points.current) return;
    points.current.rotation.y = t * 0.045 + pointer.x * 0.15;
    points.current.rotation.x = pointer.y * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.85}
        color={"#cfe8ff"}
      />
    </points>
  );
}

function GlowOrbs() {
  const group = useRef<THREE.Group>(null);
  const matBlue = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#4aa3ff"),
        transparent: true,
        opacity: 0.22,
      }),
    []
  );
  const matViolet = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#8a5bff"),
        transparent: true,
        opacity: 0.18,
      }),
    []
  );

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.y = t * 0.18 + pointer.x * 0.3;
    group.current.rotation.x = -t * 0.05 + pointer.y * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[-2.2, 0.9, -2.6]} material={matBlue}>
          <sphereGeometry args={[1.6, 32, 32]} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.55}>
        <mesh position={[2.0, -0.7, -3.2]} material={matViolet}>
          <sphereGeometry args={[2.0, 32, 32]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 10.5], fov: 55, near: 0.1, far: 60 }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 8]} intensity={1.4} color={"#4aa3ff"} />
      <pointLight position={[-6, -2, 6]} intensity={1.0} color={"#8a5bff"} />
      <fog attach="fog" args={["#000000", 10, 24]} />
      <GlowOrbs />
      <Particles />
    </Canvas>
  );
}

