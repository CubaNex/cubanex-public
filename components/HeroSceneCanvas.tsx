"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate random ambient dust particles
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Sphere coordinate distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.6 + Math.random() * 2.8;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color nodes (cyan, blue, green gradients)
      const colorType = Math.random();
      if (colorType < 0.5) {
        colors[i * 3] = 0.5; // R
        colors[i * 3 + 1] = 0.92; // G
        colors[i * 3 + 2] = 1.0; // B (cyan)
      } else if (colorType < 0.8) {
        colors[i * 3] = 0.19;
        colors[i * 3 + 1] = 0.42;
        colors[i * 3 + 2] = 1.0; // blue
      } else {
        colors[i * 3] = 0.08;
        colors[i * 3 + 1] = 0.95;
        colors[i * 3 + 2] = 0.58; // green-cyan
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Slow idle breathing float & rotation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.12;
      // Mouse parallax rotation inertia
      const targetRotateY = (state.pointer.x * Math.PI) / 8;
      const targetRotateX = (state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y += (targetRotateY - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (targetRotateX - groupRef.current.rotation.x) * 0.04;
    }

    // 2. Core slow spin & deform
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.15;
      coreRef.current.rotation.x = time * 0.08;
    }

    // 3. Shell counter-spin
    if (shellRef.current) {
      shellRef.current.rotation.y = -time * 0.1;
      shellRef.current.rotation.z = time * 0.05;
    }

    // 4. Spin orbital ring nodes
    if (ringsRef.current) {
      ringsRef.current.rotation.y = time * 0.25;
      ringsRef.current.rotation.z = time * 0.1;
    }

    // 5. Interactive spotlight follow mouse coordinates
    if (lightRef.current) {
      const targetX = state.pointer.x * 3.5;
      const targetY = state.pointer.y * 3.5;
      lightRef.current.position.x += (targetX - lightRef.current.position.x) * 0.08;
      lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.08;
    }

    // 6. Slow particles float orbit
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.02;
      particlesRef.current.rotation.x = time * 0.008;
    }

    // 7. Scroll-driven camera parallax & pushback
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const maxScroll = typeof document !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1;
    const scrollRatio = scrollY / (maxScroll || 1);
    
    // Zoom camera back and shift downwards on scroll to transition
    state.camera.position.z = 4.2 + scrollRatio * 3.5;
    state.camera.position.y = -scrollRatio * 1.8;
  });

  return (
    <>
      {/* 3D Depth Fog */}
      <fog attach="fog" args={["#000000", 3.5, 9.5]} />

      {/* Lighting System */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#80ECFF" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#316CFF" />
      
      {/* Interactive mouse tracking volumetric pointlight */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 3]}
        intensity={3.5}
        distance={8}
        color="#80ECFF"
      />

      {/* Main Hologram Object Group */}
      <group ref={groupRef}>
        
        {/* INNER CORE: Crystalline distorted mesh */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <MeshDistortMaterial
            color="#316CFF"
            emissive="#10255c"
            roughness={0.1}
            metalness={0.9}
            distort={0.4}
            speed={1.6}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* OUTER SHELL: Wireframe geodesic dome */}
        <mesh ref={shellRef}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#80ECFF"
            emissive="#0a2a47"
            wireframe
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* ORBITAL TECH RINGS */}
        <group ref={ringsRef}>
          <mesh rotation={[Math.PI / 2, 0.4, 0]}>
            <torusGeometry args={[1.8, 0.015, 8, 80]} />
            <meshBasicMaterial color="#80ECFF" transparent opacity={0.2} />
          </mesh>
          <mesh rotation={[Math.PI / 4, -0.6, 0]}>
            <torusGeometry args={[2.0, 0.01, 8, 80]} />
            <meshBasicMaterial color="#14F195" transparent opacity={0.15} />
          </mesh>
        </group>
      </group>

      {/* Orbiting Ambient Particle System */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

export default function HeroSceneCanvas() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
