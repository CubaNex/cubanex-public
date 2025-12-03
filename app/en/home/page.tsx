import React from "react";
import { ArrowRight } from "lucide-react";
import { Work_Sans, Orbitron } from "next/font/google";
import { main } from "framer-motion/client";
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
export default function Home() {
  return (
    <main className="bg-black  text-white min-h-auto sm:min-h-screen w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-12 w-full min-h-auto sm:min-h-screen flex items-center justify-center px-6">
        <div className="absolute bg-[#000] inset-0 z-0">
          <img
            src="/cubanexthero.png"
            className="hidden sm:block w-full h-full center object-cover opacity-38"
            alt="Hero Background"
          />
          <img
            src="/cubanextherophone.png"
            className="block sm:hidden w-full h-full center object-cover opacity-38"
            alt="Hero Background"
          />
        </div>
        <div className="relative pt-[30px] z-10 max-w-[1200px] mx-auto text-center  sm:pt-20">
          <div className="inline-flex items-center space-x-2 border border-[rgba(255,255,255,0.4)] rounded-full px-3 sm:px-6 py-2  sm:py-3 mb-4 animate-pulse-slow">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FF8F00] smooth-pulse shadow-[0_0_8px_#FF8F00]" />
            <span className="text-sm font-medium text-[#fff]">
              Presale Live Now{" "}
            </span>
          </div>

          <h1
            className={`${orbitron.className} text-[32px] sm:text-[56px] lg:text-[100px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            The Future of Cuba is 
            <span className="text-[#FFB74A]"> Crypto</span>
          </h1>

          <p
            className={`${workSans.className} text-[16px] sm:text-[24px] text-gray-300 max-w-[1000px]  mx-auto mb-8`}
          >
            The Dream Awoke as a Code — The First Crypto for the People of Cuba
            Has Arrived. CUBANEX is here
          </p>

          <div className="flex gap-2 sm:gap-6 justify-center">
            <button
              className=" px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white border-1 font-medium bg-[transparetn] hover:bg-[#fff] hover:text-[#000] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Be Among the First{" "}
            </button>
            <button
              className="px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Read Whitepaper{" "}
            </button>
          </div>
          <div className="pt-5 sm:pt-0 sm:py-8 sm:mt-8 flex gap-2 sm:gap-4 justify-center">
            <div className="flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px] `}
              >
                Verified Contract{" "}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px]`}
              >
                Transparent Source{" "}
              </span>
            </div>
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="../Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px]`}
              >
                Pure Supply Structure{" "}
              </span>
            </div>
          </div>
          <div className="py-8 flex justify-center">
            <a href="#fourPoint">
              <img
                src="../belowbuton.png"
                alt=""
                className="w-[25px] sm:w-[32px] mx-auto soft-bounce drop-shadow-lg opacity-90"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY CUBANEX ================= */}
      <section id="fourPoint" className=" pb-20 sm:py-20 bg-[#000] px-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 pb-[60px]">
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
        <div className="max-w-6xl mx-auto text-center">
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

        <div className="max-w-[1300px] mx-auto sm:flex items-center justify-between gap-8 pt-20 lg:pt-40 pb-20 ">
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
                CubaNex is shaped by the creativity of the island and the
                clarity of modern digital tools. It emerges as a meaningful
                digital asset for those aligned with its vision.
              </p>

              <p className="pb-2">
                {" "}
                By blending cultural identity with new technology, CubaNex
                creates a space for participation — where the Cuban spirit
                connects with global innovation.
              </p>
              <p className="pb-2">
                {" "}
                The vision includes integrations with AI, sustainable models,
                and future Web3 tools — developed with intention and focus
              </p>
              <p>
                CubaNex opens a digital path for those ready to explore new
                possibilities — building a bridge between tradition and
                technology.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={"/hero-havana-CDeUqYMJ.png"}
              alt="from havana to blockchain"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY SECTION ================= */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Connect With Our Global Community
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Stay updated with the latest developments, ecosystem tools, and
            collaborative opportunities.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-white hover:text-black transition"
            >
              Join Community
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Follow Updates
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHITEPAPER SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Whitepaper & Documentation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Explore our detailed technical documentation, vision, economic
            structure, and roadmaps that define the future of CubaNex.
          </p>

          <a
            href="/CUBANEX-Whitepaper.pdf"
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold inline-block hover:bg-gray-200 transition"
          >
            Download Whitepaper
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
    </main>
  );
}
