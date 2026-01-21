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
        <div className="flex px-4 pt-[120px] pb-[80px] sm:py-[150px] flex-col gap-2 items-center justify-center abhBg">
          <h1
            className={`${orbitron.className} text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
          >
            About <span className="text-[#FFB74A]"> CubaNex</span>
          </h1>

          <p
            className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300 mx-auto mb-4`}
          >
            CubaNex is a decentralized AI-powered digital asset built on BNB
            Chain. The project focuses on creating an adaptive, secure, and
            transparent ecosystem that supports the development of autonomous
            tools and future intelligent systems.
          </p>
          <p
            className={`${workSans.className} max-w-[750px] text-center text-[14px] sm:text-[18px] text-[#FFB74A]/80 mx-auto mb-8 font-medium`}
          >
            CubaNex operates on the Binance Smart Chain as a decentralized digital asset with future modular AI utilities.
          </p>
        </div>
      </ScrollReveal>

      <section className="relative w-full  pt-24 px-4">
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
                <p className="text-gray-400 leading-relaxed text-md">
                  To build a secure, adaptive, and decentralized ecosystem that
                  integrates blockchain infrastructure with emerging AI-driven
                  technologies to support scalable digital transformation and
                  create new pathways for community-driven innovation.
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
                <p className="text-gray-400 leading-relaxed text-md">
                  CubaNex envisions a future where decentralized intelligence
                  expands human potential by enabling transparent systems,
                  autonomous tools, and meaningful digital experiences
                  accessible to all.
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
            Our <span className="text-[#00DED4]">Value</span>
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
              title: "Cuban Heritage",
              text: "Rooted in the rich culture, resilience, and innovative spirit of Cuba.",
            },
            {
              color: "yellow",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4m4-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 100-6 3 3 0 000 6z"
                />
              ),
              title: "Community First",
              text: "Built with transparency, unity, and shared prosperity.",
            },
            {
              color: "emerald",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.7 2.5 14.3 0 18M12 3c-2.5 2.7-2.5 14.3 0 18"
                />
              ),
              title: "Global Vision",
              text: "Connecting Cuba to the world through decentralized innovation.",
            },
            {
              color: "blue",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l1.5 4L11 8.5l-4.5 1.5L5 14l-1.5-4L-1 8.5l4.5-1.5L5 3zM19 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
                />
              ),
              title: "Sustainable Future",
              text: "Pioneering eco-friendly blockchain for a green economy.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="p-8 border border-[#FFB74A]/17 h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
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
                  href="https://github.com/CubaNex"
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
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Page;
