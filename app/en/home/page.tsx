import React from "react";
import { ArrowRight } from "lucide-react";
import { Work_Sans, Orbitron } from "next/font/google";
import { main } from "framer-motion/client";
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
            <img
              src="../belowbuton.png"
              alt=""
              className="w-[25px] sm:w-[32px] mx-auto soft-bounce drop-shadow-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CUBANEX ================= */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why CubaNex?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            A sustainable blockchain ecosystem supporting Cuba’s clean energy,
            transportation modernization, and long-term digital growth.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">Green Energy Ready</h3>
              <p className="text-gray-400 text-sm">
                Built to support renewable power usage, energy tokenization, and
                eco-friendly development.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">
                Future-Proof Digital Economy
              </h3>
              <p className="text-gray-400 text-sm">
                Powering decentralized applications that contribute to
                sustainable economic growth.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">
                Modern Infrastructure
              </h3>
              <p className="text-gray-400 text-sm">
                Developed to support mobility, transport upgrades, and
                data-integrated infrastructure.
              </p>
            </div>
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
