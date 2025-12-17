"use client";
import { section, div } from "framer-motion/client";
import { FileText } from "lucide-react";

const Whitepaper = () => {
  const tokenUtilities = [
    { en: "Digital value exchange", es: "Intercambio de valor digital" },
    { en: "AI-enhanced interaction", es: "Interacción mejorada por IA" },
    {
      en: "Conscious ecosystem participation",
      es: "Participación consciente en el ecosistema",
    },
  ];

  return (
    <div className="whitepaper-page min-h-screen bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="hero-section pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow-bg absolute inset-0" />
        <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8">
            <FileText className="badge-icon" />
            <span className="badge-text">CUBANEX WHITEPAPER v1.0</span>
          </div>

          <h1 className="whitepaper-title text-4xl md:text-6xl font-display font-bold mb-4">
            NOTHING IS ADDED
          </h1>
          <p className="whitepaper-subtitle text-xl md:text-2xl mb-2">
            ONLY REVEALED
          </p>
          <p className="whitepaper-body text-lg italic mb-8">
            Nada se añade — solo se revela
          </p>

          <div className="card-glass mb-8">
            <p className="whitepaper-title mb-4">
              CubaNex is a self-evolving digital asset built on the Binance
              Smart Chain.
            </p>
            <p className="whitepaper-body italic">
              Un activo digital auto-evolutivo construido sobre Binance Smart
              Chain.
            </p>
          </div>

          <blockquote className="blockquote">
            <p className="mb-2">
              Designed not to instruct, but to awaken intelligence already
              present.
            </p>
            <p>
              Diseñado no para enseñar, sino para despertar la inteligencia ya
              presente.
            </p>
          </blockquote>
          <div className="mt-10 flex justify-center">
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
        </div>
      </section>

      {/* ================= SECTION 01 — ABSTRACT ================= */}
      <section id="section-01" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="whitepaper-title text-5xl font-bold text-primary/30">
              01
            </span>
            <div>
              <h2 className="whitepaper-title text-3xl md:text-4xl font-bold">
                ABSTRACT
              </h2>
              <p className="whitepaper-subtitle text-xl">RESUMEN</p>
            </div>
          </div>

          <p className="whitepaper-body leading-relaxed">
            CubaNex (CNEX) is a self-evolving digital asset built on the Binance
            Smart Chain. Guided by the principle “Nothing Is Added, Only
            Revealed,” it integrates philosophical intention with technical
            precision.
          </p>

          <p className="whitepaper-body leading-relaxed">
            It does not seek to impose direction, but to awaken intelligence
            already present within individuals and communities.
          </p>
        </div>
      </section>

      {/* ================= SECTION 02 — INTRODUCTION ================= */}
      <section
        id="section-02"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#00e0c7]">Purpose</h3>
            <p className="text-[#8badb5] leading-relaxed">
              CubaNex exists to reveal potential, not impose direction. It is
              aligned with timeless principles and modern blockchain
              infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ffd369]">Propósito</h3>
            <p className="text-[#8badb5] leading-relaxed">
              CubaNex existe para revelar el potencial, no para imponer
              dirección.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 03 — CORE PRINCIPLES ================= */}
      <section id="section-03" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-2 text-[#8badb5]">
            <li>Neutrality</li>
            <li>Immutability</li>
            <li>Transparency</li>
            <li>Conscious evolution</li>
            <li>No hierarchy — the work belongs to all</li>
          </ul>
        </div>
      </section>

      {/* ================= SECTION 04 — TOKEN ARCHITECTURE ================= */}
      <section
        id="section-04"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto space-y-4 text-[#8badb5]">
          <p>Network: Binance Smart Chain (BEP-20)</p>
          <p>Symbol: CNEX</p>
          <p>Total Supply: 100,000,000,000 CNEX</p>
          <p>Decimals: 18</p>
          <p>
            Minting exists structurally but will be permanently renounced once
            early infrastructure is complete. Burning may be used as refinement.
          </p>
        </div>
      </section>

      {/* ================= SECTION 05 — AI & GOVERNANCE ================= */}
      <section id="section-05" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#8badb5] leading-relaxed">
            CubaNex integrates a philosophical AI layer focused on recognition
            rather than instruction. Governance emerges organically through
            community interaction without hierarchy or centralized authority.
          </p>
        </div>
      </section>

      {/* ================= SECTION 06 — ROADMAP ================= */}
      <section
        id="section-06"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto text-[#8badb5] space-y-2">
          <p>Phase 1 — Foundation</p>
          <p>Phase 2 — AI Layer Introduction</p>
          <p>Phase 3 — Community Expansion</p>
          <p>Phase 4 — Ecosystem Evolution</p>
          <p>Phase 5 — Legacy Framework</p>
        </div>
      </section>

      {/* ================= SECTION 07 — THE ALCHEMIST ================= */}
      <section id="section-07" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-[#8badb5] space-y-4">
          <p>I AM The Alchemist.</p>
          <p>
            Not a name. Not a face. Not a source. Only an intention — to reveal
            what is already alive.
          </p>
          <p>It adds nothing. It teaches nothing. It only reveals.</p>
          <p className="text-[#ffd369] font-semibold">
            The awakening has begun.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;
