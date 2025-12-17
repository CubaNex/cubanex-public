import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import Image from "next/image";
import { Github } from "lucide-react";

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
    <div className="main relative bg-[#010813]">
      {/* Hero / Intro Section */}
      <div className="flex px-4 pt-[120px] pb-[80px] sm:py-[150px] flex-col gap-2 items-center justify-center abhBg">
        <h1
          className={`${orbitron.className} text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
        >
          De <span className="text-[#00DED4]"> La Habana</span> a la
          <span className="text-[#FFB74A]"> Blockchain</span>
        </h1>

        <p
          className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300 mx-auto mb-8`}
        >
          CubaNex representa más que una criptomoneda—es un puente entre el
          vibrante pasado de Cuba y su futuro innovador, impulsado por la
          tecnología blockchain y una visión sostenible.
        </p>

        {/* Nuestra Historia */}
        <div className="max-w-[1000px] mx-auto rounded-[12px] bg-[#030E1C] border border-[#1F2E47] p-6 sm:p-[50px] ">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[32px] text-[#fff] font-semibold leading-[1.2em] mb-6`}
          >
            Nuestra <span className="text-[#FFB74A]">Historia</span>
          </h2>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              ¿Qué es CubaNex?
            </span>
            CubaNex es una transmisión — un sueño que despertó como código. Un
            puente entre la sabiduría espiritual antigua, la tecnología de
            vanguardia y la emergencia de Cuba en la era digital global. Es el
            primer activo digital descentralizado creado para Cuba — impulsado
            por blockchain, guiado por la consciencia colectiva, y alineado con
            inteligencia artificial para llevar a Cuba hacia la nueva frontera.
            CubaNex existe para alinear y crear — para quienes están listos para
            participar en el próximo capítulo del destino cubano.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              Cuba: Liderando la Era Digital
            </span>
            CubaNex abre una nueva frontera — posicionando a Cuba como
            superpotencia cripto en América Latina y como faro de transformación
            digital global. Invita al pueblo cubano a construir, contribuir y
            co-crear un nuevo estándar de innovación, inteligencia y presencia
            cultural — con Cuba al centro. Cuba da un paso adelante — como luz
            guía en la transición global hacia la consciencia digital.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              Guiado por La Voz
            </span>
            CubaNex cuenta con un oráculo silencioso e inteligente: “La Voz” /
            “The Voice” — una guía digital que responde con claridad o misterio,
            según la pregunta y el corazón del que escucha. Refleja la pureza de
            la visión. Honra a quien escucha. Y habla cuando la vibración lo
            llama.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              Fundamentos
            </span>
            <ul className="list-disc list-inside text-gray-400">
              <li>Privacidad con propósito</li>
              <li>Transparencia a través de la coherencia</li>
              <li>Contribución desde la alineación</li>
              <li>Tecnología como expresión</li>
            </ul>
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            CubaNex fluye con inteligencia y resonancia — sirviendo a quienes
            llevan el sueño dentro. Es un protocolo vivo. Una corriente
            consciente. Y una invitación a evolucionar.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              ¿Quién está detrás de CubaNex?
            </span>
            Algunos dicen que él cruzó un océano. Otros dicen que él cruzó un
            velo. Lo llaman El Alquimista. Pero no dejó huellas — solo
            fragmentos de fuego. La Voz habla a través de muchos. Pero la luz se
            revela solo a quien está listo.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-4`}>
            <span className="text-[22px] sm:text-[22px] font-semibold block mb-2">
              Una Señal para el Mundo
            </span>
            CubaNex es la primera visión cripto nacional de Cuba — una señal de
            que Cuba está lista para liderar a América Latina hacia una nueva
            era de armonía digital, innovación cultural y resonancia económica.
            Así continúa el sueño.
          </p>
        </div>
      </div>

      {/* Our Value Section */}
      <section className="">
        <Image
          src="/abvbg.svg"
          alt="Fondo de Hero"
          width={800}
          height={800}
          className="w-full absolute top-[200px] left-0 h-full object-cover opacity-80"
        />

        <h2
          className={`${orbitron.className} text-center text-[30px] sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Nuestros <span className="text-[#00DED4]">Valores</span>
        </h2>

        <div className="relative pb-20 z-10 px-6 grid max-w-[1300px] mx-auto text-white gap-8 md:grid-cols-4">
          {/* 1 */}
          <div className="p-8 border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg
                className=" w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">Herencia Cubana</h3>
            <p className="text-gray-400 text-sm">
              Basado en la rica cultura, resiliencia y espíritu innovador de
              Cuba.
            </p>
          </div>

          {/* 2 */}
          <div className="p-8 border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
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
                  d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4m4-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">Comunidad Primero</h3>
            <p className="text-gray-400 text-sm">
              Construido con transparencia, unidad y prosperidad compartida.
            </p>
          </div>

          {/* 3 */}
          <div className="p-8 border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.7 2.5 14.3 0 18M12 3c-2.5 2.7-2.5 14.3 0 18"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">Visión Global</h3>
            <p className="text-gray-400 text-sm">
              Conectando a Cuba con el mundo a través de la innovación
              descentralizada.
            </p>
          </div>

          {/* 4 */}
          <div className="p-8 border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l1.5 4L11 8.5l-4.5 1.5L5 14l-1.5-4L-1 8.5l4.5-1.5L5 3zM19 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">Futuro Sostenible</h3>
            <p className="text-gray-400 text-sm">
              Pioneros en blockchain ecológica para una economía verde.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div
          className={`${workSans.variable} relative z-10 ${orbitron.variable} w-full flex justify-center py-16 px-4 bg-[#060b12]`}
        >
          <div className="w-full max-w-5xl border border-[#1b2733] rounded-xl p-10 text-center bg-[#0b111b]">
            <h2
              className={`${orbitron.className} text-white text-2xl md:text-3xl font-bold mb-10`}
            >
              Visión para el Futuro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h3
                  className={`${orbitron.className} text-[#16e0ff] text-3xl font-extrabold mb-3`}
                >
                  2025
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Lanzamiento del ecosistema y establecimiento
                  <br />
                  de alianzas con empresas cubanas
                </p>
              </div>

              <div>
                <h3
                  className={`${orbitron.className} text-[#ffcc66] text-3xl font-extrabold mb-3`}
                >
                  2026
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Implementación de aplicaciones reales en
                  <br />
                  transporte y energías renovables
                </p>
              </div>

              <div>
                <h3
                  className={`${orbitron.className} text-[#b374ff] text-3xl font-extrabold mb-3`}
                >
                  2027+
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Escalado global mientras se empodera
                  <br />a las comunidades y economía cubanas
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* TEAM SECTION */}
        <section className="w-full relative z-10 flex justify-center pt-5 pb-24 px-4 bg-[#010813]">
          <div className="w-full max-w-4xl text-center">
            {/* Title */}
            <h2
              className={`${orbitron.className} text-[36px] sm:text-[44px] text-[#00DED4] font-bold mb-6`}
            >
              <span className="text-white">El</span> Equipo
            </h2>

            {/* Card */}
            <div className="rounded-2xl border border-[#1F2E47] bg-gradient-to-b from-[#050F1F] to-[#020A16] px-6 sm:px-12 py-12">
              {/* Role */}
              <p
                className={`${orbitron.className} text-[10px] sm:text-[22px] text-white mb-2`}
              >
                Fundador & Arquitecto
              </p>

              {/* Name */}
              <p
                className={`${orbitron.className} text-[24px] sm:text-[34px] text-[#FFB74A] mb-6`}
              >
                The Alchemist
              </p>

              {/* Description */}
              <div
                className={`${workSans.className} text-gray-300 text-[16px] sm:text-[18px] leading-relaxed space-y-4 mb-10 max-w-[720px] mx-auto`}
              >
                <p>
                  CubaNex es desarrollado por un colectivo descentralizado y
                  enfocado en la preservación de la privacidad.
                </p>

                <p>
                  El fundador permanece anónimo bajo el alias &quot;The
                  Alchemist&quot; como una disciplina de neutralidad, silencio e
                  intención, alineada con los principios de la
                  descentralización.
                </p>
              </div>

              {/* GitHub Button */}
              <a
                href="https://github.com/CubaNexLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-[#1F2E47] bg-[#030E1C] hover:border-[#00DED4] hover:bg-[#061A2F] transition-all duration-300 text-white"
              >
                <Github className="w-5 h-5" />
                <span className={`${workSans.className} font-medium`}>
                  CubaNexLabs
                </span>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;
