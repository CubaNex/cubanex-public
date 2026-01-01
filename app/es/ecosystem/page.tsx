import { Cpu, Brain, Layers, Code2 } from "lucide-react";

export default function EcosystemPage() {
  return (
    <main className="bg-[#000] min-h-screen px-4 text-white font-work">
      {/* HERO */}
      <section className="max-w-5xl mx-auto pt-28 text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl font-orbitron tracking-tight">
          <span className="text-[#22E6E3]">Ecosystem</span>{" "}
          <span className="text-white">Overview</span>
        </h1>

        <p className="mt-6 text-[15px] leading-7 text-[#9CB4D8] max-w-4xl mx-auto">
          CubaNex is a decentralized digital asset ecosystem built on BNB Chain.
          The project integrates autonomous on-chain tools, emerging AI-assisted
          technologies, and community-driven interaction models to support
          scalable digital transformation. Over time, the CubaNex ecosystem will
          expand to include adaptive intelligence components, automated
          utilities, and modular frameworks designed to operate securely and
          transparently on the blockchain.
        </p>
      </section>

      {/* FUTURE UTILITIES */}
      <section className="max-w-6xl mx-auto mt-24">
        <div className="text-center animate-fade-up">
          <h2 className="text-3xl font-orbitron">
            <span className="text-white">Future </span>
            <span className="text-[#F4B33D]">Utilities</span>
          </h2>
          <p className="mt-2 text-sm text-[#7F95B7]">High-Level Overview</p>
        </div>

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
            <div
              key={i}
              tabIndex={0}
              className="
                group
                rounded-2xl
                border border-[#0F1E3A]
                bg-gradient-to-b from-[#071326] to-[#050B16]
                p-6
                transition-all duration-300
                hover:border-[#22E6E3]/40
                hover:-translate-y-1
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
          ))}
        </div>
      </section>

      <div className="h-32" />
    </main>
  );
}
