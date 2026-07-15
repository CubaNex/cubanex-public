"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = "", maxTilt = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Raw rotate values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth springs
  const springRotateX = useSpring(rotateX, { damping: 25, stiffness: 180 });
  const springRotateY = useSpring(rotateY, { damping: 25, stiffness: 180 });

  // Light reflection/glare gradients mapped to tilt angles
  const glareX = useTransform(rotateY, [-maxTilt, maxTilt], [10, 90]);
  const glareY = useTransform(rotateX, [-maxTilt, maxTilt], [90, 10]); // Inverse for natural lighting reflections
  const glareOpacity = useTransform(rotateX, [-maxTilt, maxTilt], [0.08, 0.22]);

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(128, 236, 255, 0.18) 0%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Compute rotation angles
    const targetRotateY = (mouseX / (width / 2)) * maxTilt;
    const targetRotateX = -(mouseY / (height / 2)) * maxTilt;

    rotateX.set(targetRotateX);
    rotateY.set(targetRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative tilt-card ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Content Container */}
      <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>

      {/* Dynamic reflective light overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl z-10"
        style={{
          background: glareBg,
          opacity: glareOpacity,
        }}
      />
    </motion.div>
  );
}
