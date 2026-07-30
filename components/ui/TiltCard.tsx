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

  // Exact cursor position within card for mouse-following spotlight
  const mousePosX = useMotionValue(50);
  const mousePosY = useMotionValue(50);

  // Smooth springs
  const springRotateX = useSpring(rotateX, { damping: 25, stiffness: 180 });
  const springRotateY = useSpring(rotateY, { damping: 25, stiffness: 180 });

  // Light reflection/glare gradients mapped to tilt angles
  const glareX = useTransform(rotateY, [-maxTilt, maxTilt], [10, 90]);
  const glareY = useTransform(rotateX, [-maxTilt, maxTilt], [90, 10]);
  const glareOpacity = useTransform(rotateX, [-maxTilt, maxTilt], [0.1, 0.3]);

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(128, 236, 255, 0.22) 0%, transparent 65%)`;
  const spotlightBg = useMotionTemplate`radial-gradient(400px circle at ${mousePosX}% ${mousePosY}%, rgba(49, 108, 255, 0.18), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse percentage for spotlight tracker
    const px = ((e.clientX - rect.left) / width) * 100;
    const py = ((e.clientY - rect.top) / height) * 100;

    mousePosX.set(px);
    mousePosY.set(py);

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
      className={`relative tilt-card group h-full flex flex-col ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: spotlightBg,
        }}
      />

      {/* 3D Content Container */}
      <div className="relative z-10 h-full flex flex-col flex-1" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>

      {/* Dynamic reflective light overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl z-20"
        style={{
          background: glareBg,
          opacity: glareOpacity,
        }}
      />
    </motion.div>
  );
}
