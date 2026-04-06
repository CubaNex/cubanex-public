import React from "react";
import { Orbitron, Work_Sans } from "next/font/google";
import { Car, Battery, Zap, MapPin, ArrowLeft } from "lucide-react";
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

export default function TransportationPage() {
  return (
    <main className="bg-[#010813] min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/transportation.jpg"
            alt="Transportation Utility"
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
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#316CFF]">Transportation</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className={`${workSans.className} text-[18px] sm:text-[22px] text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
              Powering a network of electric vehicle charging stations, enabling clean and efficient mobility for the next generation of urban infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
          {[
            {
              icon: Zap,
              title: "Instant Charging",
              description: "High-speed EV charging stations powered by blockchain-verified energy transactions."
            },
            {
              icon: MapPin,
              title: "Global Network",
              description: "A growing ecosystem of smart charging points across urban and suburban corridors."
            },
            {
              icon: Battery,
              title: "Efficient Energy",
              description: "Optimized energy distribution using AI-assisted demand forecasting to reduce waste."
            }
          ].map((feature, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 4)}>
              <div className="bg-[#081420]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#00D2FF]/30 transition shadow-2xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF] mb-6">
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
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[#00D2FF]/5 animate-pulse" />
                <Image
                  src="/transportation.jpg"
                  alt="Infrastructure"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <h2 className={`${orbitron.className} text-3xl sm:text-4xl font-bold`}>
                  Charging as a <span className="text-[#00D2FF]">Service</span>
                </h2>
                <div className={`${workSans.className} space-y-6 text-gray-300`}>
                  <p>
                    CubaNex integrates with leading electric vehicle infrastructure providers to create a seamless, decentralized charging experience. By leveraging blockchain technology, we ensure that every transaction is transparent, secure, and instant.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      <span>Real-time availability tracking across the network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      <span>Smart load balancing for grid stability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      <span>Automated micropayments via CNEX token</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#00D2FF]/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D2FF]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className={`${orbitron.className} text-3xl sm:text-5xl font-bold mb-8`}>
              Ready for the <span className="text-[#00D2FF]">Future?</span>
            </h2>
            <p className={`${workSans.className} text-xl text-gray-300 mb-12 max-w-2xl mx-auto`}>
              Join the CubaNex ecosystem today and witness how blockchain is revolutionizing modern mobility.
            </p>
            <Link href="/community">
              <button className={`${workSans.className} px-10 py-4 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#316CFF] text-white font-bold hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300`}>
                Get Started with CNEX
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
