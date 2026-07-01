import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "CubaNex Labs — The Forge",
  description:
    "CubaNex Labs is the research and development division of the ecosystem. It explores future AI-assisted systems, autonomous tools, and experimental technologies.",
  icons: {
    icon: "/assets/cubanex-token-v2-32x32.svg",
  },
  openGraph: {
    title: "CubaNex Labs — The Forge",
    description:
      "Where intelligent systems are conceived, refined, and prepared for the next generation of the CubaNex ecosystem.",
    url: "https://www.cubanex.io/labs",
    siteName: "CubaNex",
    images: [{ url: "/lab.png", width: 1200, height: 630, alt: "CubaNex Labs – The Forge" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CubaNex Labs — The Forge",
    description:
      "Where intelligent systems are conceived, refined, and prepared for the next generation.",
    images: ["/lab.png"],
    creator: "@CubaNexOfficial",
  },
  robots: { index: true, follow: true },
};

const pillars = [
  {
    accent: "#316CFF",
    title: "Intelligence",
    body: "AI-assisted modules, pattern-recognition layers, and adaptive systems designed to evolve with the ecosystem.",
  },
  {
    accent: "#00D2FF",
    title: "Precision",
    body: "Every tool is purpose-built. Architecture that eliminates noise and maximises signal — from prototype to deployment.",
  },
  {
    accent: "#9945FF",
    title: "Scale",
    body: "Modular infrastructure designed to expand without disrupting the core. Each layer adds capability, not complexity.",
  },
  {
    accent: "#14F195",
    title: "Transformation",
    body: "Experimental technologies that become tomorrow's foundations. The Forge is where concepts enter and futures emerge.",
  },
];

export default function LabsPage() {
  return (
    <main
      className={`${workSans.variable} bg-black text-white min-h-screen w-full overflow-x-hidden`}
    >
      {/* ── CSS Animations ── */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .forge-sphere {
            animation: forgeBreathe 16s ease-in-out infinite;
          }
          .forge-beam {
            animation: forgePulse 4s ease-in-out infinite;
          }
          .forge-particle {
            animation: forgeParticleDrift 10s ease-in-out infinite;
          }
          .forge-particle:nth-child(2) { animation-delay: -3s;  animation-duration: 13s; }
          .forge-particle:nth-child(3) { animation-delay: -6s;  animation-duration: 9s;  }
          .forge-particle:nth-child(4) { animation-delay: -1s;  animation-duration: 15s; }
          .forge-particle:nth-child(5) { animation-delay: -8s;  animation-duration: 11s; }
        }
        @keyframes forgeBreathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.015); }
        }
        @keyframes forgePulse {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1; }
        }
        @keyframes forgeParticleDrift {
          0%, 100% { opacity: 0;    transform: translateY(0px)   scale(1); }
          20%      { opacity: 0.05; }
          50%      { opacity: 0.025; transform: translateY(-20px) scale(1.12); }
          80%      { opacity: 0.05; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO — THE FORGE
      ══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background artwork */}
        <div className="absolute inset-0 z-0 bg-black">

          {/* Desktop — full bleed, sphere centred */}
          <div className="forge-sphere hidden sm:block w-full h-full">
            <img
              src="/lab.png"
              className="w-full h-full object-cover object-center"
              alt="CubaNex Labs – The Forge"
            />
          </div>

          {/* Mobile — cropped to keep sphere + figure dominant */}
          <img
            src="/lab.png"
            className="block sm:hidden w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
            alt="CubaNex Labs – The Forge"
          />

          {/* Ambient colour particles */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="forge-particle absolute rounded-full"
                style={{
                  width: `${80 + i * 50}px`,
                  height: `${80 + i * 50}px`,
                  left: `${8 + i * 20}%`,
                  top: `${10 + (i % 3) * 28}%`,
                  background: (["#316CFF", "#00D2FF", "#9945FF", "#14F195", "#316CFF"] as const)[i],
                  filter: "blur(70px)",
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Energy beam pulse — extremely subtle vertical strip aligned to centre beam */}
          <div
            className="forge-beam absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(49,108,255,0.04) 35%, rgba(128,236,255,0.07) 50%, rgba(49,108,255,0.04) 65%, transparent 100%)",
            }}
          />

          {/* Cinematic vignette — edges only, no heavy center darkening */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.62) 100%)",
            }}
          />

          {/* Bottom fade — merges into page content */}
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* Top fade — breathing room under header */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/65 to-transparent pointer-events-none" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center pt-28 pb-32 sm:pt-36 sm:pb-40">

          {/* Label */}
          <p
            className={`${workSans.className} text-[11px] sm:text-[13px] text-[#80ECFF] tracking-[0.28em] uppercase font-semibold mb-6 opacity-85`}
          >
            CubaNex Labs · Flagship Artwork 03
          </p>

          {/* Headline */}
          <h1
            className={`${orbitron.className} text-[48px] sm:text-[76px] lg:text-[96px] font-bold leading-[1.04em] tracking-tight mb-8`}
            style={{ textShadow: "0 2px 50px rgba(0,0,0,0.75)" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#316CFF] via-[#80ECFF] to-[#14F195]">
              The Forge
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`${workSans.className} text-[16px] sm:text-[20px] text-gray-200 leading-relaxed font-medium max-w-[660px] mx-auto mb-5`}
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.9)" }}
          >
            Where intelligent systems are conceived, refined, and prepared for the next generation of the CubaNex ecosystem.
          </p>

          {/* Body */}
          <p
            className={`${workSans.className} text-[14px] sm:text-[16px] text-[#9CB4D8] leading-relaxed max-w-[580px] mx-auto mb-12`}
            style={{ textShadow: "0 1px 16px rgba(0,0,0,0.8)" }}
          >
            CubaNex Labs is the research and development division of the ecosystem. It explores future AI-assisted systems, autonomous tools, modular infrastructure, and experimental technologies that may become future layers of CubaNex.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-3 sm:gap-5 justify-center items-center flex-wrap">
            <a href="/ecosystem" className="w-auto">
              <button
                id="labs-explore-ecosystem"
                className="px-6 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[15px] whitespace-nowrap rounded-full text-[#000] font-bold bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] hover:shadow-[0_0_28px_rgba(128,236,255,0.5)] transition-all duration-300"
              >
                Explore Labs
              </button>
            </a>
            <a
              href="https://github.com/CubaNex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto"
            >
              <button
                id="labs-view-github"
                className="px-6 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[15px] whitespace-nowrap rounded-full text-white border border-white/30 font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                View GitHub
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESIGN PHILOSOPHY PILLARS
      ══════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="relative py-24 px-6 bg-black">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 50%, rgba(49,108,255,0.12) 0%, transparent 55%), radial-gradient(circle at 85% 50%, rgba(20,241,149,0.08) 0%, transparent 55%)",
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto">

            {/* Section header */}
            <div className="text-center mb-16">
              <p
                className={`${workSans.className} text-[11px] sm:text-[13px] text-[#80ECFF] tracking-[0.22em] uppercase font-semibold mb-4`}
              >
                Design Philosophy
              </p>
              <h2
                className={`${orbitron.className} text-[26px] sm:text-[38px] lg:text-[48px] text-white font-bold leading-[1.15em]`}
              >
                Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#316CFF] to-[#80ECFF]">
                  What Comes Next
                </span>
              </h2>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => (
                <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                  <div
                    tabIndex={0}
                    className="group flex flex-col border border-white/[0.06] rounded-3xl p-7 bg-[#04071d]/80 hover:bg-[#060b28] hover:-translate-y-1 transition-all duration-300 cursor-default outline-none focus-within:border-white/20 min-h-[220px]"
                  >
                    <div
                      className="w-8 h-[3px] rounded-full mb-6 transition-all duration-400 group-hover:w-12"
                      style={{ background: p.accent }}
                    />
                    <h3
                      className={`${orbitron.className} text-[15px] sm:text-[17px] text-white font-bold mb-3`}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-[#9CB4D8] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════
          STATUS BANNER
      ══════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="py-20 px-6 bg-[#02050f]">
          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#14F195]/30 bg-[#14F195]/5 text-[#14F195] text-[11px] font-semibold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] inline-block" />
              Phase Active
            </div>

            <h2
              className={`${orbitron.className} text-[22px] sm:text-[32px] text-white font-bold leading-[1.3em] mb-6`}
            >
              The foundation is being laid.
            </h2>

            <p
              className={`${workSans.className} text-[15px] sm:text-[17px] text-[#9CB4D8] leading-relaxed max-w-[540px] mx-auto mb-10`}
            >
              CubaNex Labs is in its earliest formation stage. Research directions are being defined. Infrastructure is being studied. Experimental frameworks are taking shape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/whitepaper">
                <button className="px-7 py-3 text-[14px] rounded-full text-white border border-white/20 font-medium hover:bg-white/[0.08] transition-all duration-300">
                  Read the Whitepaper
                </button>
              </a>
              <a
                href="https://github.com/CubaNex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-7 py-3 text-[14px] rounded-full text-[#000] font-bold bg-gradient-to-r from-[#316CFF] to-[#80ECFF] hover:shadow-[0_0_20px_rgba(128,236,255,0.4)] transition-all duration-300">
                  Follow on GitHub
                </button>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="h-16 bg-black" />
    </main>
  );
}
