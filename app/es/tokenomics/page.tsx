import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
import { FileText, Shield } from "lucide-react";
import TokenOverviewMini from "@/components/ToverView";
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
const page = () => {
  return (
    <div className="main w-full relative  bg-[#010813]">
      <div className="flex px-4 min-w-full pt-[120px] pb-[60px] sm:pt-[150px] sm:pb-[80px] flex-col gap-2 items-center justify-center bg-cover tockenomicBg">
        <h1
          className={`${orbitron.className} w-full text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
        >
          <span className="text-[#FF8F00]"> CNEX</span> Tokenomics
        </h1>

        <div className="bg-[#081420]/90 backdrop-blur-md border border-[#FFB74A]/30 rounded-2xl p-8 mb-12 max-w-[900px] mx-auto text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield size={120} className="text-[#FFB74A]" />
          </div>

          <h2 className={`${orbitron.className} text-[#FFB74A] font-bold text-2xl mb-6 flex items-center gap-3`}>
            <span className="w-2 h-8 bg-[#FFB74A] rounded-full"></span>
            CubaNex (CNEX) — Resumen del Token
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm sm:text-base text-white">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400">Estándar del Token:</span>
              <span className="font-semibold">BEP-20</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400">Blockchain:</span>
              <span className="font-semibold">BNB Smart Chain</span>
            </div>
            <div className="flex flex-col border-b border-white/10 pb-2 md:col-span-2">
              <span className="text-gray-400 mb-1">Dirección del Contrato:</span>
              <a
                href="https://bscscan.com/token/0xf073d173Ed309f8A208e6C183eFf858DbC882DbB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-sm text-[#FFB74A] hover:underline break-all"
              >
                0xf073d173Ed309f8A208e6C183eFf858DbC882DbB
              </a>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400">Suministro Total:</span>
              <span className="font-semibold">100,000,000,000 CNEX</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400">Decimales:</span>
              <span className="font-semibold">18</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`${orbitron.className} text-white font-semibold text-lg`}>Descripción:</h3>
            <p className={`${workSans.className} text-gray-300 leading-relaxed text-sm sm:text-base`}>
              CubaNex (CNEX) es un activo digital descentralizado construido sobre la BNB Smart Chain.
              El token sirve como base del ecosistema CubaNex en evolución, permitiendo
              futuras herramientas on-chain, módulos autónomos y extensiones de sistemas
              impulsadas por IA. CNEX proporciona utilidad en toda la plataforma y actúa como
              el medio clave para la participación en el ecosistema.
            </p>
          </div>
        </div>

        <p
          className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300 mx-auto `}
        >
          Distribución transparente de tokens y utilidad real para una comunidad
          global y participativa.
        </p>
        <div className="pb-14 text-white relative z-100 flex justify-center">
          <a
            href="/CubaNex_Whitepaper_v1.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
               bg-primary/90 hover:bg-primary
               text-background font-semibold
               transition-all duration-300
               backdrop-blur-md shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download Whitepaper (PDF)
          </a>
        </div>
        <div className="relative  z-10 px-6 grid max-w-[1000px] text-white mx-auto gap-8 md:grid-cols-3">
          {/* 1 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 16c0 1.657-3.582 3-8 3s-8-1.343-8-3"
                />
              </svg>
            </div>

            <h3 className="text-xl  font-semibold mb-3 items-center">
              100,000,000,000{" "}
            </h3>
            <p className="text-gray-400 text-sm">Total Supply</p>
          </div>
          {/* 2 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V7l7-4z"
                />
              </svg>
            </div>

            <h3 className="text-xl  font-semibold mb-3 items-center">
              Audited{" "}
            </h3>
            <p className="text-gray-400 text-sm">By Leading Firms</p>
          </div>
          {/* 3 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 11V7a5 5 0 0110 0v4"
                />
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="10"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3 items-center">
              2 Years{" "}
            </h3>
            <p className="text-gray-400 text-sm">Team Token Lock </p>
          </div>
        </div>
        {/* section 3 */}
        <div className="w-full pt-20">
          <h1
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-teal-400">Token</span>{" "}
            <span className="text-white">Distribution</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            {/* Presale */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Presale</span>
                <span className="text-teal-400 text-lg">40%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-teal-400 h-full rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            {/* Liquidity Pool */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Liquidity Pool</span>
                <span className="text-amber-400 text-lg">30%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-amber-400 h-full rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            {/* Development */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Development</span>
                <span className="text-green-400 text-lg">15%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-green-400 h-full rounded-full"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Marketing</span>
                <span className="text-purple-500 text-lg">10%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-purple-500 h-full rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Team Locked - full row under grid */}
          <div className="max-w-md mx-auto px-4 mt-8">
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Team (Locked)</span>
                <span className="text-orange-400 text-lg">5%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-orange-400 h-full rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Tabla de Distribución */}
        <div className="w-full pt-16 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#081420]/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#FFB74A]/10 border-b border-white/10">
                      <th className={`${orbitron.className} px-6 py-5 text-[#FFB74A] font-bold text-sm tracking-wider uppercase`}>Asignación</th>
                      <th className={`${orbitron.className} px-6 py-5 text-[#FFB74A] font-bold text-sm tracking-wider uppercase`}>Porcentaje</th>
                      <th className={`${orbitron.className} px-6 py-5 text-[#FFB74A] font-bold text-sm tracking-wider uppercase`}>Cantidad de Tokens</th>
                    </tr>
                  </thead>
                  <tbody className={`${workSans.className} divide-y divide-white/5`}>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Preventa</td>
                      <td className="px-6 py-4 text-teal-400">40%</td>
                      <td className="px-6 py-4 text-gray-300">40,000,000,000 CNEX</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Fondo de Liquidez</td>
                      <td className="px-6 py-4 text-amber-400">30%</td>
                      <td className="px-6 py-4 text-gray-300">30,000,000,000 CNEX</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Desarrollo</td>
                      <td className="px-6 py-4 text-green-400">15%</td>
                      <td className="px-6 py-4 text-gray-300">15,000,000,000 CNEX</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Marketing</td>
                      <td className="px-6 py-4 text-purple-400">10%</td>
                      <td className="px-6 py-4 text-gray-300">10,000,000,000 CNEX</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Equipo (Bloqueado)</td>
                      <td className="px-6 py-4 text-orange-400">5%</td>
                      <td className="px-6 py-4 text-gray-300">5,000,000,000 CNEX</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-white/5 font-bold">
                      <td className="px-6 py-5 text-white">Suministro Total</td>
                      <td className="px-6 py-5 text-white">100%</td>
                      <td className="px-6 py-5 text-[#FFB74A]">100,000,000,000 CNEX</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-6 text-center italic">
              * Los tokens del equipo están sujetos a un período de consolidación de 2 años para garantizar el compromiso a largo plazo con el proyecto.
            </p>
          </div>
        </div>
      </div>

      {/* real utility */}
      <section className="w-full pb-20 px-4 bg-[#010813]">
        <h2
          className={`${orbitron.className} text-center text-[32px] sm:text-[48px] font-bold text-white mb-14`}
        >
          Real-World <span className="text-[#FFB74A]">Utility</span>
        </h2>

        <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
          {/* 1 — Transportation */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 2.png"
              alt="Transportation"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Transportation
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Power a network of electric vehicle charging stations, enabling
                clean and efficient mobility.
              </p>
            </div>
          </div>

          {/* 2 — Clean Energy (image on right) */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row-reverse gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 5.png"
              alt="Clean Energy"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Clean Energy
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Blockchain enables transparency & supports the transition toward
                sustainable mobility.
              </p>
            </div>
          </div>

          {/* 3 — Digital Economy */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 4.png"
              alt="Digital Economy"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Digital Economy
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Enable secure peer-to-peer transactions, digital payments,
                online businesses, and new income opportunities.
              </p>
            </div>
          </div>

          {/* 4 — DeFi Services (image on right) */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row-reverse gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 2.png"
              alt="DeFi Services"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                DeFi Services
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Access decentralized finance tools—lending, saving, staking, and
                yield farming—powered by blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
