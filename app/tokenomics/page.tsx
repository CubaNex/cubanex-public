import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
import { FileText } from "lucide-react";
import TokenOverviewMini from "@/components/ToverView";
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
    <div className="main w-full relative  bg-[#010813]">
      <div className="flex px-4 min-w-full pt-[120px] pb-[80px] sm:py-[150px] flex-col gap-2 items-center justify-center bg-cover tockenomicBg">
        <h1
          className={`${orbitron.className} w-full text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
        >
          <span className="text-[#FF8F00]"> CNEX</span> Tokenomics
        </h1>

        <p
          className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300 mx-auto `}
        >
          Transparent distribution and real-world utility powering Cuba's
          digital revolution
        </p>
        <div className="pb-14 text-white relative z-100 flex justify-center">
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
        <div className="relative  z-10 px-6 grid max-w-[1000px] text-white mx-auto gap-8 md:grid-cols-3">
          {/* 1 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 16c0 1.657-3.582 3-8 3s-8-1.343-8-3"
                />
              </svg>
            </div>

            <h3 className="text-xl  font-semibold mb-3 items-center">
              100,000,000,000{" "}
            </h3>
            <p className="text-gray-400 text-sm">Total Supply</p>
          </div>
          {/* 2 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V7l7-4z"
                />
              </svg>
            </div>

            <h3 className="text-xl  font-semibold mb-3 items-center">
              Audited{" "}
            </h3>
            <p className="text-gray-400 text-sm">By Leading Firms</p>
          </div>
          {/* 3 */}
          <div className="p-8 border min-w-[266px]  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <div className="w-12 h-12 mb-5 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 11V7a5 5 0 0110 0v4"
                />
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="10"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3 items-center">
              2 Years{" "}
            </h3>
            <p className="text-gray-400 text-sm">Team Token Lock </p>
          </div>
        </div>
        {/* section 3 */}
        <div className="w-full pt-20">
          <h1
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-teal-400">Token</span>{" "}
            <span className="text-white">Distribution</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            {/* Presale */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Presale</span>
                <span className="text-teal-400 text-lg">40%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-teal-400 h-full rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            {/* Liquidity Pool */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Liquidity Pool</span>
                <span className="text-amber-400 text-lg">30%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-amber-400 h-full rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            {/* Development */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Development</span>
                <span className="text-green-400 text-lg">15%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-green-400 h-full rounded-full"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Marketing</span>
                <span className="text-purple-500 text-lg">10%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-purple-500 h-full rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Team Locked - full row under grid */}
          <div className="max-w-md mx-auto px-4 mt-8">
            <div className="bg-[#111726] border border-[#1b2235] rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white text-lg">Team (Locked)</span>
                <span className="text-orange-400 text-lg">5%</span>
              </div>
              <div className="w-full bg-[#1d2537] h-2 rounded-full">
                <div
                  className="bg-orange-400 h-full rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[-60px] sm:mt-[-100px] pb-10">
        <TokenOverviewMini />
      </div>

      {/* real utility */}
      <section className="w-full pb-20 px-4 bg-[#010813]">
        <h2
          className={`${orbitron.className} text-center text-[32px] sm:text-[48px] font-bold text-white mb-14`}
        >
          Real-World <span className="text-[#FFB74A]">Utility</span>
        </h2>

        <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
          {/* 1 — Transportation */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 2.png"
              alt="Transportation"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Transportation
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Power a nationwide network of electric vehicle charging
                stations, enabling clean mobility across Cuba. Blockchain
                ensures transparent energy distribution and cost efficiency,
                creating cleaner urban transport.
              </p>
            </div>
          </div>

          {/* 2 — Clean Energy (image on right) */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row-reverse gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 5.png"
              alt="Clean Energy"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Clean Energy
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Power a nationwide network of electric vehicle charging
                stations, enabling clean mobility across Cuba. Blockchain
                enables transparency & supports the nation’s transition toward
                sustainable mobility.
              </p>
            </div>
          </div>

          {/* 3 — Digital Economy */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 4.png"
              alt="Digital Economy"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                Digital Economy
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Enable secure peer-to-peer transactions, digital payments,
                online businesses, and new income opportunities—built on
                transparent, verifiable blockchain technology.
              </p>
            </div>
          </div>

          {/* 4 — DeFi Services (image on right) */}
          <div className="bg-[#07111f] border border-[#1b2733] rounded-xl p-6 flex flex-col md:flex-row-reverse gap-6 items-center">
            <Image
              src="/3d-electric-car-with-charged-battery-symbol 2.png"
              alt="DeFi Services"
              width={300}
              height={200}
              className="rounded-lg w-full md:w-[300px] object-cover"
            />

            <div>
              <h3
                className={`${orbitron.className} text-white text-[26px] mb-2`}
              >
                DeFi Services
              </h3>
              <p
                className={`${workSans.className} text-gray-300 text-[15px] leading-relaxed`}
              >
                Access decentralized finance tools—lending, saving, staking, and
                yield farming—powered by blockchain. Cuban communities gain
                financial freedom and global crypto opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
