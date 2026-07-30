"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function InteractiveHeroBackground() {
  const [motion, setMotion] = useState({
    rotateX: 0,
    rotateY: 0,
    shiftX: 0,
    shiftY: 0,
    scale: 1.05,
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const updateAuto3DMotion = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Automatic 3D perspective rotation & floating drift (smooth sine/cosine waves)
      const rotateX = Math.sin(elapsed * 0.45) * 3.2;         // Pitch float (-3.2 to +3.2 deg)
      const rotateY = Math.cos(elapsed * 0.35) * 4.8;         // Yaw float (-4.8 to +4.8 deg)
      const shiftX = Math.sin(elapsed * 0.25) * 15;           // Horizontal drift (15px)
      const shiftY = Math.cos(elapsed * 0.3) * 10;            // Vertical drift (10px)
      const scale = 1.15 + Math.sin(elapsed * 0.2) * 0.03;   // Continuous breathing depth scale (1.12 to 1.18)

      setMotion({ rotateX, rotateY, shiftX, shiftY, scale });

      animationFrameId = requestAnimationFrame(updateAuto3DMotion);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    animationFrameId = requestAnimationFrame(updateAuto3DMotion);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll push integration
  const scrollRatio = Math.min(scrollY / 800, 1);
  const totalScale = motion.scale + scrollRatio * 0.07;
  const totalShiftY = motion.shiftY + scrollRatio * 35;

  return (
    <div className="absolute -inset-6 sm:-inset-8 z-0 bg-black overflow-hidden pointer-events-none">
      {/* 1. Crisp Automatic 3D Image Parallax Container */}
      <div
        className="w-full h-full relative will-change-transform"
        style={{
          transform: `perspective(1200px) rotateX(${motion.rotateX}deg) rotateY(${motion.rotateY}deg) translate3d(${motion.shiftX}px, ${totalShiftY}px, 0) scale(${totalScale})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Desktop Artwork - 100% Full Opacity */}
        <div className="hidden sm:block w-full h-full relative">
          <Image
            src="/7-2-26/home-hero-7-2-26.jpeg"
            className="w-full h-full object-cover object-center"
            alt="CubaNex – The Awakening"
            fill
            priority
            sizes="100vw"
            style={{ opacity: 1.0 }}
          />
        </div>

        {/* Mobile Artwork - 100% Full Opacity */}
        <div className="block sm:hidden w-full h-full absolute inset-0">
          <Image
            src="/7-2-26/home-hero-7-2-26.jpeg"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%", opacity: 1.0 }}
            alt="CubaNex – The Awakening"
            fill
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* 2. Vignette & Page Blend */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
