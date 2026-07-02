import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import Image from "next/image";
import { Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <ScrollReveal delay={0.1}>
        <section className="max-w-5xl mx-auto pt-28 px-4 text-center">
          <h1 className={`${orbitron.className} text-4xl sm:text-5xl tracking-tight mb-6`}>
            <span className="text-white">About</span>{" "}
            <span className="text-[#00D2FF]">CubaNex</span>
          </h1>

          <div className="mt-12 relative flex justify-center">
            <div className="absolute inset-0 bg-[#00D2FF]/5 blur-[100px] rounded-full"></div>
            <img
              src="/7-2-26/about-7-2-26.jpeg"
              alt="CubaNex About Visualization"
              className="relative z-10 w-full max-w-4xl rounded-2xl border border-[#00D2FF]/20 shadow-2xl shadow-[#00D2FF]/10"
            />
          </div>

          <p className={`${workSans.className} mt-12 text-[15px] leading-7 text-[#9CB4D8] max-w-4xl mx-auto`}>
            CubaNex is not merely a token; it is the genesis of an AI-native digital civilization. Born from a vision of decentralized intelligence, it bridges human participation with autonomous systems to build a conscious infrastructure for the future.
          </p>
          <p className={`${workSans.className} mt-4 text-[14px] sm:text-[16px] text-[#00D2FF]/80 max-w-4xl mx-auto font-medium`}>
            An evolving framework operating on BNB Smart Chain.
          </p>
        </section>
      </ScrollReveal>

      <section className="relative w-full pt-8 sm:pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <ScrollReveal>
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-14">
              Mission & <span className="text-cyan-400">Vision</span>
            </h2>
          </ScrollReveal>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#07131f] to-[#030c14] p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">◎</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                </div>
                <p className="text-[#9CB4D8] leading-relaxed text-md">
                  To build a conscious digital ecosystem where blockchain architecture and artificial intelligence converge. CubaNex provides the foundational layer for transparent participation, autonomous development, and scalable digital sovereignty.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.2}>
              <div className="h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#07131f] to-[#030c14] p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">◉</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Vision</h3>
                </div>
                <p className="text-[#9CB4D8] leading-relaxed text-md">
                  A future where digital infrastructure operates as a living entity—empowering individuals through decentralized intelligence, unbroken connection, and adaptive frameworks that evolve with human alignment.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Technology */}
          <ScrollReveal>
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#07131f] to-[#030c14] p-8 mb-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-cyan-400 text-lg">⚙</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Technology</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-md">
                CubaNex is built on the Binance Smart Chain using a secure
                BEP-20 token standard. The ecosystem leverages established
                blockchain frameworks combined with forward-looking AI concepts,
                allowing the project to evolve and expand as new technologies
                and community contributions emerge.
              </p>
            </div>
          </ScrollReveal>

          {/* Transparency */}
          <ScrollReveal>
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#07131f] to-[#030c14] p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-cyan-400 text-lg">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Transparency
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-md">
                CubaNex is an open, decentralized ecosystem supported by public
                smart contracts, open-source repositories, and accessible
                documentation. The project emphasizes clarity, security, and
                long-term development without reliance on centralized
                identities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BACKGROUND */}
      <Image
        src="/abvbg.svg"
        alt="Hero Background"
        width={800}
        height={800}
        className="w-full absolute top-[200px] left-0 h-full object-cover opacity-80 -z-10"
      />

      {/* VALUE SECTION */}
      <section className="pt-24">
        <ScrollReveal>
          <h2
            className={`${orbitron.className} text-center text-[30px] sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-12`}
          >
            The <span className="text-[#316CFF]">Foundation</span>
          </h2>
        </ScrollReveal>

        <div className="relative pb-20 z-10 px-6 grid max-w-[1300px] text-white mx-auto gap-8 md:grid-cols-4">
          {[
            {
              color: "cyan",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              ),
              title: "Heritage",
              text: "Rooted in the culture, resilience, and ingenuity of Cuba.",
            },
            {
              color: "blue",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
              title: "Intelligence",
              text: "Empowered by systems that learn, adapt, and scale.",
            },
            {
              color: "purple",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.7 2.5 14.3 0 18M12 3c-2.5 2.7-2.5 14.3 0 18"
                />
              ),
              title: "Decentralization",
              text: "Built on open, trustless networks that distribute power.",
            },
            {
              color: "cyan",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l1.5 4L11 8.5l-4.5 1.5L5 14l-1.5-4L-1 8.5l4.5-1.5L5 3zM19 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
                />
              ),
              title: "Evolution",
              text: "Designed to expand continuously without losing purpose.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="p-8 border border-[#00D2FF]/17 h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
                <div className={`w-12 h-12 mb-5 rounded-xl bg-${item.color}-500/20 flex items-center justify-center`}>
                  <svg
                    className={`w-6 h-6 text-${item.color}-400`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* VISION SECTION */}
        <ScrollReveal>
          <div
            className={`${workSans.variable} relative z-10 ${orbitron.variable} w-full flex justify-center pt-6 pb-16 px-4 bg-[#060b12]`}
          >
            <div className="w-full max-w-5xl border border-[#1b2733] rounded-xl p-10 text-center bg-[#0b111b]">
              <h2
                id="roadmap"
                className={`${orbitron.className} text-white text-2xl md:text-3xl font-bold mb-10`}
              >
                Future Direction
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {/* Phase 1 */}
                <div>
                  <h3
                    className={`${orbitron.className} text-[#16e0ff] text-2xl font-bold mb-3`}
                  >
                    Phase 1: Foundation
                  </h3>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">
                    Establish the brand system, deploy the core smart contract, and form the initial community network.
                  </p>
                </div>

                {/* Phase 2 */}
                <div>
                  <h3
                    className={`${orbitron.className} text-[#316CFF] text-2xl font-bold mb-3`}
                  >
                    Phase 2: Intelligence
                  </h3>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">
                    Integrate AI-assisted tools and develop the primary ecosystem applications.
                  </p>
                </div>

                {/* Phase 3 */}
                <div>
                  <h3
                    className={`${orbitron.className} text-[#9945FF] text-2xl font-bold mb-3`}
                  >
                    Phase 3: Expansion
                  </h3>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">
                    Scale globally, establishing decentralized governance and broader participation models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* TEAM SECTION */}
        <ScrollReveal>
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
                  className={`${orbitron.className} text-[24px] sm:text-[34px] text-[#00D2FF] mb-6`}
                >
                  El Alquimista
                </p>

                {/* Description */}
                <div
                  className={`${workSans.className} text-[#9CB4D8] text-[16px] sm:text-[18px] leading-relaxed space-y-4 mb-10 max-w-[720px] mx-auto`}
                >
                  <p>
                    CubaNex is developed by a decentralized collective.
                  </p>

                  <p>
                    The project's architect operates under the alias "El Alquimista" to maintain focus on the code, the ecosystem, and the community, rather than individual identity.
                  </p>
                </div>

                {/* GitHub Button */}
                <a
                  href="https://github.com/CubaNex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-[#1F2E47] bg-[#030E1C] hover:border-[#00DED4] hover:bg-[#061A2F] transition-all duration-300 text-white"
                >
                  <Github className="w-5 h-5" />
                  <span className={`${workSans.className} font-medium`}>
                    Labs
                  </span>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Page;
