"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

interface RoadmapProps {
  language?: "eng" | "esp";
}

const phasesData = {
  eng: [
    {
      phase: "Phase 01",
      title: "The Awakening",
      status: "Completed",
      badge: "Completed",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.2)]",
      dotClass: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
      items: [
        "Smart contract creation & deployment",
        "Official website v1.0 release",
        "Technical Whitepaper v1.0 release",
        "Social channels & community launch",
        "GitHub organization established",
      ],
    },
    {
      phase: "Phase 02",
      title: "Conscious Layer",
      status: "Current",
      badge: "In Progress",
      badgeClass: "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.3)]",
      dotClass: "bg-[#00D2FF] shadow-[0_0_12px_#00D2FF] animate-pulse",
      items: [
        "Brand system & visual identity refinement",
        "Ecosystem interactive platform upgrade",
        "Whitepaper & roadmap technical alignment",
        "Community activation groundwork",
        "Contract verification on BscScan",
        "CubaNex Labs foundation setup",
      ],
    },
    {
      phase: "Phase 03",
      title: "Ecosystem Expansion",
      status: "Upcoming",
      badge: "Upcoming",
      badgeClass: "bg-[#9945FF]/10 text-[#a855f7] border-[#9945FF]/30",
      dotClass: "bg-[#9945FF]",
      items: [
        "Developer API & SDK documentation",
        "Early AI-assisted community tools",
        "Decentralized governance framework",
        "Utility design & ecosystem progression",
      ],
    },
    {
      phase: "Phase 04",
      title: "Integration & Growth",
      status: "Upcoming",
      badge: "Upcoming",
      badgeClass: "bg-[#316CFF]/10 text-[#60a5fa] border-[#316CFF]/30",
      dotClass: "bg-[#316CFF]",
      items: [
        "Additional AI system intelligence layers",
        "Third-party Web3 infrastructure integrations",
        "Strategic ecosystem partnerships",
        "Cross-chain asset bridge",
      ],
    },
    {
      phase: "Phase 05",
      title: "Legacy Framework",
      status: "Upcoming",
      badge: "Upcoming",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotClass: "bg-amber-400",
      items: [
        "Long-term decentralized autonomous growth",
        "Open-source intelligence modules",
        "Global community DAO governance",
        "Continued evolution & mainnet scaling",
      ],
    },
  ],
  esp: [
    {
      phase: "Fase 01",
      title: "El Despertar",
      status: "Completed",
      badge: "Completado",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.2)]",
      dotClass: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
      items: [
        "Creación y despliegue de contrato inteligente",
        "Lanzamiento del sitio web oficial v1.0",
        "Publicación del Whitepaper técnico v1.0",
        "Lanzamiento de canales sociales y comunidad",
        "Organización GitHub establecida",
      ],
    },
    {
      phase: "Fase 02",
      title: "Capa Consciente",
      status: "Current",
      badge: "En Progreso",
      badgeClass: "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.3)]",
      dotClass: "bg-[#00D2FF] shadow-[0_0_12px_#00D2FF] animate-pulse",
      items: [
        "Refinamiento del sistema de marca e identidad",
        "Actualización de la plataforma del ecosistema",
        "Alineación técnica del Whitepaper y hoja de ruta",
        "Base para la activación comunitaria",
        "Verificación del contrato en BscScan",
        "Fundación de CubaNex Labs",
      ],
    },
    {
      phase: "Fase 03",
      title: "Expansión del Ecosistema",
      status: "Upcoming",
      badge: "Próximamente",
      badgeClass: "bg-[#9945FF]/10 text-[#a855f7] border-[#9945FF]/30",
      dotClass: "bg-[#9945FF]",
      items: [
        "Documentación API y SDK para desarrolladores",
        "Herramientas tempranas asistidas por IA",
        "Marco de gobernanza descentralizada",
        "Diseño de utilidad y progresión del ecosistema",
      ],
    },
    {
      phase: "Fase 04",
      title: "Integración y Crecimiento",
      status: "Upcoming",
      badge: "Próximamente",
      badgeClass: "bg-[#316CFF]/10 text-[#60a5fa] border-[#316CFF]/30",
      dotClass: "bg-[#316CFF]",
      items: [
        "Capas adicionales de inteligencia del sistema IA",
        "Integraciones de infraestructura Web3 de terceros",
        "Alianzas estratégicas del ecosistema",
        "Puente de activos entre cadenas",
      ],
    },
    {
      phase: "Fase 05",
      title: "Marco Legendario",
      status: "Upcoming",
      badge: "Próximamente",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotClass: "bg-amber-400",
      items: [
        "Crecimiento autónomo descentralizado a largo plazo",
        "Módulos de inteligencia de código abierto",
        "Gobernanza DAO comunitaria global",
        "Evolución continua y escalado de mainnet",
      ],
    },
  ],
};

export default function RoadmapTimeline({ language = "eng" }: RoadmapProps) {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Phase 2 (Conscious Layer)
  const [direction, setDirection] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const phases = phasesData[language] || phasesData.eng;
  const currentPhase = phases[activeIndex];

  // Auto-scroll active phase tab into center view on mobile
  useEffect(() => {
    const container = scrollRef.current;
    const activeTab = tabRefs.current[activeIndex];

    if (container && activeTab) {
      const containerWidth = container.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;

      const scrollTarget = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < phases.length - 1) {
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleSelectPhase = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-1 sm:px-6 py-6 font-sans">
      {/* 1. TOP TIMELINE PHASE SELECTOR TABS WITH CONNECTING TRACK */}
      <div className="relative w-full mb-8 sm:mb-12">
        {/* Connecting Neon Progress Track Line Behind Tabs */}
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-white/10 rounded-full z-0">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 via-[#00D2FF] to-[#9945FF] rounded-full transition-all duration-500 shadow-[0_0_10px_#00D2FF]"
            style={{ width: `${(activeIndex / (phases.length - 1)) * 100}%` }}
          />
        </div>

        <div
          ref={scrollRef}
          className="relative z-10 w-full flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2 px-2"
        >
          {phases.map((p, idx) => {
            const isActive = idx === activeIndex;
            const isPast = idx < activeIndex;

            return (
              <button
                key={idx}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={() => handleSelectPhase(idx)}
                className={`group/tab relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0 backdrop-blur-md ${
                  isActive
                    ? "bg-[#00D2FF]/20 border-[#00D2FF] text-white shadow-[0_0_25px_rgba(0,210,255,0.4)] scale-105"
                    : isPast
                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20"
                    : "bg-white/[0.04] border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] scale-125 animate-pulse"
                      : isPast
                      ? "bg-emerald-400 shadow-[0_0_6px_#34d399]"
                      : "bg-gray-500 group-hover/tab:bg-white"
                  }`}
                />
                <span>{p.phase}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. CENTERED MAIN HOLOGRAPHIC 3D PHASE CARD SLIDER */}
      <div className="relative w-full">
        <TiltCard className="w-full">
          <div className="relative rounded-3xl p-5 sm:p-12 bg-gradient-to-b from-[#0B132B]/90 via-[#070D1F]/95 to-[#0B132B]/90 border border-white/15 backdrop-blur-2xl text-center overflow-hidden min-h-[380px] flex flex-col items-center justify-center shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(0,210,255,0.12)]">
            {/* Top Glowing Mesh Spot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-[#00D2FF]/20 to-transparent blur-3xl pointer-events-none" />

            {/* Mobile / Desktop Floating Navigation Arrows */}
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Phase"
              className="absolute left-1 sm:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center text-white hover:border-[#00D2FF] hover:bg-[#00D2FF]/20 hover:text-[#00D2FF] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] disabled:opacity-15 disabled:hover:border-white/20 disabled:hover:bg-black/80 disabled:hover:text-white transition-all duration-300 z-30 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === phases.length - 1}
              aria-label="Next Phase"
              className="absolute right-1 sm:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center text-white hover:border-[#00D2FF] hover:bg-[#00D2FF]/20 hover:text-[#00D2FF] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] disabled:opacity-15 disabled:hover:border-white/20 disabled:hover:bg-black/80 disabled:hover:text-white transition-all duration-300 z-30 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 35, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -direction * 35, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full px-10 sm:px-16 flex flex-col items-center justify-center relative z-20"
              >
                {/* Status Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border text-xs font-bold uppercase tracking-wider mb-4 ${currentPhase.badgeClass}`}
                >
                  <span className={`w-2 h-2 rounded-full ${currentPhase.dotClass}`} />
                  <span>{currentPhase.badge}</span>
                </div>

                {/* Phase Counter Subtitle */}
                <p className="text-[#80ECFF] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-2">
                  {currentPhase.phase} OF 05
                </p>

                {/* Phase Main Title */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-6 sm:mb-9 tracking-tight flex items-center justify-center gap-3 text-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D2FF] opacity-90 flex-shrink-0" />
                  <span>{currentPhase.title}</span>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D2FF] opacity-90 flex-shrink-0" />
                </h3>

                {/* Centered Milestones Checklist Grid */}
                <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                  {currentPhase.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00D2FF]/50 hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-br from-[#00D2FF]/20 to-[#316CFF]/20 border border-[#00D2FF]/40 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:border-[#00D2FF] transition-transform">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D2FF]" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover/item:text-white font-medium transition-colors leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </TiltCard>
      </div>

      {/* 3. BOTTOM INDICATOR DOTS */}
      <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
        {phases.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectPhase(idx)}
            aria-label={`Go to phase ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? "w-8 sm:w-10 bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]"
                : "w-2 bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
