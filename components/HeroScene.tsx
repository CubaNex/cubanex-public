"use client";

import React from "react";
import dynamic from "next/dynamic";

const HeroSceneCanvas = dynamic(() => import("./HeroSceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-[#000] z-0 pointer-events-none" />
  ),
});

export default function HeroScene() {
  return <HeroSceneCanvas />;
}
