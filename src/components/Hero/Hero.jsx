// File: src/components/Hero/Hero.jsx
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder } from "@react-three/drei";
import { motion } from "framer-motion";
import "./Hero.css";

// Robot3D component inside Canvas only
const Robot3D = ({ mousePosition }) => {
  const robotRef = useRef();
  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const [isWaving, setIsWaving] = useState(false);
  const waveStart = useRef(0);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    // Floating animation
    if (robotRef.current) {
      robotRef.current.position.y = Math.sin(elapsedTime) * 0.1;
      robotRef.current.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;
    }

    // Head rotation based on mouse position
    if (headRef.current && mousePosition) {
      headRef.current.rotation.x = mousePosition.y * 0.2;
      headRef.current.rotation.y = mousePosition.x * 0.2;
    }

    // Hand waving animation
    if (isWaving) {
      const time = elapsedTime - waveStart.current;
      const angle = Math.sin(time * 10) * 0.5;

      if (leftArmRef.current) leftArmRef.current.rotation.z = angle;
      // if (rightArmRef.current) rightArmRef.current.rotation.z = -angle;
    } else {
      // Reset arms rotation when not waving
      if (leftArmRef.current) leftArmRef.current.rotation.z = 0;
      if (rightArmRef.current) rightArmRef.current.rotation.z = 0;
    }
  });

  const handleClick = () => {
    if (isWaving) {
      // Stop waving immediately
      setIsWaving(false);
    } else {
      // Start waving and store start time
      waveStart.current = performance.now() / 1000;
      setIsWaving(true);
    }
  };

  return (
    <group ref={robotRef} onClick={handleClick} style={{ cursor: "pointer" }}>
      {/* Head */}
      <group ref={headRef}>
        <Box args={[1.5, 1.5, 1.5]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#4A90E2" />
        </Box>
        <Sphere args={[0.15]} position={[-0.3, 2.2, 0.7]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
          />
        </Sphere>
        <Sphere args={[0.15]} position={[0.3, 2.2, 0.7]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
          />
        </Sphere>
        <Box args={[0.5, 0.1, 0.1]} position={[0, 1.7, 0.7]}>
          <meshStandardMaterial color="#333" />
        </Box>
      </group>

      {/* Body */}
      <Cylinder args={[0.8, 1, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#5A9FD4" />
      </Cylinder>

      {/* Arms */}
      <group ref={leftArmRef}>
        <Cylinder
          args={[0.2, 0.2, 1.5]}
          rotation={[0, 0, Math.PI / 2]}
          position={[-1.5, 0.5, 0]}
        >
          <meshStandardMaterial color="#4A90E2" />
        </Cylinder>
        <Sphere args={[0.3]} position={[-2.2, 0.5, 0]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
      </group>
      <group ref={rightArmRef}>
        <Cylinder
          args={[0.2, 0.2, 1.5]}
          rotation={[0, 0, -Math.PI / 2]}
          position={[1.5, 0.5, 0]}
        >
          <meshStandardMaterial color="#4A90E2" />
        </Cylinder>
        <Sphere args={[0.3]} position={[2.2, 0.5, 0]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
      </group>

      {/* Legs */}
      <Cylinder args={[0.3, 0.3, 1.5]} position={[-0.5, -1.8, 0]}>
        <meshStandardMaterial color="#4A90E2" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 1.5]} position={[0.5, -1.8, 0]}>
        <meshStandardMaterial color="#4A90E2" />
      </Cylinder>
      <Box args={[0.6, 0.3, 0.8]} position={[-0.5, -2.8, 0.2]}>
        <meshStandardMaterial color="#333" />
      </Box>
      <Box args={[0.6, 0.3, 0.8]} position={[0.5, -2.8, 0.2]}>
        <meshStandardMaterial color="#333" />
      </Box>
    </group>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Head rotation based on mouse position axis
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="hero__container">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Future at Your Service
          </motion.h1>
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet your intelligent companion that transforms daily tasks into
            effortless experiences.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#preorder" className="btn btn-primary btn-large">
              Pre-order Now
            </a>
            <a href="#demo" className="btn btn-secondary btn-large">
              Request Demo
            </a>
          </motion.div>
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat">
              <span className="stat__number">500+</span>
              <span className="stat__label">Pre-orders</span>
            </div>
            <div className="stat">
              <span className="stat__number">98%</span>
              <span className="stat__label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat__number">24/7</span>
              <span className="stat__label">Available</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__3d-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <Suspense fallback={null}>
              <Robot3D mousePosition={mousePosition} />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          </Canvas>
          <motion.div
            className="interaction-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span>👆 Click hands to wave • Move mouse to interact</span>
          </motion.div>
        </motion.div>

        {/* Add scroll indicator here */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
