"use client";

import React from "react";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
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
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-[290px] sm:max-w-none mx-auto px-2 sm:px-0 z-20">
      {/* Primary Ecosystem CTA */}
      <div className="relative group inline-flex items-center justify-center w-full sm:w-auto">
        {/* Ambient Glow Backdrop */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0052FF] via-[#00D2FF] to-[#80ECFF] opacity-60 group-hover:opacity-100 blur-md sm:blur-xl transition-all duration-500 pointer-events-none group-hover:scale-105" />
        <Magnetic range={50} strength={0.35}>
          <Ripple>
            <a href={primaryHref} className="relative z-10 block rounded-full w-full sm:w-auto">
              <button
                id="hero-enter-ecosystem"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[16px] whitespace-nowrap rounded-full text-slate-950 font-bold bg-gradient-to-r from-[#00D2FF] via-[#80ECFF] to-[#316CFF] hover:brightness-110 shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.97] cursor-pointer"
              >
                <span>{primaryText}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </button>
            </a>
          </Ripple>
        </Magnetic>
      </div>

      {/* Secondary Whitepaper CTA */}
      <div className="relative group inline-flex items-center justify-center w-full sm:w-auto">
        {/* Glow backdrop */}
        <div className="absolute -inset-1 rounded-full bg-cyan-400/30 opacity-0 group-hover:opacity-80 blur-md sm:blur-lg transition-all duration-300 pointer-events-none" />
        <Magnetic range={50} strength={0.35}>
          <Ripple>
            <a href={secondaryHref} className="relative z-10 block rounded-full w-full sm:w-auto">
              <button
                id="hero-read-whitepaper"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[16px] whitespace-nowrap rounded-full text-white font-semibold bg-black/40 border border-white/20 hover:border-[#00D2FF] hover:text-[#80ECFF] hover:bg-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-2.5 active:scale-[0.97] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00D2FF] group-hover:scale-110 transition-transform duration-300 shrink-0" />
                <span>{secondaryText}</span>
              </button>
            </a>
          </Ripple>
        </Magnetic>
      </div>
    </div>
  );
}

