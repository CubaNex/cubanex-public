// app/page.js (Next.js 13+ with App Router)

"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/last.jpeg"
            className="w-full h-full object-cover opacity-70"
            alt="Hero Background"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Empowering Cuba with Next-Generation Blockchain Technology
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Cubanex is a forward-looking blockchain ecosystem designed to
            enhance energy sustainability, boost the digital economy, and
            support Cuba’s growth through advanced decentralized tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CUBANEX ================= */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why CubaNex?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            A sustainable blockchain ecosystem supporting Cuba’s clean energy,
            transportation modernization, and long-term digital growth.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">Green Energy Ready</h3>
              <p className="text-gray-400 text-sm">
                Built to support renewable power usage, energy tokenization, and
                eco-friendly development.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">
                Future-Proof Digital Economy
              </h3>
              <p className="text-gray-400 text-sm">
                Powering decentralized applications that contribute to
                sustainable economic growth.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">
                Modern Infrastructure
              </h3>
              <p className="text-gray-400 text-sm">
                Developed to support mobility, transport upgrades, and
                data-integrated infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY SECTION ================= */}
      <section className="py-24 bg-black px-6">
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
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        Driving Cuba's sustainable Web3 growth with innovative blockchain
        solutions.
      </footer>
    </main>
  );
}
