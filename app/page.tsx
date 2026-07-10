import React from "react";
import {
  ArrowRight,
  MessageCircle,
  Send,
  Shield,
  TrendingUp,
  Twitter,
  Wallet,
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
        <section className="overflow-hidden z-20 relative pb-20 sm:pb-0 pt-12 w-full min-h-0 sm:min-h-screen flex items-center justify-center px-6">

          {/* ── Approved Artwork Background ── */}
          <div className="absolute inset-0 z-0 bg-[#000]">

            {/* Hero image — desktop */}
            <div className="hero-sphere hidden sm:block w-full h-full relative">
              <Image
                src="/7-2-26/home-hero-7-2-26.jpeg"
                className="w-full h-full object-cover object-center"
                alt="CubaNex – The Awakening"
                fill
                priority
                sizes="100vw"
                style={{ opacity: 1 }}
              />
            </div>

            {/* Hero image — mobile (cropped to keep sphere dominant) */}
            <div className="block sm:hidden w-full h-full absolute inset-0">
              <Image
                src="/7-2-26/home-hero-7-2-26.jpeg"
                className="w-full h-full object-cover mobile-focus-60"
                style={{ objectPosition: "60% 30%", opacity: 1 }}
                alt="CubaNex – The Awakening"
                fill
                priority
                sizes="100vw"
              />
            </div>

            {/* Ambient particles */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="hero-particle absolute rounded-full bg-[#316CFF]"
                  style={{
                    width: `${60 + i * 40}px`,
                    height: `${60 + i * 40}px`,
                    left: `${10 + i * 18}%`,
                    top: `${15 + (i % 3) * 25}%`,
                    filter: "blur(60px)",
                    opacity: 0.06,
                  }}
                />
              ))}
            </div>

            {/* Cinematic vignette — enhanced opacity for better text visibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 100%)",
              }}
            />
            {/* Bottom fade to page */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>

          {/* ── Overlay Content ── */}
          <div className="relative pt-[30px] z-10 max-w-[1200px] mx-auto text-center sm:pt-20">

            {/* Subheadline above */}
            <p
              className={`${workSans.className} text-[13px] sm:text-[15px] text-[#80ECFF] tracking-[0.2em] uppercase font-semibold mb-5 opacity-90`}
            >
              Cuba&apos;s AI-Native Digital Asset
            </p>

            {/* Headline */}
            <h1
              className={`${orbitron.className} text-[32px] sm:text-[62px] lg:text-[72px] text-[#fff] font-bold leading-[1.1em] tracking-tight mb-8`}
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.6)" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#316CFF] to-[#80ECFF]">
                The Code Has Awakened.
              </span>
            </h1>

            {/* Body */}
            <div className="max-w-[720px] mx-auto mb-10">
              <p
                className={`${workSans.className} text-[17px] sm:text-[20px] text-gray-200 leading-relaxed font-medium`}
                style={{ textShadow: "0 1px 20px rgba(0,0,0,0.8)" }}
              >
                CubaNex is an AI-native digital asset built on BNB Chain, designed to evolve into a decentralized intelligence ecosystem.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-6 justify-center items-center">
              <a href="/community" className="w-auto">
                <button
                  id="hero-enter-ecosystem"
                  className="w-auto px-5 py-3 sm:px-7 sm:py-4 text-[13px] sm:text-[16px] whitespace-nowrap rounded-full text-white border border-white/30 font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Enter the Ecosystem
                </button>
              </a>
              <a href="/whitepaper" className="w-auto">
                <button
                  id="hero-read-whitepaper"
                  className="w-auto px-5 py-3 sm:px-7 sm:py-4 text-[13px] sm:text-[16px] whitespace-nowrap rounded-full text-[#000] font-bold bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] hover:shadow-[0_0_24px_rgba(128,236,255,0.5)] transition-all duration-300"
                >
                  Read Whitepaper
                </button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-10 hidden sm:flex gap-4 lg:gap-10 justify-center opacity-60">
              <div className="flex items-center gap-2">
                <img src="/Check_ring_duotone.svg" className="w-4 h-4" alt="" />
                <span className="text-[12px] font-medium">Verified Contract</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/Check_ring_duotone.svg" className="w-4 h-4" alt="" />
                <span className="text-[12px] font-medium">Open Framework</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <img src="/Check_ring_duotone.svg" className="w-4 h-4" alt="" />
                <span className="text-[12px] font-medium">Fixed Supply</span>
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
            </h2>{" "}
            <p className="text-gray-400 max-w-[600px] mx-auto mb-16 text-lg">
              CubaNex is not simply a token. It is the foundation for an evolving intelligence network where blockchain, AI, and community participation converge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-10">
              
              {/* Intelligence */}
              <div className="group flex flex-col items-center justify-center border border-white/[0.05] w-full mx-auto p-6 relative h-auto min-h-[16rem] rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,210,255,0.1)] transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 text-center w-full">
                  <h2 className="text-white text-[20px] sm:text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                    <span className="w-1.5 h-6 bg-[#00D2FF] rounded-full inline-block" />
                    Intelligence
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#9CB4D8] leading-relaxed">
                    CubaNex is designed to evolve through future AI-assisted systems, autonomous tools, and adaptive digital frameworks.
                  </p>
                </div>
              </div>

              {/* Sovereignty */}
              <div className="group flex flex-col items-center justify-center border border-white/[0.05] w-full mx-auto p-6 relative h-auto min-h-[16rem] rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(49,108,255,0.1)] transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 text-center w-full">
                  <h2 className="text-white text-[20px] sm:text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                    <span className="w-1.5 h-6 bg-[#316CFF] rounded-full inline-block" />
                    Sovereignty
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#9CB4D8] leading-relaxed">
                    Built on decentralized infrastructure, CubaNex creates a foundation for transparent participation without dependence on centralized control.
                  </p>
                </div>
              </div>

              {/* Connection */}
              <div className="group flex flex-col items-center justify-center border border-white/[0.05] w-full mx-auto p-6 relative h-auto min-h-[16rem] rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(153,69,255,0.1)] transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 text-center w-full">
                  <h2 className="text-white text-[20px] sm:text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                    <span className="w-1.5 h-6 bg-[#9945FF] rounded-full inline-block" />
                    Connection
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#9CB4D8] leading-relaxed">
                    The project bridges Cuban identity, global technology, and emerging digital systems into one unified ecosystem.
                  </p>
                </div>
              </div>

              {/* Evolution */}
              <div className="group flex flex-col items-center justify-center border border-white/[0.05] w-full mx-auto p-6 relative h-auto min-h-[16rem] rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.1)] transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 text-center w-full">
                  <h2 className="text-white text-[20px] sm:text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                    <span className="w-1.5 h-6 bg-[#00E5FF] rounded-full inline-block" />
                    Evolution
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#9CB4D8] leading-relaxed">
                    CubaNex is built to expand over time through modular utilities, open documentation, and future ecosystem layers.
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* why cubanex? start end  */}

          {/* from havana to blockchain s*/}

          {/* from havana to blockchain s*/}
          {/* from havana to blockchain s*/}
          <ScrollReveal>
            <div className=" relative px-8 pb-10 z-10 pt-20 max-w-[1300px]  mx-auto sm:flex items-center justify-between gap-10 sm:pb-20 ">
              <div className="">
                <h2
                  className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
                >
                  Born from <span className="text-[#fc6]"> Cuba</span>. Built for the
                  <span className="text-[#316CFF]"> Digital Future</span>.
                </h2>{" "}
                <div
                  className={`${workSans.className} text-[16px] max-w-[560px] sm:text-[18px] text-[#9CB4D8] leading-relaxed mb-8`}
                >
                  <p className="pb-6">
                    CubaNex draws inspiration from Cuba’s resilience, creativity, and cultural depth — then translates that spirit into a new digital form.
                  </p>
                  <p>
                    It is a bridge between heritage and intelligence, between identity and infrastructure, between what Cuba has always carried within and what technology can now reveal.
                  </p>
                </div>
              </div>
              <div className="">
                <VideoPlayer
                  videoSrc="/cubanex-video.mp4"
                  previewSrc="/hero-havana-CDeUqYMJ.png"
                  className="w-full sm:h-[300px] max-w-6xl mx-auto my-24 max-h-[520px]"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>

      {/* ================= tokenomics ================= */}

      <ScrollReveal>
        <section className="py-24 sm:py-32 px-6">
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

            <div className="bg-[#04071d]/80 border border-white/[0.05] rounded-3xl p-8 shadow-lg max-w-3xl mx-auto backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                
                <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-8">
                  <p className="text-gray-500 text-sm mb-1">Total Supply</p>
                  <p className={`${orbitron.className} text-xl text-white font-medium`}>100,000,000,000 <span className="text-[#00D2FF]">CNEX</span></p>
                </div>
                
                <div className="pb-6 sm:pb-0">
                  <p className="text-gray-500 text-sm mb-1">Network</p>
                  <p className="text-xl text-white font-medium">BNB Smart Chain</p>
                </div>

                <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-8 sm:pt-6">
                  <p className="text-gray-500 text-sm mb-1">Standard</p>
                  <p className="text-xl text-white font-medium">BEP-20</p>
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
                    <img src="/link-external.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a href="/tokenomics">
                <button className="px-8 py-3.5 text-[14px] sm:text-[16px] rounded-full text-white font-medium border border-white/20 hover:bg-white/10 transition-all duration-300">
                  View Token Details
                </button>
              </a>
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
              className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-[#9CB4D8] max-w-[600px] mx-auto mb-16`}
            >
              CubaNex unfolds in phases. Each phase reveals another layer of the ecosystem.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="relative border border-[#00D2FF]/20 bg-[#04071d]/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00D2FF]/10 rounded-full blur-2xl animate-ambient-pulse"></div>
                
                <p className={`${orbitron.className} text-[#00D2FF] font-semibold text-lg mb-2`}>Current Phase</p>
                <h3 className="text-3xl text-white font-bold mb-8">Conscious Layer</h3>
                
                <ul className="space-y-4">
                  {[
                    "Brand system refinement",
                    "Ecosystem page upgrade",
                    "Whitepaper alignment",
                    "Community activation",
                    "Smart contract verification",
                    "Labs foundation"
                  ].map((milestone, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#316CFF]"></div>
                      <span className="text-[#E4ECFF] text-lg">{milestone}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a href="/about#roadmap">
                <button className="px-8 py-3.5 text-[14px] sm:text-[16px] rounded-full text-white font-medium border border-white/20 hover:bg-white/10 transition-all duration-300">
                  View Full Roadmap
                </button>
              </a>
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
              <div className="group flex flex-col items-center border border-white/[0.05] p-8 rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-700 text-center outline-none" tabIndex={0}>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xl font-bold mb-6">1</div>
                <h3 className="text-white text-xl font-bold mb-4">Set Up Wallet</h3>
                <p className="text-[#9CB4D8] text-sm leading-relaxed">
                  Use MetaMask, Trust Wallet, or another compatible wallet.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group flex flex-col items-center border border-white/[0.05] p-8 rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-700 text-center outline-none" tabIndex={0}>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xl font-bold mb-6">2</div>
                <h3 className="text-white text-xl font-bold mb-4">Add BNB Smart Chain</h3>
                <p className="text-[#9CB4D8] text-sm leading-relaxed">
                  Ensure your wallet is connected to BNB Smart Chain.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group flex flex-col items-center border border-white/[0.05] p-8 rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-700 text-center outline-none" tabIndex={0}>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xl font-bold mb-6">3</div>
                <h3 className="text-white text-xl font-bold mb-4">Verify Contract</h3>
                <p className="text-[#9CB4D8] text-sm leading-relaxed">
                  Always use the official contract address listed on cubanex.io.
                </p>
              </div>

              {/* Step 4 */}
              <div className="group flex flex-col items-center border border-white/[0.05] p-8 rounded-3xl bg-[#04071d]/80 hover:bg-[#060b24] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-700 text-center outline-none" tabIndex={0}>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xl font-bold mb-6">4</div>
                <h3 className="text-white text-xl font-bold mb-4">Receive CNEX</h3>
                <p className="text-[#9CB4D8] text-sm leading-relaxed">
                  CNEX distribution follows the official token model and project access structure.
                </p>
              </div>

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
            <a
              href="https://x.com/CubaNexOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex items-center justify-center border border-white/[0.1] w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl bg-[#04071d] cursor-pointer tab-index-0 outline-none" tabIndex={0}>
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

            {/* 3 */}
            <a
              href="https://t.me/CubaNexOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex items-center justify-center border border-white/[0.1] w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl bg-[#04071d] cursor-pointer tab-index-0 outline-none" tabIndex={0}>
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