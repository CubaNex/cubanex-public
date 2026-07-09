"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  width = "100%",
  className = "",
  delay = 0.1,
  duration = 0.75,
  yOffset = 20,
  xOffset = 0,
  once = true,
}: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return (
      <div className={className} style={{ width }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // premium "swift-out" curve
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
