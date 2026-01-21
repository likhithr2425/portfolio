'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Float } from '@react-three/drei'
import * as THREE from 'three'

function Character() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#FFB380"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.35, 0.35]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.15, 1.35, 0.35]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.35, 0.8, 0.25]} />
        <meshStandardMaterial
          color="#4A90E2"
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.35, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial
          color="#FFB380"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.35, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial
          color="#FFB380"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.15, 0.1, 0]}>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.15, 0.1, 0]}>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
    </group>
  )
}

export function CharacterModel() {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0.6, 2]} fov={50} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.8} color="#6366f1" />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <Character />
      </Float>
    </Canvas>
  )
}
