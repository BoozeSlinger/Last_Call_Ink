"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null!);
  const light = useRef<THREE.PointLight>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    let i = 0;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    particles.forEach((particle, index) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      positions[index * 3] = (xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10);
      positions[index * 3 + 1] = (yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10);
      positions[index * 3 + 2] = (zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10);
    });
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.1;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#a0c514" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={new Float32Array(count * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#a0c514"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export default function FoundryBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.2} />
        <Particles count={2000} />
      </Canvas>
    </div>
  );
}
