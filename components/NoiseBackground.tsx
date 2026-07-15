"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function NoiseBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Cinematic Film Grain Noise Overlay */}
      <svg className="noise-overlay" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Infinite Animated Gradient Aurora Background (Disabled if Reduced Motion is preferred) */}
      {!prefersReducedMotion && (
        <div className="aurora-container" aria-hidden="true">
          <div className="aurora-sphere aurora-sphere-1" />
          <div className="aurora-sphere aurora-sphere-2" />
          <div className="aurora-sphere aurora-sphere-3" />
        </div>
      )}
    </>
  );
}
