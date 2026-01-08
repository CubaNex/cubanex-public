import React from "react";
import {
  ArrowRight,
  DiscIcon,
  MessageCircle,
  Send,
  Shield,
  TrendingUp,
  Twitter,
  Wallet,
} from "lucide-react";
import { Work_Sans, Orbitron, Abhaya_Libre } from "next/font/google";
import { main } from "framer-motion/client";
import Image from "next/image";
import ConnectWallet from "@/components/ConnectWallet";
import RoeadMapEn from "@/components/RoeadMapEn";
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
// app/fonts.ts or layout.tsx

export const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-abhaya",
});

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
            <span className="text-[12px] text-[#fff]">en vivo ahora </span>
          </div>

          <h1
            className={`${orbitron.className} text-[32px] sm:text-[62px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            El Activo Digital Nativo en IA de Cuba
            <span className="text-[#FFB74A]">
              {" "}
              — Despertando un Nuevo Futuro.
            </span>
          </h1>

          <p
            className={`${workSans.className} text-[16px] sm:text-[24px] text-gray-300 max-w-[700px] mx-auto mb-8`}
          >
            El Sueño Despertó como Código — CUBANEX es un proyecto comunitario
            basado en la inspiración cultural cubana.
          </p>

          <div className="flex gap-2 sm:gap-6 justify-center">
            <a href="/es/community">
              <button
                className=" px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white border-1 font-medium bg-[transparetn] hover:bg-[#fff] hover:text-[#000] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Sé de los primeros
              </button>
            </a>
            <a href="/whitepaper">
              <button
                className="px-[10px] py-2 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52] 
    hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Leer el Whitepaper
              </button>
            </a>
          </div>
          <div className="pt-5 sm:pt-0 sm:py-8 sm:mt-8 flex gap-2 sm:gap-4 justify-center">
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Contrato verificado
              </span>
            </div>
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="./Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Fuente transparente{" "}
              </span>
            </div>
            <div className="hidden  sm:flex justify-center items-center gap-2">
              <img src="./Check_ring_duotone.svg" alt="" />
              <span
                className={`${workSans.className} text-[12px] sm:text-[14px] `}
              >
                Estructura de suministro pura{" "}
              </span>
            </div>
          </div>
          <div className=" pt-8 hidden sm:flex justify-center">
            <ArrowB />
          </div>
        </div>
      </section>

      {/* ================= WHY CUBANEX ================= */}
      <section
        id="fourPoint"
        className="relative sm:pb-20 z-10   sm:py-20 bg-[#000] px-6"
      >
        <div className="absolute  w-full h-full sm:h-auto  bg-[#000] top-0 z-1">
          <img
            src="/shapbg.png"
            className=" w-full h-full center z-10  object-cover "
            alt="Hero Background"
          />
        </div>
        <div className="relative z-10   flex items-center justify-center gap-4 sm:gap-6 pb-[60px]">
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
        <div className="relative z-10  max-w-6xl mx-auto text-center">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1em] mb-6`}
          >
            <span className="text-[#FF8F00]"> ¿Por qué</span> CubaNex?
          </h2>{" "}
          <p className="text-gray-400 max-w-[500px] mx-auto mb-12">
            Inspirado en la cultura cubana, combinando identidad cultural con
            innovación blockchain de manera respetuosa y equilibrada.
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
      </section>
      <div className="relative px-8 pb-10 z-10 pt-20 max-w-[1300px]  mx-auto sm:flex items-center justify-between gap-8 sm:pb-20 ">
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
              CubaNex está moldeado por la creatividad de la isla y la claridad
              de las herramientas digitales modernas. Surge como un activo
              digital con propósito, para quienes se alinean con su visión.
            </p>

            <p className="pb-2">
              {" "}
              Al unir la identidad cultural con nuevas tecnologías, CubaNex crea
              un espacio de participación donde el espíritu cubano se conecta
              con la innovación global.
            </p>
            <p className="pb-2">
              {" "}
              La visión incluye integraciones con IA, modelos sostenibles y
              futuras herramientas Web3 — desarrolladas con intención y enfoque.
            </p>
            <p>
              CubaNex abre un camino digital moderno para quienes están listos
              para explorar nuevas posibilidades — construyendo un puente entre
              la tradición y la tecnología.
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
          className={`${orbitron.className} mt-[-70px] sm:mt-0 px-4 sm:px-0 text-center text-[26px] sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          CNEX
          <span className="text-[#FF8F00]">  Economía del token</span>
        </h2>
        <p
          className={`${workSans.className} px-4 sm:px-0 text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          Un nuevo activo digital creado para una comunidad global — CUBANEX da
          vida al token CNEX con una tokenomía clara y transparente.
        </p>
        {/*  */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* TOKEN DISTRIBUTION BOX */}
          <div className="bg-[#000] border  border-[#9333EA]/40 rounded-xl p-8 shadow-lg">
            <h2 className={`${orbitron.className} text-white text-2xl mb-6`}>
              Distribución de tokens{" "}
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
              Características clave{" "}
            </h2>

            <div className="space-y-6">
              {/* Total Supply */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-lg bg-[#7f5af0] flex justify-center items-center text-white">
                  <span className="text-xl">🔢</span>
                </div> */}
                {/* <Image src={"/image20.png"} alt="icon" width={60} height={50} /> */}
                <div className="icon-card purple">
                  <Wallet size={28} />
                </div>
                <div>
                  <p className={`${workSans.className} text-white font-medium`}>
                    Total Supply
                  </p>
                  <p className={`${workSans.className} text-white/60 text-sm`}>
                    100,000,000,000 CNEX
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
          <button className="px-[20px] py-3 text-[12px] sm:text-[18px]  sm:px-6 sm:py-3 rounded-full text-[#000] font-medium bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2]">
            Ver Smart Contract{" "}
          </button>
        </div>
        {/*  */}
      </section>

      {/* ================= tokenomics ================= */}

      {/* ================= Road Map ================= */}
      <section className="px-4 sm:px-0">
        <h2
          className={`${orbitron.className}  text-center text-[26px] pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Hoja de ruta del
          <span className="text-[#FF8F00]"> proyecto</span>
        </h2>
        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          Un plan claro para desarrollar el ecosistema CNEX y apoyar la
          participación de la comunidad.
        </p>

        <div className="roead map px-8 sm:px-0">
          <RoeadMapEn />
        </div>
      </section>

      {/* ================= Road Map ================= */}

      {/* ================= How to Buy CNEX ================= */}

      <section>
        <h2
          className={`${orbitron.className} text-center text-[26px] pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Cómo comprar
          <span className="text-[#FF8F00]"> CNEX</span>
        </h2>
        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[500px]  mx-auto mb-8`}
        >
          Únete a la preventa en 4 sencillos pasos{" "}
        </p>
        <div
          id="smart-contracts"
          className="px-8 grid max-w-[1300px] mx-auto gap-6 sm:gap-5 md:grid-cols-4"
        >
          {/* 1 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            {/* <img src="../one.png" alt="" className="mx-auto pb-4 w-[55px]" /> */}
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle">1</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Obtén una cartera{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Descarga MetaMask o tu cartera Web3 preferida
            </p>
          </div>
          {/* 2 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-1">2</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Agregar fondos{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Compra ETH o BNB y envíalos a tu cartera{" "}
            </p>
          </div>
          {/* 3 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-2">3</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Conectar cartera{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Conecta tu cartera a la plataforma de preventa de CubaNex{" "}
            </p>
          </div>
          {/* 4 */}
          <div className="p-8  text-center  items-center border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="step-wrapper w-full mx-auto">
              <div className="step-circle-3">4</div>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Comprar CNEX{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Intercambia tu ETH/BNB por tokens CNEX al instante{" "}
            </p>
          </div>
        </div>
        <ConnectWallet />
      </section>
      {/* ================= How to Buy CNEX ================= */}

      {/* ================= Unlock VIP Access to CubaNexN ================= */}
      <section className="relative pb-20 sm:py-20 px-6 z-10 b bg-section">
        <h2
          className={`${orbitron.className} text-center text-[26px] sm:pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Obtén acceso <span className="text-[#FF8F00]">VIP </span>a{" "}
          <span className="text-[#00DED4]">CubaNex</span>
        </h2>

        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[550px] mx-auto mb-8`}
        >
          El proyecto avanza en silencio. Quienes están destinados a
          encontrarlo, siempre lo hacen.
        </p>

        <VipForm />
        <div className=" sm:px-8 pt-20 grid max-w-[1100px] mx-auto gap-4 md:grid-cols-2">
          {/* 1 — Twitter */}
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
                Síguenos para obtener actualizaciones y anuncios en tiempo real.
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">
                  Seguir @CubaNex
                </span>
              </p>
            </div>
          </a>

          {/* 2 — Telegram */}
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
                Únete a nuestra comunidad activa y charla con los miembros del
                equipo.
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">
                  Unirse Telegram
                </span>
              </p>
            </div>
          </a>

          {/* 3 — Discord */}
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <MessageCircle
                size={56}
                className="mx-auto mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl font-semibold mb-3">Discord</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Conéctate con los holders y participa en la gobernanza.
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">
                  Unirse Discord
                </span>
              </p>
            </div>
          </a> */}
        </div>
      </section>

      {/* ================= Unlock VIP Access to CubaNexN ================= */}

      <section className="px-5 py-10 sm:py-20">
        <h2
          className={`${orbitron.className} bg-[#000000] text-center text-[28px] sm:pt-20 sm:text-[36px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em]  mb-6`}
        >
          <span className="text-[#FF8F00]">Whitepaper </span>y Documentación
        </h2>{" "}
        <p
          className={`${workSans.className} text-center text-[16px] sm:text-[18px] text-gray-300 max-w-[700px]  mx-auto mb-8`}
        >
          Explora las ideas principales detrás de CubaNex con documentos
          técnicos y conceptuales claros y fáciles de leer. Aprende cómo está
          estructurado CNEX, cómo funciona y la visión que guía su desarrollo
          futuro.
        </p>
        <WhitePaper />
      </section>
    </main>
  );
}
