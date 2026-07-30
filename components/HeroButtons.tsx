"use client";

import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Ripple from "@/components/ui/Ripple";

interface HeroButtonsProps {
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
}

export default function HeroButtons({
  primaryHref = "/community",
  primaryText = "Enter the Ecosystem",
  secondaryHref = "/whitepaper",
  secondaryText = "Read Whitepaper",
}: HeroButtonsProps) {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2.5 sm:gap-6 justify-center items-center w-full max-w-full px-2 sm:px-0">
      {/* Primary Ecosystem CTA */}
      <div className="relative group inline-flex items-center justify-center">
        {/* Glow backdrop - unclipped by overflow:hidden */}
        <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-gradient-to-r from-[#316CFF] via-[#00D2FF] to-[#80ECFF] opacity-0 group-hover:opacity-80 blur-md sm:blur-lg transition-opacity duration-300 pointer-events-none" />
        <Magnetic range={50} strength={0.35}>
          <Ripple>
            <a href={primaryHref} className="relative z-10 block rounded-full">
              <button
                id="hero-enter-ecosystem"
                className="w-auto px-4 py-2.5 sm:px-8 sm:py-4 text-[13px] sm:text-[16px] whitespace-nowrap rounded-full text-white font-semibold bg-gradient-to-r from-[#316CFF] via-[#00D2FF] to-[#80ECFF] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>{primaryText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </Ripple>
        </Magnetic>
      </div>

      {/* Secondary Whitepaper CTA */}
      <div className="relative group inline-flex items-center justify-center">
        {/* Glow backdrop - unclipped by overflow:hidden */}
        <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-cyan-400/40 opacity-0 group-hover:opacity-75 blur-md sm:blur-lg transition-opacity duration-300 pointer-events-none" />
        <Magnetic range={50} strength={0.35}>
          <Ripple>
            <a href={secondaryHref} className="relative z-10 block rounded-full">
              <button
                id="hero-read-whitepaper"
                className="w-auto px-4 py-2.5 sm:px-8 sm:py-4 text-[13px] sm:text-[16px] whitespace-nowrap rounded-full text-white font-medium border border-white/30 hover:border-[#80ECFF] hover:text-[#80ECFF] hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span>{secondaryText}</span>
              </button>
            </a>
          </Ripple>
        </Magnetic>
      </div>
    </div>
  );
}
