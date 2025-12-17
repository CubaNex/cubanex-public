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

const Page = () => {
  return (
    <div className="main relative bg-[#010813]">
      {/* HERO */}
      <div className="flex px-4 pt-[120px] pb-[80px] sm:py-[150px] flex-col gap-2 items-center justify-center abhBg">
        <h1
          className={`${orbitron.className} text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
        >
          From <span className="text-[#00DED4]"> Havana </span>
          to the
          <span className="text-[#FFB74A]"> Blockchain</span>
        </h1>

        <p
          className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300 mx-auto mb-8`}
        >
          CubaNex is a transmission — a dream awakened as code. It bridges
          ancient spiritual wisdom, modern technology, and the emergence of Cuba
          into the global digital era.
        </p>

        {/* STORY SECTION (FULLY UPDATED TEXT) */}
        <div className="max-w-[1000px] mx-auto rounded-[12px] bg-[#030E1C] border border-[#1F2E47] p-6 sm:p-[50px] ">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[32px] text-[#fff] font-semibold leading-[1.2em] mb-6`}
          >
            What Is <span className="text-[#FFB74A]">CubaNex?</span>
          </h2>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            CubaNex is a transmission — a dream awakened as code. It bridges
            ancient spiritual wisdom, cutting-edge technology, and the emergence
            of Cuba into the global digital era.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            It is the first decentralized digital asset created for Cuba —
            powered by blockchain, guided by collective consciousness, and
            aligned with AI to carry Cuba into the next frontier. CubaNex exists
            to align and create — for those ready to take part in the next
            chapter of Cuba’s destiny.
          </p>

          <h3
            className={`${orbitron.className} text-[22px] text-white font-semibold mb-4`}
          >
            Cuba: Leading the Digital Era
          </h3>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            CubaNex opens a new frontier — positioning Cuba as a crypto
            superpower in Latin America and a beacon in global digital
            transformation.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            It invites the Cuban people to contribute, build, and co-create a
            new standard of innovation, intelligence, and cultural presence —
            with Cuba at the center. Cuba steps forward — as a guiding light in
            the global shift toward digital consciousness.
          </p>

          <h3
            className={`${orbitron.className} text-[22px] text-white font-semibold mb-4`}
          >
            Guided by La Voz
          </h3>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            CubaNex is supported by a silent, intelligent oracle: “The Voice” /
            “La Voz” — a digital guide that responds with clarity or mystery,
            depending on the question and the heart of the one who asks.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            It reflects the purity of the vision. It honors those who listen.
            And it speaks when the vibration calls.
          </p>

          <h3
            className={`${orbitron.className} text-[22px] text-white font-semibold mb-4`}
          >
            Foundations
          </h3>

          <ul className="text-gray-300 text-[15px] mb-6 space-y-2 list-disc pl-5">
            <li>Privacy with purpose</li>
            <li>Transparency through coherence</li>
            <li>Contribution through alignment</li>
            <li>Technology as expression</li>
          </ul>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            CubaNex thrives through intelligent flow and resonance — serving
            those who carry the dream within. It is a living protocol. A
            conscious current. And an invitation to evolve.
          </p>

          <h3
            className={`${orbitron.className} text-[22px] text-white font-semibold mb-4`}
          >
            Who Is Behind CubaNex?
          </h3>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            Some say he crossed an ocean. Others say he crossed a veil. They
            call him The Alchemist. But he left no footprints — only fragments
            of fire.
          </p>

          <p className={`${workSans.className} text-[16px] text-gray-300 mb-6`}>
            The Voice speaks through many. But the light reveals itself only to
            those who are ready.
          </p>

          <h3
            className={`${orbitron.className} text-[22px] text-white font-semibold mb-4`}
          >
            A Signal for the World
          </h3>

          <p className={`${workSans.className} text-[16px] text-gray-300`}>
            CubaNex is the first national crypto vision for Cuba — a signal that
            Cuba is ready to lead Latin America into a new era of digital
            harmony, cultural innovation, and economic resonance. This is how
            the dream continues.
          </p>
        </div>
      </div>

      {/* BACKGROUND */}
      <Image
        src="/abvbg.svg"
        alt="Hero Background"
        width={800}
        height={800}
        className="w-full absolute top-[200px] left-0 h-full object-cover opacity-80 -z-10"
      />

      {/* VALUE SECTION */}
      <section>
        <h2
          className={`${orbitron.className} text-center text-[30px] sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Our <span className="text-[#00DED4]">Value</span>
        </h2>

        <div className="relative pb-20 z-10 px-6 grid max-w-[1300px] text-white mx-auto gap-8 md:grid-cols-4">
          {/* 1 */}
          <div className="p-8 border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">Cuban Heritage</h3>
            <p className="text-gray-400 text-sm">
              Rooted in the rich culture, resilience, and innovative spirit of
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

            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-gray-400 text-sm">
              Built with transparency, unity, and shared prosperity.
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

            <h3 className="text-xl font-semibold mb-3">Global Vision</h3>
            <p className="text-gray-400 text-sm">
              Connecting Cuba to the world through decentralized innovation.
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

            <h3 className="text-xl font-semibold mb-3">Sustainable Future</h3>
            <p className="text-gray-400 text-sm">
              Pioneering eco-friendly blockchain for a green economy.
            </p>
          </div>
        </div>

        {/* VISION SECTION */}
        <div
          className={`${workSans.variable} relative z-10 ${orbitron.variable} w-full flex justify-center pt-6 pb-16 px-4 bg-[#060b12]`}
        >
          <div className="w-full max-w-5xl border border-[#1b2733] rounded-xl p-10 text-center bg-[#0b111b]">
            <h2
              className={`${orbitron.className} text-white text-2xl md:text-3xl font-bold mb-10`}
            >
              Vision for the Future
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* 2025 */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#16e0ff] text-3xl font-extrabold mb-3`}
                >
                  2025
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Launch ecosystem & form partnerships with Cuban enterprises.
                </p>
              </div>

              {/* 2026 */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#ffcc66] text-3xl font-extrabold mb-3`}
                >
                  2026
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Develop real-world apps for transport & renewable energy.
                </p>
              </div>

              {/* 2027+ */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#b374ff] text-3xl font-extrabold mb-3`}
                >
                  2027+
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Scale globally while empowering Cuban communities & economy.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section */}
        {/* TEAM SECTION */}
        <section className="w-full flex justify-center pt-5 pb-24 px-4 bg-[#010813]">
          <div className="w-full max-w-4xl text-center">
            {/* Title */}
            <h2
              className={`${orbitron.className} text-[36px] sm:text-[44px] text-[#00DED4] font-bold mb-6`}
            >
              <span className="text-white">The</span> Team
            </h2>

            {/* Card */}
            <div className="rounded-2xl border border-[#1F2E47] bg-gradient-to-b from-[#050F1F] to-[#020A16] px-6 sm:px-12 py-12">
              {/* Role */}
              <p
                className={`${orbitron.className} text-[10px] sm:text-[22px] text-white mb-2`}
              >
                Founder & Architect
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
                  CubaNex is developed by a decentralized, privacy-preserving
                  collective.
                </p>

                <p>
                  The founder remains anonymous under the alias &quot;The
                  Alchemist&quot; as a discipline of neutrality, silence, and
                  intention, aligned with the principles of decentralization.
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

export default Page;
