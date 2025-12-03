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
            className="hidden sm:block w-full h-full center object-cover opacity-45"
            alt="Hero Background"
          />
          <img
            src="/cubanextherophone.png"
            className="block sm:hidden w-full h-full center object-cover opacity-45"
            alt="Hero Background"
          />
        </div>
        <div className="relative pt-[30px] z-10 max-w-[1200px] mx-auto text-center  sm:pt-20">
          <div className="inline-flex items-center space-x-2 border border-[rgba(255,255,255,0.4)] rounded-full px-3 sm:px-6 py-2  sm:py-3 mb-4 animate-pulse-slow">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FF8F00] smooth-pulse shadow-[0_0_8px_#FF8F00]" />
            <span className="text-sm font-medium text-[#fff]">
              Preventa en vivo ahora{" "}
            </span>
          </div>

          <h1
            className={`${orbitron.className} text-[32px] sm:text-[56px] lg:text-[100px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            El futuro de Cuba es <span className="text-[#FFB74A]"> Cripto</span>
          </h1>

          <p
            className={`${workSans.className} text-[16px] sm:text-[24px] text-gray-300 max-w-[1000px]  mx-auto mb-8`}
          >
            El Sueño Despertó como Código — Ha Llegado la Primera Cripto para el
            Pueblo de Cuba. CUBANEX está aquí
          </p>

          <div className="flex gap-2 sm:gap-6 justify-center">
            <button
              className=" px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white border-1 font-medium bg-[transparetn] hover:bg-[#fff] hover:text-[#000] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Sé de los primeros
            </button>
            <button
              className="px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Leer el Whitepaper
            </button>
          </div>
          <div className="pt-5 sm:pt-0 sm:py-8 sm:mt-8 flex gap-2 sm:gap-4 justify-center">
            <div className="flex justify-center items-center gap-2">
              <img src="Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px] `}
              >
                Contrato verificado
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="./Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px]`}
              >
                Fuente transparente{" "}
              </span>
            </div>
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="./Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[16px]`}
              >
                Estructura de suministro pura{" "}
              </span>
            </div>
          </div>
          <div className="py-8 flex justify-center">
            <a href="#fourPoint">
              <img
                src="./belowbuton.png"
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
            <img src="./1B+.png" alt="" className="w-[45px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Suministro total
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="./40.png" alt="" className="w-[60px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Preventa{" "}
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="./30.png" alt="" className="w-[55px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Liquidez{" "}
            </p>
          </div>
          <div className=" lg:min-w-[250px] flex flex-col items-center justify-center gap-2 sm:gap-4">
            <img src="./15.png" alt="" className="w-[45px] sm:w-auto" />

            <p className={`${workSans.className} text-[12px] sm:text-[15px]`}>
              Desarrollo{" "}
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            <span className="text-[#FF8F00]"> ¿Por qué</span> CubaNex?
          </h2>{" "}
          <p className="text-gray-400 max-w-[500px] mx-auto mb-12">
            Conectando el patrimonio cultural de Cuba con la tecnología
            blockchain moderna de manera respetuosa y equilibrada.
          </p>
          <div className="grid gap-4 md:grid-cols-4">
            {/* 1 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#22CCEE]"></div> Rápido
                como un rayo
              </h3>
              <p className="text-gray-400 text-sm">
                El Surgimiento de Cuba como la Primera Superpotencia Cripto de
                América Latina
              </p>
            </div>
            {/* 2 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#22CCEE]"></div> Seguro y
                auditado
              </h3>
              <p className="text-gray-400 text-sm">
                CubaNex une la profundidad cultural de Cuba con la ola creciente
                de innovación digital — posicionando a la nación hacia el
                liderazgo global en esta nueva era descentralizada.
              </p>
            </div>
            {/* 3 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#FF754B]"></div> Ecológico
              </h3>
              <p className="text-gray-400 text-sm">
                Introduce un nuevo lenguaje financiero a través de blockchain e
                inteligencia artificial — diseñado para avanzar con alineación,
                claridad y propósito.
              </p>
            </div>
            {/* 4 */}
            <div className="p-8 border text-start items-start border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3 flex gap-2 items-center">
                <div className="w-[3px] h-[17px] bg-[#9945FF]"></div>Utilidad
                real
              </h3>
              <p className="text-gray-400 text-sm">
                Este es el momento en que Cuba lidera a América Latina hacia una
                nueva realidad financiera. Un código nacido de la consciencia
                colectiva, creado para evolucionar con quienes se alinean
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1300px] mx-auto sm:flex items-center justify-between gap-8 pt-20 lg:pt-40 pb-20 ">
          <div className="">
            <h2
              className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
            >
              De La <span className="text-[#7928D2]"> Habana</span> a la
              <span className="text-[#FF8F00]"> Blockchain</span>
            </h2>{" "}
            <div
              className={`${workSans.className} text-[16px] max-w-[560px] sm:text-[16px] text-gray-300   mb-8`}
            >
              <p className="pb-2">
                {" "}
                CubaNex está moldeado por la creatividad de la isla y la
                claridad de las herramientas digitales modernas. Surge como un
                activo digital con propósito, para quienes se alinean con su
                visión.
              </p>

              <p className="pb-2">
                {" "}
                Al unir la identidad cultural con nuevas tecnologías, CubaNex
                crea un espacio de participación donde el espíritu cubano se
                conecta con la innovación global.
              </p>
              <p className="pb-2">
                {" "}
                La visión incluye integraciones con IA, modelos sostenibles y
                futuras herramientas Web3 — desarrolladas con intención y
                enfoque.
              </p>
              <p>
                CubaNex abre un camino digital moderno para quienes están listos
                para explorar nuevas posibilidades — construyendo un puente
                entre la tradición y la tecnología.
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
      <section className="py-24 bg-[#061123] px-6">
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
