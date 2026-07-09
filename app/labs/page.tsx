import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import Image from "next/image";

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
      {/* ══════════════════════════════════════════
          HERO — THE FORGE
      ══════════════════════════════════════════ */}
      <ScrollReveal delay={0.1}>
        <section className="max-w-5xl mx-auto pt-32 px-4 text-center">
          <h1 className={`${orbitron.className} text-4xl sm:text-5xl tracking-tight mb-6`}>
            <span className="text-white">CubaNex</span>{" "}
            <span className="text-[#316CFF]">Labs</span>
          </h1>

          <div className="mt-14 relative flex justify-center w-full max-w-4xl mx-auto aspect-[16/9]">
            <div className="absolute inset-0 bg-[#316CFF]/5 blur-[100px] rounded-full"></div>
            <Image
              src="/7-2-26/labs-7-2-26.jpeg"
              alt="CubaNex Labs Visualization"
              fill
              priority
              className="" style={{ objectPosition: "center top" }}
            />
          </div>

          <p className={`${workSans.className} mt-12 text-[15px] leading-7 text-[#9CB4D8] max-w-4xl mx-auto`}>
            CubaNex Labs is the research and development division of the ecosystem. It explores future AI-assisted systems, autonomous tools, modular infrastructure, and experimental technologies that may become future layers of CubaNex.
          </p>
          <p className={`${workSans.className} mt-4 text-[14px] sm:text-[16px] text-[#316CFF]/80 max-w-4xl mx-auto font-medium`}>
            Where intelligent systems are conceived, refined, and prepared for the next generation of the CubaNex ecosystem.
          </p>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════
          DESIGN PHILOSOPHY PILLARS
      ══════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="relative py-28 px-6 bg-black">
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
                    className="group flex flex-col border border-white/[0.06] rounded-3xl p-7 bg-[#04071d]/80 hover:bg-[#060b28] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(49,108,255,0.1)] transition-all duration-500 cursor-default outline-none focus-within:border-white/20 min-h-[220px]"
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
        <section className="py-28 px-6 bg-[#02050f]">
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
