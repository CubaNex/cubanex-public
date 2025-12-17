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
import { main } from "framer-motion/client";
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

export const metadata: Metadata = {
  title: "CubaNex (CNEX) – The Future of Crypto in Cuba",
  description:
    "CubaNex (CNEX) is a next-generation digital asset built to connect Cuba’s cultural heritage with modern blockchain technology. Join the CNEX presale and be part of Cuba’s digital future.",
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

export default function Home() {
  return (
    <main className="bg-black  text-white min-h-auto sm:min-h-screen w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="overflow-hidden z-20  relative pb-20 sm:pb-0 pt-12 w-full min-h-auto sm:min-h-screen flex items-center justify-center px-6">
        <div className="absolute bg-[#000] inset-0 z-0">
          {/* <video
            src="/cubanex-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" absolute inset-0 w-full h-full object-cover"
          /> */}
          <img
            src="/cubanexthero.png"
            className="hidden sm:block w-full h-full center object-cover opacity-45"
            alt="Hero Background"
          />
          <img
            src="/cubanextherophone.png"
            className="block sm:hidden w-full h-full center object-cover opacity-45"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/30 sm:bg-black/30" />
        </div>
        <div className="relative pt-[30px] z-10 max-w-[1200px] mx-auto text-center  sm:pt-20">
          <div className="inline-flex items-center justify-center space-x-2 border border-[rgba(255,255,255,0.4)] rounded-full px-3 sm:px-3 py-2  sm:py-2 mb-4 animate-pulse-slow">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FF8F00] smooth-pulse shadow-[0_0_8px_#FF8F00]" />
            <span className="text-[12px] text-[#fff]">Presale Live Now </span>
          </div>

          <h1
            className={`${orbitron.className} text-[32px] sm:text-[56px] lg:text-[100px] text-[#fff]  font-semibold leading-[1em] mb-6`}
          >
            The Future of Cuba is 
            <span className="text-[#FFB74A]"> Crypto</span>
          </h1>

          <p
            className={`${workSans.className} text-[16px] sm:text-[24px] text-gray-300 max-w-[700px]  mx-auto mb-8`}
          >
            The Dream Awoke as a Code — The First Crypto for the People of Cuba
            Has Arrived. CUBANEX is here
          </p>

          <div className="flex gap-2 sm:gap-6 justify-center">
            <a href="/community">
              <button
                className=" px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white border-1 font-medium bg-[transparetn] hover:bg-[#fff] hover:text-[#000] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Be Among the First{" "}
              </button>
            </a>
            <a href="/whitepaper">
              <button
                className="px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Read Whitepaper{" "}
              </button>
            </a>
          </div>
          <div className="pt-5 sm:pt-0 sm:py-8 sm:mt-8 flex gap-2 sm:gap-4 justify-center">
            <div className="flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Verified Contract{" "}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Transparent Source{" "}
              </span>
            </div>
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Pure Supply Structure{" "}
              </span>
            </div>
          </div>
          <div className="pt-8 flex justify-center">
            <ArrowB />
          </div>
        </div>
      </section>

      {/* ================= WHY CUBANEX ================= */}
      <section
        id="fourPoint"
        className="relative sm:pb-20 z-10   sm:py-20 bg-[#000] px-6"
      >
        {/* 4 s*/}
        <div className="absolute  w-full h-full sm:h-auto  bg-[#000] top-0 z-1">
          <img
            src="/shapbg.png"
            className=" w-full h-full center z-10  object-cover "
            alt="Hero Background"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 pb-[60px]">
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
        </div>
        {/* 4 s*/}

        {/* why cubanex? start  */}
        <div className="px- relative z-10 max-w-6xl mx-auto text-center">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            <span className="text-[#FF8F00]"> Why </span> CubaNex?
          </h2>{" "}
          <p className="text-gray-400 max-w-[500px] mx-auto mb-12">
            Connecting Cuba’s cultural heritage with modern blockchain
            technology in a respectful and balanced way.
          </p>
          <div className="grid gap-4 md:grid-cols-4">
            {/* 1 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#22CCEE]"></div> Lightning
                Fast
              </h3>
              <p className="text-gray-400 text-sm">
                Cuba’s Emergence as the First Crypto Superpower of Latin America
              </p>
            </div>
            {/* 2 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#22CCEE]"></div> Secure &
                Audited
              </h3>
              <p className="text-gray-400 text-sm">
                CubaNex unifies Cuba’s cultural depth with the rising wave of
                digital innovation — placing the nation on a path to global
                leadership in the decentralized era
              </p>
            </div>
            {/* 3 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#FF754B]"></div>{" "}
                Eco-Friendly
              </h3>
              <p className="text-gray-400 text-sm">
                It introduces a new financial language through blockchain and AI
                — designed to move with alignment, clarity, and purpose
              </p>
            </div>
            {/* 4 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#9945FF]"></div>Real
                Utility
              </h3>
              <p className="text-gray-400 text-sm">
                This is Cuba’s moment to lead Latin America into a new financial
                reality. A code born of collective consciousness, created to
                evolve through those who align.
              </p>
            </div>
          </div>
        </div>
        {/* why cubanex? start end  */}

        {/* from havana to blockchain s*/}

        {/* from havana to blockchain s*/}
      </section>
      <div className=" relative px-8 pb-10 z-10 pt-20 max-w-[1300px]  mx-auto sm:flex items-center justify-between gap-8 sm:pb-20 ">
        <div className="">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
          >
            From <span className="text-[#7928D2]"> Havana</span> to the
            <span className="text-[#FF8F00]"> Blockchain</span>
          </h2>{" "}
          <div
            className={`${workSans.className} text-[16px] max-w-[560px] sm:text-[16px] text-gray-300   mb-8`}
          >
            <p className="pb-2">
              {" "}
              CubaNex is shaped by the creativity of the island and the clarity
              of modern digital tools. It emerges as a meaningful digital asset
              for those aligned with its vision.
            </p>

            <p className="pb-2">
              {" "}
              By blending cultural identity with new technology, CubaNex creates
              a space for participation — where the Cuban spirit connects with
              global innovation.
            </p>
            <p className="pb-2">
              {" "}
              The vision includes integrations with AI, sustainable models, and
              future Web3 tools — developed with intention and focus
            </p>
            <p>
              CubaNex opens a digital path for those ready to explore new
              possibilities — building a bridge between tradition and
              technology.
            </p>
          </div>
        </div>
        <div className="">
          {/* <Image
            src={"/hero-havana-CDeUqYMJ.png"}
            alt="from havana to blockchain"
            width={600}
            height={500}
          /> */}
          <VideoPlayer
            videoSrc="/cubanex-video.mp4"
            previewSrc="/hero-havana-CDeUqYMJ.png"
            className="w-full sm:h-[300px] max-w-6xl mx-auto my-24 max-h-[520px]"
          />
        </div>
      </div>

      {/* ================= tokenomics ================= */}

      <section>
        <h2
          className={`${orbitron.className} mt-[-70px] sm:mt-0  px-4 sm:px-0 text-center text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          CNEX
          <span className="text-[#FF8F00]"> Tokenomics</span>
        </h2>
        <p
          className={`${workSans.className} px-4 sm:px-0 text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          A new digital asset built for the Cuban community—CUBANEX brings the
          CNEX token to life with clear, transparent tokenomics.
        </p>
        {/*  */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* TOKEN DISTRIBUTION BOX */}
          <div className="bg-[#000] border  border-[#9333EA]/40 rounded-xl p-8 shadow-lg">
            <h2 className={`${orbitron.className} text-white text-2xl mb-6`}>
              Token Distribution
            </h2>

            <ul className="space-y-4">
              <li
                className={`${workSans.className} flex justify-between text-white/80`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#7f5af0]"></span>
                  Presale
                </span>
                <span className="text-[#7f5af0] font-semibold">40%</span>
              </li>

              <li
                className={`${workSans.className} flex justify-between text-white/80`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb800]"></span>
                  Liquidity
                </span>
                <span className="text-[#ffb800] font-semibold">30%</span>
              </li>

              <li
                className={`${workSans.className} flex justify-between text-white/80`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00d1ff]"></span>
                  Development
                </span>
                <span className="text-[#00d1ff] font-semibold">15%</span>
              </li>

              <li
                className={`${workSans.className} flex justify-between text-white/80`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff4d4d]"></span>
                  Marketing
                </span>
                <span className="text-[#ff4d4d] font-semibold">10%</span>
              </li>

              <li
                className={`${workSans.className} flex justify-between text-white/80`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00ff88]"></span>
                  Team & Ecosystem
                </span>
                <span className="text-[#00ff88] font-semibold">5%</span>
              </li>
            </ul>
          </div>

          {/* KEY FEATURES BOX */}
          <div className="bg-[#000] border  border-[#9333EA]/40 rounded-xl p-8 shadow-lg">
            <h2 className={`${orbitron.className} text-white text-2xl mb-6`}>
              Key Features
            </h2>

            <div className="space-y-6">
              {/* Total Supply */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-lg bg-[#7f5af0] flex justify-center items-center text-white">
                  <span className="text-xl">🔢</span>
                </div> */}
                <div className="icon-card purple">
                  <Wallet size={28} />
                </div>

                <div>
                  <p className={`${workSans.className} text-white font-medium`}>
                    Total Supply
                  </p>
                  <p className={`${workSans.className} text-white/60 text-sm`}>
                    1,000,000,000 CNEX tokens
                  </p>
                </div>
              </div>

              {/* Smart Contract */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-lg bg-[#ffb800] flex justify-center items-center text-white">
                  <span className="text-xl">📜</span>
                </div> */}
                <div className="icon-card yellow">
                  <Shield size={28} />
                </div>
                <div>
                  <p className={`${workSans.className} text-white font-medium`}>
                    Smart Contract
                  </p>
                  <p className={`${workSans.className} text-white/60 text-sm`}>
                    Audited & Verified
                  </p>
                </div>
              </div>

              {/* Real Utility */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-lg bg-[#00d1ff] flex justify-center items-center text-white">
                  <span className="text-xl">🚀</span>
                </div> */}
                <div className="icon-card cyan">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <p className={`${workSans.className} text-white font-medium`}>
                    Real Utility
                  </p>
                  <p className={`${workSans.className} text-white/60 text-sm`}>
                    Transportation, Energy & DeFi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="px-[30px] py-3 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-[#000] font-medium bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2]">
            View Smart Contract
          </button>
        </div>
        {/*  */}
      </section>

      {/* ================= tokenomics ================= */}

      {/* ================= Road Map ================= */}
      <section>
        <h2
          className={`${orbitron.className} text-center text-[26px] pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Project
          <span className="text-[#FF8F00]"> Roadmap</span>
        </h2>
        <p
          className={`${workSans.className} text-center text-[16px] px-3 sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          A clear plan for advancing Cuba’s digital future.
        </p>

        <div className="roead map px-12">
          <RoeadMapEn />
        </div>
      </section>

      {/* ================= Road Map ================= */}

      {/* ================= How to Buy CNEX ================= */}

      <section className="pb-8 sm:pb-16">
        <h2
          className={`${orbitron.className} text-center text-[26px] pt-10 sm:pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          How to
          <span className="text-[#FF8F00]"> Buy CNEX</span>
        </h2>
        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          Join the presale in 4 simple steps
        </p>
        <div className="px-6 grid max-w-[1300px] mx-auto gap-8 md:grid-cols-4">
          {/* 1 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle">1</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Get a Wallet{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Download MetaMask or your preferred Web3 wallet{" "}
            </p>
          </div>
          {/* 2 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-1">2</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Add Funds{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Purchase ETH or BNB and send to your wallet{" "}
            </p>
          </div>
          {/* 3 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-2">3</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Connect Wallet{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Connect your wallet to the CubaNex presale platform{" "}
            </p>
          </div>
          {/* 4 */}
          <div className="p-8  text-center  items-center border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-3">4</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Buy CNEX{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Swap your ETH/BNB for CNX tokens instantly{" "}
            </p>
          </div>
        </div>
        <ConnectWallet />
      </section>
      {/* ================= How to Buy CNEX ================= */}

      {/* ================= Unlock VIP Access to CubaNexN ================= */}
      <section className="relative mt-[-70px]  pb-20 sm:pb-20 px-6 z-10 b bg-section">
        <h2
          className={`${orbitron.className} text-center text-[26px] pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Unlock <span className="text-[#FF8F00]">VIP </span>
          Access to <span className="text-[#00DED4]">CubaNex</span>
        </h2>
        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[550px]  mx-auto mb-8`}
        >
          The project moves quietly. Those meant to find it always do.{" "}
        </p>

        <VipForm />
        <div className="px-6 pt-20 grid max-w-[1100px] mx-auto gap-8 md:grid-cols-3">
          {/* 1 */}

          {/* 2 */}
          <a
            href="https://x.com/CubaNexOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <Twitter size={56} className="mx-auto mb-5" strokeWidth={1.8} />

              <h3 className="text-xl font-semibold mb-3">Twitter / X</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Follow us for real-time updates and announcements
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">@CubaNex</span>
              </p>
            </div>
          </a>

          {/* 3 */}
          <a
            href="https://t.me/CubaNexOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <Send size={56} className="mx-auto mb-5" strokeWidth={1.8} />

              <h3 className="text-xl font-semibold mb-3">Telegram</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Join our active community and chat with the team
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">
                  Join Telegram
                </span>
              </p>
            </div>
          </a>

          {/* 4 */}
          <a href="#" rel="noopener noreferrer" className="block">
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
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
                <span className="text-[#FFB74A] font-medium">Join Discord</span>
              </p>
            </div>
          </a>
        </div>
      </section>
      {/* ================= Unlock VIP Access to CubaNex================= */}

      {/* ================= WHITEPAPER SECTION ================= */}
      <section className="px-5 pb-20">
        <h2
          className={`${orbitron.className} bg-[#000000] text-center text-[26px] pt-6 sm:pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em]  mb-6`}
        >
          <span className="text-[#FF8F00]">Whitepaper  </span> & Documentation
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

      {/* ================= FOOTER ================= */}
    </main>
  );
}
