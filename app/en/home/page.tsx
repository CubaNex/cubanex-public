"use client";

import { textContent } from "@/constants/contents";

export default function Home() {
  const t = textContent.eng;

  return (
    <main className="relative overflow-hidden">
      {/* ===== Background Decoration ===== */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* ===== HERO ===== */}
      <section className="pt-[120px] px-6 text-center max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">{t.paragraph}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder={t.placeholder}
            className="border border-gray-400 bg-transparent text-white px-4 py-2 rounded-md w-full sm:w-auto"
          />

          <button
            className="px-6 py-2 rounded-full text-white font-medium w-full sm:w-auto"
            style={{
              background:
                "linear-gradient(90deg, #C766EF 0%, #7928D2 51%, #2B0C52 100%)",
            }}
          >
            {t.button}
          </button>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="mt-20 max-w-3xl mx-auto px-6 relative z-10 leading-relaxed text-gray-100">
        <div
          className="mb-6 text-lg"
          dangerouslySetInnerHTML={{ __html: t.section }}
        />

        <blockquote className="italic mb-6 border-l-4 pl-4 border-purple-400 text-gray-300">
          {t.verse}
        </blockquote>

        <p className="mb-6 text-lg">{t.story}</p>

        <blockquote className="font-semibold border-l-4 border-yellow-400 pl-4 text-lg">
          {t.quote}
        </blockquote>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="mt-24 py-16 px-6 bg-[#0f0f16] relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-6 bg-black/30 border border-gray-800 rounded-2xl shadow-lg backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
              <p className="text-gray-300 text-sm">
                This is a placeholder description. Replace it anytime.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>

        <div className="space-y-8">
          {["Phase 1", "Phase 2", "Phase 3", "Phase 4"].map((phase, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-700 bg-black/20 rounded-xl backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{phase}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Milestone A</li>
                <li>Milestone B</li>
                <li>Milestone C</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 text-center px-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 relative z-10">
        <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-8">Be part of something bigger.</p>

        <button
          className="px-8 py-3 rounded-full text-white font-medium text-lg"
          style={{
            background:
              "linear-gradient(90deg, #C766EF 0%, #7928D2 51%, #2B0C52 100%)",
          }}
        >
          {t.button}
        </button>
      </section>
    </main>
  );
}
