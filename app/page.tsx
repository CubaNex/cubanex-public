import React from "react";
import {
  ArrowRight,
  MessageCircle,
  Send,
  Shield,
  ShieldCheck,
  TrendingUp,
  Twitter,
  Wallet,
  Cpu,
  Globe,
  Zap,
  Sparkles,
  Layers,
} from "lucide-react";
import { Work_Sans, Orbitron, Sen } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import RoeadMapEn from "@/components/RoeadMapEn";
import ConnectWallet from "@/components/ConnectWallet";
import VipForm from "@/components/VipForm";
import WhitePaper from "@/components/WhitePaper";
import ArrowB from "@/components/ArrowB";
import VideoPlayer from "@/components/VideoPlayer";
import InteractiveHeroBackground from "@/components/InteractiveHeroBackground";
import HeroButtons from "@/components/HeroButtons";
import TiltCard from "@/components/ui/TiltCard";
import Stagger3DBox from "@/components/ui/Stagger3DBox";
import Magnetic from "@/components/ui/Magnetic";
import Ripple from "@/components/ui/Ripple";

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
import type { Metadata } from "next";
import { Card } from "@/components/ui/Cartd";
import RoadmapTimeline from "@/components/RoeadMapEn";

export const metadata: Metadata = {
  title: "CubaNex (CNEX) – A Blockchain Project Inspired by Cuba",
  description:
    "CubaNex (CNEX) is a decentralized blockchain project inspired by Cuban culture and global innovation, built on BNB Smart Chain.",
  icons: {
    icon: "/assets/cubanex-token-v2-32x32.svg",
  },
  keywords: [
    "CubaNex",
    "CNEX",
    "Cuban crypto",
    "crypto presale",
    "blockchain Cuba",
    "Web3 Latin America",
    "BNB Smart Chain",
    "crypto token",
    "decentralized finance",
  ],
  authors: [{ name: "CubaNex Team" }],
  creator: "CubaNex",
  publisher: "CubaNex",
  metadataBase: new URL("https://www.cubanex.io"),

  openGraph: {
    title: "CubaNex (CNEX) – The First Crypto for the People of Cuba",
    description:
      "A new digital asset born from Cuban culture and powered by blockchain innovation. Discover CNEX tokenomics, roadmap, and presale details.",
    url: "https://www.cubanex.io",
    siteName: "CubaNex",
    images: [
      {
        url: "/cubanexthero.png",
        width: 1200,
        height: 630,
        alt: "CubaNex – The Future of Crypto in Cuba",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CubaNex (CNEX) – The Future of Crypto in Cuba",
    description:
      "The first crypto designed to bridge Cuban culture with global blockchain innovation. Join the CNEX presale today.",
    images: ["/cubanexthero.png"],
    creator: "@CubaNexOfficial",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "The Awakening",
    status: "Completed",
    items: [
      "Smart contract creation",
      "Website deployment",
      "Whitepaper v1.0 release",
      "Social channels established",
      "GitHub organization created",
    ],
  },
  {
    phase: "Phase 2",
    title: "Conscious Layer Foundation",
    status: "Current",
    items: [
      "Branding finalization",
      "Website enhancements",
      "Roadmap publishing",
      "Community activation groundwork",
      "Explorer (BscScan) verification",
    ],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Expansion",
    status: "Upcoming",
    items: [
      "Developer API documentation",
      "Early AI-assisted tools",
      "Governance framework",
      "Utility design progression",
    ],
  },
  {
    phase: "Phase 4",
    title: "Integration & Growth",
    status: "Upcoming",
    items: [
      "Additional AI system layers",
      "Third party integrations",
      "Ecosystem partnerships",
    ],
  },
  {
    phase: "Phase 5",
    title: "Legacy Framework",
    status: "Upcoming",
    items: [
      "Long-term decentralized growth",
      "Open-source intelligence modules",
      "Continued evolution and refinement",
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-0 sm:min-h-screen w-full">
      {/* ================= HERO SECTION ================= */}
      {/* Chapter 1: The Awakening — Approved hero artwork */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-sphere {
            animation: sphereBreathe 24s ease-in-out infinite;
          }
          .hero-ring {
            animation: ringRotate 200s linear infinite;
          }
          .hero-particle {
            animation: particleDrift 12s ease-in-out infinite;
          }
          .hero-particle:nth-child(2) { animation-delay: -2s; animation-duration: 15s; }
          .hero-particle:nth-child(3) { animation-delay: -5s; animation-duration: 14s; }
          .hero-particle:nth-child(4) { animation-delay: -1s; animation-duration: 18s; }
          .hero-particle:nth-child(5) { animation-delay: -7s; animation-duration: 16s; }
        }
        @keyframes sphereBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes particleDrift {
          0%, 100% { opacity: 0; transform: translateY(0px) scale(1); }
          20% { opacity: 0.04; }
          50% { opacity: 0.02; transform: translateY(-12px) scale(1.05); }
          80% { opacity: 0.04; }
        }
      `}</style>

      <ScrollReveal delay={0.1} yOffset={0}>
        <section className="overflow-hidden z-20 relative min-h-[70vh] sm:min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-6 sm:py-0">

          {/* ── Approved Artwork Background with Hover Parallax & Scroll Motion ── */}
          <InteractiveHeroBackground />

          {/* ── Overlay Content ── */}
          <div className="relative z-10 max-w-[1200px] w-full mx-auto text-center flex flex-col justify-center items-center my-auto pt-2 sm:pt-16">

            {/* Ambient Backlight Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[680px] h-[280px] sm:h-[380px] bg-gradient-to-tr from-[#316CFF]/25 via-[#00D2FF]/25 to-[#9945FF]/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />

            {/* Futuristic Live Badge (Hidden on Phone) */}
            <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 border border-[#00D2FF]/30 backdrop-blur-xl shadow-[0_0_25px_rgba(0,210,255,0.2)] mb-6 sm:mb-8 hover:border-[#00D2FF]/70 hover:bg-black/60 transition-all duration-300 group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D2FF]"></span>
              </span>
              <span className={`${workSans.className} text-[11px] sm:text-[13px] text-[#80ECFF] tracking-[0.2em] uppercase font-semibold`}>
                Cuba&apos;s AI-Native Digital Asset
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#80ECFF] group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Headline */}
            <h1
              className={`${orbitron.className} text-[34px] sm:text-[66px] lg:text-[78px] font-extrabold leading-[1.08em] tracking-tight mb-4 sm:mb-8 text-white`}
            >
              The Code Has{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#80ECFF] via-[#00D2FF] to-[#316CFF] drop-shadow-[0_0_40px_rgba(0,210,255,0.6)]">
                Awakened.
              </span>
            </h1>

            {/* Body */}
            <div className="max-w-[760px] mx-auto mb-6 sm:mb-10 px-2">
              <p
                className={`${workSans.className} text-[16px] sm:text-[21px] text-gray-200 leading-relaxed font-normal`}
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
              >
                CubaNex is an{" "}
                <span className="text-[#80ECFF] font-semibold border-b border-[#00D2FF]/40 pb-0.5">
                  AI-native digital asset
                </span>{" "}
                built on <span className="text-white font-semibold">BNB Chain</span>, designed to evolve into a decentralized intelligence ecosystem.
              </p>
            </div>

            {/* Ultra-Premium Solana-Style Hero CTA Buttons */}
            <HeroButtons
              primaryHref="/community"
              primaryText="Enter the Ecosystem"
              secondaryHref="/whitepaper"
              secondaryText="Read Whitepaper"
            />

            {/* Trust Badges Bar (Hidden on Phone) */}
            <div className="mt-10 sm:mt-14 hidden sm:inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 sm:px-8 py-3 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-default">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">Verified Contract</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-default">
                <Cpu className="w-4 h-4 text-[#80ECFF]" />
                <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">Open Framework</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-default">
                <Zap className="w-4 h-4 text-[#316CFF]" />
                <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">Fixed Supply</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= WHY CUBANEX ================= */}
      <ScrollReveal>
        <section
          className="relative py-24 sm:py-32 z-10 bg-[#000] px-6 overflow-hidden"
        >
          {/* 4 s*/}
          <div className="absolute w-full h-full bg-[#000] top-0 z-0 opacity-50">
            <img
              src="/shapbg.png"
              className="w-full h-full object-cover" style={{ objectPosition: "center top" }}
              alt="Hero Background"
            />
          </div>

          {/* <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 pb-[60px]">
          <div className="lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="../1B+.png" alt="" className="w-[45px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Total Supply{" "}
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="../40.png" alt="" className="w-[60px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Presale{" "}
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="../30.png" alt="" className="w-[55px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Liquidity{" "}
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="../15.png" alt="" className="w-[45px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Development{" "}
            </p>
          </div>
        </div> */}
          {/* 4 s*/}

          {/* why cubanex? start  */}
          <div className="relative z-10 max-w-6xl mx-auto text-center pt-10">
            <h2
              className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1em] mb-6`}
            >
              Why CubaNex <span className="text-[#316CFF]"> Exists</span>
            </h2>
            <p className="text-gray-400 max-w-[600px] mx-auto mb-16 text-lg">
              CubaNex is not simply a token. It is the foundation for an evolving intelligence network where blockchain, AI, and community participation converge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
              
              {/* Intelligence */}
              <Stagger3DBox index={0} className="w-full">
                <TiltCard className="w-full h-full">
                  <div className="group relative flex flex-col items-center justify-between w-full h-full p-7 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#00D2FF]/60 hover:shadow-[0_0_35px_rgba(0,210,255,0.25)] transition-all duration-500 overflow-hidden cursor-pointer" tabIndex={0}>
                    {/* Top Radial Light Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-[#00D2FF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                      {/* Web3 Glowing Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#00D2FF] group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300">
                        <Cpu className="w-7 h-7 text-[#00D2FF]" />
                      </div>

                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight flex items-center justify-center gap-2">
                        <span>Intelligence</span>
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#9CB4D8] leading-relaxed group-hover:text-gray-200 transition-colors">
                        CubaNex is designed to evolve through future AI-assisted systems, autonomous tools, and adaptive digital frameworks.
                      </p>
                    </div>

                    {/* Bottom Indicator Pill */}
                    <div className="relative z-10 w-full pt-6 mt-4 border-t border-white/5 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] group-hover:animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-[#00D2FF] font-semibold">AI Ecosystem</span>
                    </div>
                  </div>
                </TiltCard>
              </Stagger3DBox>
 
              {/* Sovereignty */}
              <Stagger3DBox index={1} className="w-full">
                <TiltCard className="w-full h-full">
                  <div className="group relative flex flex-col items-center justify-between w-full h-full p-7 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#316CFF]/60 hover:shadow-[0_0_35px_rgba(49,108,255,0.25)] transition-all duration-500 overflow-hidden cursor-pointer" tabIndex={0}>
                    {/* Top Radial Light Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-[#316CFF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                      {/* Web3 Glowing Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#316CFF]/10 border border-[#316CFF]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#316CFF] group-hover:shadow-[0_0_20px_rgba(49,108,255,0.4)] transition-all duration-300">
                        <ShieldCheck className="w-7 h-7 text-[#316CFF]" />
                      </div>

                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight flex items-center justify-center gap-2">
                        <span>Sovereignty</span>
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#9CB4D8] leading-relaxed group-hover:text-gray-200 transition-colors">
                        Built on decentralized infrastructure, CubaNex creates a foundation for transparent participation without dependence on centralized control.
                      </p>
                    </div>

                    {/* Bottom Indicator Pill */}
                    <div className="relative z-10 w-full pt-6 mt-4 border-t border-white/5 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#316CFF] shadow-[0_0_8px_#316CFF] group-hover:animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-[#316CFF] font-semibold">Decentralized</span>
                    </div>
                  </div>
                </TiltCard>
              </Stagger3DBox>
 
              {/* Connection */}
              <Stagger3DBox index={2} className="w-full">
                <TiltCard className="w-full h-full">
                  <div className="group relative flex flex-col items-center justify-between w-full h-full p-7 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#9945FF]/60 hover:shadow-[0_0_35px_rgba(153,69,255,0.25)] transition-all duration-500 overflow-hidden cursor-pointer" tabIndex={0}>
                    {/* Top Radial Light Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-[#9945FF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                      {/* Web3 Glowing Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#9945FF]/10 border border-[#9945FF]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#9945FF] group-hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all duration-300">
                        <Globe className="w-7 h-7 text-[#9945FF]" />
                      </div>

                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight flex items-center justify-center gap-2">
                        <span>Connection</span>
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#9CB4D8] leading-relaxed group-hover:text-gray-200 transition-colors">
                        The project bridges Cuban identity, global technology, and emerging digital systems into one unified ecosystem.
                      </p>
                    </div>

                    {/* Bottom Indicator Pill */}
                    <div className="relative z-10 w-full pt-6 mt-4 border-t border-white/5 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#9945FF] shadow-[0_0_8px_#9945FF] group-hover:animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-[#9945FF] font-semibold">Global Bridge</span>
                    </div>
                  </div>
                </TiltCard>
              </Stagger3DBox>
 
              {/* Evolution */}
              <Stagger3DBox index={3} className="w-full">
                <TiltCard className="w-full h-full">
                  <div className="group relative flex flex-col items-center justify-between w-full h-full p-7 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-500 overflow-hidden cursor-pointer" tabIndex={0}>
                    {/* Top Radial Light Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-[#00E5FF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                      {/* Web3 Glowing Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300">
                        <Zap className="w-7 h-7 text-[#00E5FF]" />
                      </div>

                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight flex items-center justify-center gap-2">
                        <span>Evolution</span>
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#9CB4D8] leading-relaxed group-hover:text-gray-200 transition-colors">
                        CubaNex is built to expand over time through modular utilities, open documentation, and future ecosystem layers.
                      </p>
                    </div>

                    {/* Bottom Indicator Pill */}
                    <div className="relative z-10 w-full pt-6 mt-4 border-t border-white/5 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] group-hover:animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold">Modular Web3</span>
                    </div>
                  </div>
                </TiltCard>
              </Stagger3DBox>
 
            </div>
          </div>
          {/* why cubanex? start end  */}

          {/* from havana to blockchain s*/}

          {/* from havana to blockchain s*/}
          {/* from havana to blockchain s*/}
          {/* Born from Cuba. Built for the Digital Future */}
          <ScrollReveal>
            <div className="relative px-6 z-10 mt-16 sm:mt-24 pt-12 sm:pt-20 border-t border-white/10 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10 sm:gap-14 pb-12 sm:pb-20">
              {/* Left Column Text Content */}
              <div className="flex-1 max-w-2xl flex flex-col justify-center">
                <h2
                  className={`${orbitron.className} text-[26px] sm:text-[38px] lg:text-[46px] text-[#fff] font-bold leading-[1.2] mb-6 tracking-tight`}
                >
                  Born from <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">Cuba</span>. Built for the
                  <span className="bg-gradient-to-r from-[#00D2FF] to-[#316CFF] bg-clip-text text-transparent"> Digital Future</span>.
                </h2>

                <div
                  className={`${workSans.className} text-[15px] sm:text-[17px] text-[#9CB4D8] leading-relaxed space-y-4`}
                >
                  <p className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00D2FF]/40 hover:bg-white/[0.04] transition-all duration-300">
                    CubaNex draws inspiration from Cuba’s resilience, creativity, and cultural depth — then translates that spirit into a new digital form.
                  </p>
                  <p className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#316CFF]/40 hover:bg-white/[0.04] transition-all duration-300">
                    It is a bridge between heritage and intelligence, between identity and infrastructure, between what Cuba has always carried within and what technology can now reveal.
                  </p>
                </div>
              </div>

              {/* Right Column Video Frame with Equal Height */}
              <div className="flex-1 max-w-xl w-full flex flex-col relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00D2FF]/20 via-[#316CFF]/20 to-[#9945FF]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
                <TiltCard className="w-full h-full flex flex-col flex-1">
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#00D2FF]/50 transition-all duration-500 h-full flex flex-col flex-1 min-h-[300px] sm:min-h-[360px]">
                    <VideoPlayer
                      videoSrc="/cubanex-video.mp4"
                      previewSrc="/hero-havana-CDeUqYMJ.png"
                      className="w-full h-full min-h-[300px] sm:min-h-[360px] my-0 flex-1"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>

      {/* ================= tokenomics ================= */}

      <ScrollReveal>
        <section className="py-12 sm:py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-4`}
            >
              CNEX <span className="text-[#316CFF]">Token</span>
            </h2>
            <p
              className={`${workSans.className} text-[16px] sm:text-[18px] text-[#9CB4D8] max-w-[600px] mx-auto mb-12`}
            >
              The digital asset at the center of the CubaNex ecosystem.
            </p>

            <TiltCard className="max-w-3xl mx-auto">
              <div className="rounded-3xl p-8 glass-panel border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                  
                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-8 group cursor-pointer">
                    <p className="text-gray-500 text-sm mb-1 group-hover:text-[#80ECFF] transition-colors">Total Supply</p>
                    <p className={`${orbitron.className} text-xl text-white font-medium group-hover:scale-105 transition-transform duration-300`}>100,000,000,000 <span className="text-[#00D2FF]">CNEX</span></p>
                  </div>
                  
                  <div className="pb-6 sm:pb-0 group cursor-pointer">
                    <p className="text-gray-500 text-sm mb-1 group-hover:text-[#80ECFF] transition-colors">Network</p>
                    <p className="text-xl text-white font-medium group-hover:scale-105 transition-transform duration-300">BNB Smart Chain</p>
                  </div>

                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-8 sm:pt-6 group cursor-pointer">
                    <p className="text-gray-500 text-sm mb-1 group-hover:text-[#80ECFF] transition-colors">Standard</p>
                    <p className="text-xl text-white font-medium group-hover:scale-105 transition-transform duration-300">BEP-20</p>
                  </div>

                  <div className="sm:pt-6">
                    <p className="text-gray-500 text-sm mb-1">Contract Address</p>
                    <a
                      href="https://bscscan.com/token/0xf073d173Ed309f8A208e6C183eFf858DbC882DbB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <span className="text-lg text-[#316CFF] font-mono group-hover:text-[#80ECFF] transition-colors">0xf073...2DbB</span>
                      <img src="/link-external.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </div>

                </div>
              </div>
            </TiltCard>

            <div className="flex justify-center mt-12">
              <Magnetic>
                <Ripple>
                  <a href="/tokenomics">
                    <button className="px-8 py-3.5 text-[14px] sm:text-[16px] rounded-full text-white font-medium border border-white/20 hover:border-[#80ECFF] hover:bg-white/10 transition-all duration-300">
                      View Token Details
                    </button>
                  </a>
                </Ripple>
              </Magnetic>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= tokenomics ================= */}

      {/* ================= Road Map ================= */}
      <ScrollReveal>
        <section className="py-24 sm:py-32 bg-[#000] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2
              className={`${orbitron.className} text-center text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-4`}
            >
              The Path of <span className="text-[#316CFF]">Awakening</span>
            </h2>
            <p
              className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-[#9CB4D8] max-w-[600px] mx-auto mb-12`}
            >
              CubaNex unfolds in phases. Each phase reveals another layer of the ecosystem.
            </p>

            <RoadmapTimeline language="eng" />

            <div className="flex justify-center mt-10">
              <Magnetic>
                <Ripple>
                  <a href="/about#roadmap">
                    <button className="px-8 py-3.5 text-[14px] sm:text-[16px] rounded-full text-white font-medium border border-white/20 hover:border-[#80ECFF] hover:bg-white/10 transition-all duration-300">
                      View Full Roadmap
                    </button>
                  </a>
                </Ripple>
              </Magnetic>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* ================= Road Map ================= */}

      {/* ================= How to Get CNEX ================= */}

      <ScrollReveal>
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-4`}
            >
              Accessing <span className="text-[#316CFF]">CNEX</span>
            </h2>
            <p
              className={`${workSans.className} text-[16px] sm:text-[18px] text-[#9CB4D8] max-w-[600px] mx-auto mb-16`}
            >
              CNEX operates on BNB Smart Chain as a BEP-20 digital asset.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Step 1 */}
              <Stagger3DBox index={0} className="w-full">
                <TiltCard className="w-full">
                  <div className="group flex flex-col items-center p-8 rounded-3xl glass-panel text-center outline-none hover:border-[#00D2FF]/40 transition-all duration-300" tabIndex={0}>
                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#00D2FF] group-hover:text-[#00D2FF] group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] flex items-center justify-center text-white/50 text-xl font-bold mb-6 transition-all duration-300">1</div>
                    <h3 className="text-white text-xl font-bold mb-4">Set Up Wallet</h3>
                    <p className="text-[#9CB4D8] text-sm leading-relaxed">
                      Use MetaMask, Trust Wallet, or another compatible wallet.
                    </p>
                  </div>
                </TiltCard>
              </Stagger3DBox>

              {/* Step 2 */}
              <Stagger3DBox index={1} className="w-full">
                <TiltCard className="w-full">
                  <div className="group flex flex-col items-center p-8 rounded-3xl glass-panel text-center outline-none hover:border-[#316CFF]/40 transition-all duration-300" tabIndex={0}>
                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#316CFF] group-hover:text-[#316CFF] group-hover:shadow-[0_0_15px_rgba(49,108,255,0.4)] flex items-center justify-center text-white/50 text-xl font-bold mb-6 transition-all duration-300">2</div>
                    <h3 className="text-white text-xl font-bold mb-4">Add BNB Smart Chain</h3>
                    <p className="text-[#9CB4D8] text-sm leading-relaxed">
                      Ensure your wallet is connected to BNB Smart Chain.
                    </p>
                  </div>
                </TiltCard>
              </Stagger3DBox>

              {/* Step 3 */}
              <Stagger3DBox index={2} className="w-full">
                <TiltCard className="w-full">
                  <div className="group flex flex-col items-center p-8 rounded-3xl glass-panel text-center outline-none hover:border-[#9945FF]/40 transition-all duration-300" tabIndex={0}>
                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#9945FF] group-hover:text-[#9945FF] group-hover:shadow-[0_0_15px_rgba(153,69,255,0.4)] flex items-center justify-center text-white/50 text-xl font-bold mb-6 transition-all duration-300">3</div>
                    <h3 className="text-white text-xl font-bold mb-4">Verify Contract</h3>
                    <p className="text-[#9CB4D8] text-sm leading-relaxed">
                      Always use the official contract address listed on cubanex.io.
                    </p>
                  </div>
                </TiltCard>
              </Stagger3DBox>

              {/* Step 4 */}
              <Stagger3DBox index={3} className="w-full">
                <TiltCard className="w-full">
                  <div className="group flex flex-col items-center p-8 rounded-3xl glass-panel text-center outline-none hover:border-[#00E5FF]/40 transition-all duration-300" tabIndex={0}>
                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#00E5FF] group-hover:text-[#00E5FF] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center justify-center text-white/50 text-xl font-bold mb-6 transition-all duration-300">4</div>
                    <h3 className="text-white text-xl font-bold mb-4">Receive CNEX</h3>
                    <p className="text-[#9CB4D8] text-sm leading-relaxed">
                      CNEX distribution follows the official token model and project access structure.
                    </p>
                  </div>
                </TiltCard>
              </Stagger3DBox>

            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* ================= How to Get CNEX ================= */}

      {/* ================= Unlock VIP Access to CubaNexN ================= */}
      <ScrollReveal>
        <section className="relative mt-[-70px] py-24 sm:py-32 px-6 z-10 bg-black overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('/ecosystem.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          
          <div className="relative z-10">
            <h2
              className={`${orbitron.className} text-center text-[26px] pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
            >
              The Signal Is <span className="text-[#316CFF]">Open</span>
            </h2>
            <p
              className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-[#9CB4D8] max-w-[550px] mx-auto mb-8`}
            >
              The network is active. Connect to stay updated.
            </p>

            <VipForm />
            <div className="px-6 pt-20 grid max-w-[1100px] mx-auto gap-10 md:grid-cols-2">
            {/* 1 */}

            {/* 2 */}
            <TiltCard className="block w-full">
              <a
                href="https://x.com/CubaNexOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-center justify-center w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl glass-panel cursor-pointer tab-index-0 outline-none" tabIndex={0}>
                  <div className="relative z-20 px-6">
                    <div className="w-full flex justify-center mb-4">
                      <Twitter size={56} className="mx-auto" strokeWidth={1.8} />
                    </div>
                    <h2 className="text-white text-center text-[16px] sm:text-3xl relative z-10 mt-4 font-bold transition duration-200 flex items-center justify-center gap-3">
                      Twitter / X
                    </h2>
                    <p className="text-[16px] sm:text-sm relative z-10 mt-4 text-center transition duration-200 text-[#E4ECFF]">
                      Follow the transmission and project updates.
                      <br />
                      <br />
                      <span className="text-[#00D2FF] font-medium">@CubaNex</span>
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 183, 74, 0.25) 0%, transparent 70%), radial-gradient(rgba(255, 183, 74, 0.3) 1px, transparent 1px)',
                      backgroundSize: '100% 100%, 15px 15px'
                    }}
                  />
                </div>
              </a>
            </TiltCard>

            {/* 3 */}
            <TiltCard className="block w-full">
              <a
                href="https://t.me/CubaNexOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-center justify-center w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl glass-panel cursor-pointer tab-index-0 outline-none" tabIndex={0}>
                  <div className="relative z-20 px-6">
                    <div className="w-full flex justify-center mb-4">
                      <Send size={56} className="mx-auto" strokeWidth={1.8} />
                    </div>
                    <h2 className="text-white text-center text-[16px] sm:text-3xl relative z-10 mt-4 font-bold transition duration-200 flex items-center justify-center gap-3">
                      Telegram
                    </h2>
                    <p className="text-[16px] sm:text-sm relative z-10 mt-4 text-center transition duration-200 text-[#E4ECFF]">
                      Enter the communication node.
                      <br />
                      <br />
                      <span className="text-[#00D2FF] font-medium">
                        Join Telegram
                      </span>
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 183, 74, 0.25) 0%, transparent 70%), radial-gradient(rgba(255, 183, 74, 0.3) 1px, transparent 1px)',
                      backgroundSize: '100% 100%, 15px 15px'
                    }}
                  />
                </div>
              </a>
            </TiltCard>

            {/* 4 */}
            {/* <a href="#" rel="noopener noreferrer" className="block">
            <div className="p-8 border border-[#00D2FF]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#00D2FF]/40">
              <MessageCircle
                size={56}
                className="mx-auto mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl font-semibold mb-3">Discord</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with holders and participate in governance
                <br />
                <br />
                <span className="text-[#00D2FF] font-medium">Join Discord</span>
              </p>
            </div>
          </a> */}
          </div>
          </div>
        </section>
      </ScrollReveal>
      {/* ================= Unlock VIP Access to CubaNex================= */}

      {/* ================= WHITEPAPER SECTION ================= */}
      <ScrollReveal>
        <section className="px-5 pb-24">
          <h2
            className={`${orbitron.className} bg-[#000000] text-center text-[26px] pt-6 sm:pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em]  mb-6`}
          >
            <span className="text-[#316CFF]">Whitepaper  </span> & Documentation
          </h2>{" "}
          <p
            className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[700px]  mx-auto mb-8`}
          >
            Explore the core ideas behind CubaNex with clear, easy-to-read
            technical and conceptual documents. Learn how CNX is structured, how
            it works, and the vision guiding its future development.{" "}
          </p>
          <WhitePaper />
        </section>
      </ScrollReveal>

    </main>
  );
}