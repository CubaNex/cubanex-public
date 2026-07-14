import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
import VipForm from "@/components/VipForm";
import { MessageCircle, Send, Twitch, TwitchIcon, Twitter } from "lucide-react";
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
const page = () => {
  return (
    <div className="main relative  bg-[#010813]">
      <ScrollReveal>
        <div className="sm:flex px-4 w-full pt-[140px] pb-[40px] sm:pt-[170px] gap-2 items-center justify-center cmbg">
          <div>
            {" "}
            <h1
              className={`${orbitron.className} text-center sm:text-start text-[32px] sm:text-[56px] max-w-[800px]  text-[#fff] font-semibold leading-[1.2em] mb-6`}
            >
              Join the <span className="text-[#316CFF]"> Signal</span>
            </h1>
            <p
              className={`${workSans.className} text-center sm:text-start max-w-[750px]  text-[16px] sm:text-[24px] text-[#9CB4D8] mb-8`}
            >
              The network is active. Connect with participants building the future of decentralized intelligence.
            </p>
          </div>
          <Image
            alt="community"
            src={"/7-2-26/community-7-2-26.jpeg"}
            width={500}
            height={500}
            priority quality={100}
            className="hidden sm:block rounded-2xl border border-white/10"
          />
          <Image
            alt="community"
            src={"/7-2-26/community-7-2-26.jpeg"}
            width={300}
            height={200}
            priority quality={100}
            className="block mt-[20px] mx-auto sm:hidden rounded-2xl border border-white/10"
          />
        </div>
      </ScrollReveal>
      <section className="py-24 sm:py-32">
        <ScrollReveal>
          <h2
            className={`${orbitron.className} text-center text-[30px] sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
          >
            Open <span className="text-[#316CFF]">Channels</span>
          </h2>

          <VipForm />
        </ScrollReveal>
        <div className="px-6 pb-14 pt-24 grid text-white max-w-[1100px] mx-auto gap-10 md:grid-cols-2">
          {/* 2 - Twitter / X */}
          <ScrollReveal delay={0.1}>
            <a
              href="https://x.com/CubaNexOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex items-center justify-center border border-white/[0.1] w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl bg-[#04071d] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,210,255,0.12)] hover:border-[#00D2FF]/30 transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 px-6">
                  <div className="w-full flex justify-center mb-4">
                    <Twitter size={56} className="mx-auto" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-white text-center text-[16px] sm:text-3xl relative z-10 mt-4 font-bold transition duration-200 flex items-center justify-center gap-3">
                    <span className="w-1 h-5 sm:h-7 bg-[#00D2FF] rounded-full inline-block" />
                    Twitter / X
                  </h2>
                  <p className="text-[16px] sm:text-sm relative z-10 mt-4 text-center transition duration-200 text-[#E4ECFF]">
                    Follow us for real-time updates and announcements
                    <br />
                    <br />
                    <span className="text-[#00D2FF] font-medium">@CubaNex</span>
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.12) 0%, transparent 70%), radial-gradient(rgba(0, 210, 255, 0.15) 1px, transparent 1px)',
                    backgroundSize: '100% 100%, 18px 18px'
                  }}
                />
              </div>
            </a>
          </ScrollReveal>

          {/* 3 - Telegram */}
          <ScrollReveal delay={0.2}>
            <a
              href="https://t.me/CubaNexOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex items-center justify-center border border-white/[0.1] w-full mx-auto p-2 sm:p-4 relative h-auto py-4 min-h-[14rem] sm:h-[18rem] rounded-3xl bg-[#04071d] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,210,255,0.12)] hover:border-[#00D2FF]/30 transition-all duration-700 cursor-pointer outline-none" tabIndex={0}>
                <div className="relative z-20 px-6">
                  <div className="w-full flex justify-center mb-4">
                    <Send size={56} className="mx-auto" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-white text-center text-[16px] sm:text-3xl relative z-10 mt-4 font-bold transition duration-200 flex items-center justify-center gap-3">
                    <span className="w-1 h-5 sm:h-7 bg-[#00D2FF] rounded-full inline-block" />
                    Telegram
                  </h2>
                  <p className="text-[16px] sm:text-sm relative z-10 mt-4 text-center transition duration-200 text-[#E4ECFF]">
                    Join our active community and chat with the team
                    <br />
                    <br />
                    <span className="text-[#00D2FF] font-medium">Join Telegram</span>
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.12) 0%, transparent 70%), radial-gradient(rgba(0, 210, 255, 0.15) 1px, transparent 1px)',
                    backgroundSize: '100% 100%, 18px 18px'
                  }}
                />
              </div>
            </a>
          </ScrollReveal>

          {/* 4 */}
          {/* <a href="#" rel="noopener noreferrer" className="block">
            <div className="p-8 border border-[#00D2FF]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#00D2FF]/40">
              <MessageCircle
                size={56}
                className="mx-auto mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl font-semibold mb-3">Discord</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with holders and participate in governance
                <br />
                <br />
                <span className="text-[#00D2FF] font-medium">Join Discord</span>
              </p>
            </div>
          </a> */}
        </div>

        <ScrollReveal>
          <div className="w-full flex justify-center py-16 px-4 bg-[#060b12]">
            <div className="w-full max-w-[1000px] border border-[#1b2733] rounded-xl p-10 text-center bg-[#04071d]">
              <h2
                className={`${orbitron.className} text-white text-[32px] md:text-[40px] font-bold mb-6`}
              >
                The First <span className="text-[#00D2FF]">Circle</span>
              </h2>
              <p className={`${workSans.className} text-[#9CB4D8] text-[16px] max-w-[700px] mx-auto text-center leading-relaxed mb-12`}>
                CubaNex is not built by employees; it is built by participants. The first circle of contributors has laid the infrastructure. The next circles will expand it.
              </p>

              <h3 className={`${orbitron.className} text-white text-[24px] font-semibold mb-8`}>
                What We <span className="text-[#316CFF]">Stand For</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-6 border border-white/5 bg-[#0a1128] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,210,255,0.08)]">
                  <h4 className={`${orbitron.className} text-[#00D2FF] text-lg font-bold mb-2`}>Alignment over noise</h4>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">Focus on building systems of value rather than engaging in empty hype.</p>
                </div>
                <div className="p-6 border border-white/5 bg-[#0a1128] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(49,108,255,0.08)]">
                  <h4 className={`${orbitron.className} text-[#316CFF] text-lg font-bold mb-2`}>Code over speculation</h4>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">Prioritize robust infrastructure, transparent contracts, and functional technology.</p>
                </div>
                <div className="p-6 border border-white/5 bg-[#0a1128] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(153,69,255,0.08)]">
                  <h4 className={`${orbitron.className} text-[#9945FF] text-lg font-bold mb-2`}>Evolution over stagnation</h4>
                  <p className="text-[#9CB4D8] text-sm leading-relaxed">Embrace change. Adaptability is the core requirement for longevity in decentralized systems.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="h-32" />
      </section>
    </div>
  );
};

export default page;
