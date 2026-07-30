"use client";

import React, { useEffect, useState } from "react";

interface HeroImage3DMotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroImage3DMotion({
  children,
  className = "",
}: HeroImage3DMotionProps) {
  const [motion, setMotion] = useState({
    rotateX: 0,
    rotateY: 0,
    shiftX: 0,
    shiftY: 0,
    scale: 1.04,
  });

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const update3DMotion = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Automatic 3D perspective rotation & floating drift (same as Home page hero background)
      const rotateX = Math.sin(elapsed * 0.45) * 3.5;
      const rotateY = Math.cos(elapsed * 0.35) * 5.0;
      const shiftX = Math.sin(elapsed * 0.25) * 14;
      const shiftY = Math.cos(elapsed * 0.3) * 10;
      const scale = 1.05 + Math.sin(elapsed * 0.2) * 0.03;

      setMotion({ rotateX, rotateY, shiftX, shiftY, scale });

      animationFrameId = requestAnimationFrame(update3DMotion);
    };

    animationFrameId = requestAnimationFrame(update3DMotion);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <div
        className="w-full h-full relative will-change-transform"
        style={{
          transform: `perspective(1200px) rotateX(${motion.rotateX}deg) rotateY(${motion.rotateY}deg) translate3d(${motion.shiftX}px, ${motion.shiftY}px, 0) scale(${motion.scale})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
