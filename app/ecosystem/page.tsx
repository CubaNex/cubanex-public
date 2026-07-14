import { Cpu, Brain, Layers, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function EcosystemPage() {
  return (
    <main className="bg-[#000] min-h-screen px-4 text-white font-work">
      {/* HERO */}
      <ScrollReveal delay={0.1}>
        <section className="max-w-5xl mx-auto pt-32 text-center">
          <h1 className="text-4xl sm:text-5xl font-orbitron tracking-tight">
            <span className="text-[#22E6E3]">Ecosystem</span>{" "}
            <span className="text-white">Overview</span>
          </h1>

          <div className="mt-14 relative flex justify-center w-full max-w-4xl mx-auto aspect-[16/9]">
            <div className="absolute inset-0 bg-[#22E6E3]/5 blur-[100px] rounded-full animate-ambient-pulse"></div>
            <Image
              src="/7-2-26/es.jpeg"
              alt="CubaNex Ecosystem Visualization"
              fill
              priority quality={100}
              className="mobile-focus-top"
              style={{ objectPosition: "center 20%" }}
            />
          </div>

          <p className="mt-12 text-[15px] leading-7 text-[#9CB4D8] max-w-4xl mx-auto">
            The CubaNex ecosystem is designed as a living network. It expands in deliberate phases, starting from secure baseline infrastructure and moving toward autonomous, decentralized systems. Every integration serves to increase the collective intelligence and capability of the framework.
          </p>
        </section>
      </ScrollReveal>

      {/* FUTURE UTILITIES */}
      <section className="max-w-6xl mx-auto py-24 sm:py-32">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-orbitron">
              <span className="text-[#316CFF]">Future </span>
              <span className="text-white">Utilities</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              icon: Cpu,
              title: "Autonomous Tools",
              text: "CubaNex will introduce on-chain tools and automated functions designed to support transparency, security, and decentralized participation.",
            },
            {
              icon: Brain,
              title: "AI-Assisted Features",
              text: "Future iterations may incorporate AI-driven analytical modules, pattern-recognition systems, and adaptive intelligence layers designed to enhance user experience and ecosystem efficiency.",
            },
            {
              icon: Layers,
              title: "Modular Architecture",
              text: "CubaNex is structured to allow additional layers, integrations, and utilities to be added over time without disrupting the core token design.",
            },
            {
              icon: Code2,
              title: "Developer Expansion",
              text: "Open-source documentation and public repositories will support community contributions, integrations, and innovation.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div
                tabIndex={0}
                className="
                group
                h-full
                rounded-2xl
                border border-[#0F1E3A]
                bg-gradient-to-b from-[#071326] to-[#050B16]
                p-6
                transition-all duration-400
                hover:border-[#22E6E3]/40
                hover:-translate-y-1.5
                hover:shadow-[0_12px_40px_rgba(34,230,227,0.1)]
                active:border-[#22E6E3]/40
                active:scale-[0.97]
                focus-within:border-[#22E6E3]/40
                outline-none
              "
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="relative">
                    <div
                      className="
                      absolute inset-0 rounded-xl
                      bg-[#22E6E3]/25 blur-lg
                      opacity-0
                      group-hover:opacity-100
                      group-active:opacity-100
                      group-focus-within:opacity-100
                      transition-opacity
                    "
                    />
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-xl bg-[#22E6E3]/10 text-[#22E6E3]">
                      <item.icon size={26} />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#9CB4D8]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-24 sm:py-32">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron">
              The Living <span className="text-[#00D2FF]">Framework</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Intelligence */}
          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-white/5 bg-[#04071d]/80 p-8 shadow-lg text-center backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,210,255,0.1)]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-6 bg-[#00D2FF] rounded-full inline-block" />
                Intelligence
              </h3>
              <p className="text-[#9CB4D8] leading-relaxed text-sm">
                Systems designed to process, adapt, and evolve. CubaNex utilizes automation and logic to ensure frictionless operation.
              </p>
            </div>
          </ScrollReveal>

          {/* Participation */}
          <ScrollReveal delay={0.2}>
            <div className="h-full rounded-2xl border border-white/5 bg-[#04071d]/80 p-8 shadow-lg text-center backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(49,108,255,0.1)]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-6 bg-[#316CFF] rounded-full inline-block" />
                Participation
              </h3>
              <p className="text-[#9CB4D8] leading-relaxed text-sm">
                Decentralized nodes of human and machine interaction. The network grows stronger with every connected participant.
              </p>
            </div>
          </ScrollReveal>

          {/* Infrastructure */}
          <ScrollReveal delay={0.3}>
            <div className="h-full rounded-2xl border border-white/5 bg-[#04071d]/80 p-8 shadow-lg text-center backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(153,69,255,0.1)]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-6 bg-[#9945FF] rounded-full inline-block" />
                Infrastructure
              </h3>
              <p className="text-[#9CB4D8] leading-relaxed text-sm">
                The foundational layer. Immutable, verified contracts running on a secure, globally distributed blockchain.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-32" />
    </main>
  );
}
