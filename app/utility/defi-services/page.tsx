import React from "react";
import { Orbitron, Work_Sans } from "next/font/google";
import { Wallet, PieChart, TrendingUp, HandCoins, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DeFiServicesPage() {
  return (
    <main className="bg-[#010813] min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/defi-services.jpg"
            alt="DeFi Services Utility"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010813]/20 via-transparent to-[#010813]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal delay={0.1}>
            <Link 
              href="/tokenomics" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 hover:bg-white/10 transition"
            >
              <ArrowLeft size={16} />
              Back to Utility
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className={`${orbitron.className} text-[36px] sm:text-[64px] lg:text-[80px] font-bold leading-tight mb-6`}>
              DeFi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]">Services</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className={`${workSans.className} text-[18px] sm:text-[22px] text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
              Access decentralized finance tools—lending, saving, staking, and yield farming—all powered by the transparency of blockchain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
          {[
            {
              icon: HandCoins,
              title: "Smart Lending",
              description: "Borrow or lend assets directly without intermediaries through audited smart contracts."
            },
            {
              icon: TrendingUp,
              title: "Yield Farming",
              description: "Put your assets to work across the ecosystem to earn rewards and maximize your portfolio growth."
            },
            {
              icon: Wallet,
              title: "Simple Staking",
              description: "Stake CNEX tokens with one tap to secure the network and enjoy passive rewards."
            }
          ].map((feature, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 4)}>
              <div className="bg-[#081420]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#F59E0B]/30 transition shadow-2xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className={`${orbitron.className} text-xl font-bold mb-4`}>{feature.title}</h3>
                <p className={`${workSans.className} text-gray-400 leading-relaxed`}>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <h2 className={`${orbitron.className} text-3xl sm:text-4xl font-bold`}>
                  Financial <span className="text-[#F59E0B]">Freedom</span>
                </h2>
                <div className={`${workSans.className} space-y-6 text-gray-300`}>
                  <p>
                    CubaNex DeFi services remove traditional barriers to entry, giving everyone access to advanced financial instruments previously reserved forinstitutional players. Your keys, your assets, your future.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>Permissionless access to global liquidity pools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>Transparent, automated risk assessment systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>Seamless integration with leading hardware wallets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                <Image
                  src="/defi-services.jpg"
                  alt="DeFi Interface"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#F59E0B]/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className={`${orbitron.className} text-3xl sm:text-5xl font-bold mb-8`}>
              Start Your <span className="text-[#F59E0B]">Wealth</span> Journey
            </h2>
            <p className={`${workSans.className} text-xl text-gray-300 mb-12 max-w-2xl mx-auto`}>
              The gates to decentralized finance are open. Harness the potential of CNEX and grow your digital assets.
            </p>
            <Link href="/tokenomics">
              <button className={`${workSans.className} px-10 py-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-bold hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300`}>
                Explore DeFi Dashboard
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
