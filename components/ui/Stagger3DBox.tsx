"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Stagger3DBoxProps {
  children: ReactNode;
  index: number;
  className?: string;
  delayStep?: number;
}

export default function Stagger3DBox({
  children,
  index,
  className = "",
  delayStep = 0.14,
}: Stagger3DBoxProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={`h-full flex flex-col ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`h-full flex flex-col ${className}`}
      initial={{
        opacity: 0,
        y: 55,
        rotateX: 16,
        scale: 0.9,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.85,
        delay: index * delayStep,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier spring curve
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
    >
      {children}
    </motion.div>
  );
}
