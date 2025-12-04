import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";

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
const WhitePaper = () => {
  return (
    <div
      className="w-full max-w-5xl mx-auto mt-10 p-10 rounded-2xl"
      style={{
        background: "rgba(10, 14, 26, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* LEFT BLOCK */}
        <div className="flex items-start gap-4">
          <div className="w-[100px] rounded-xl">
            <img
              src="/image21.png"
              alt="placeholder"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3
              className="text-white text-xl"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Technical Whitepaper
            </h3>

            <p
              className="text-gray-300 text-sm mt-1 leading-relaxed"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Complete technical documentation covering our blockchain
              architecture, tokenomics, and roadmap
            </p>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="flex items-start gap-4">
          <div className="w-[100px] rounded-xl">
            <img
              src="/image22.png"
              alt="placeholder"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3
              className="text-white text-xl"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Audit Reports
            </h3>

            <p
              className="text-gray-300 text-sm mt-1 leading-relaxed"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Security audits and smart contract verification from leading
              blockchain firms
            </p>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        {/* FIRST BUTTON - Gradient */}
        <button
          className="
            px-[10px] py-2 text-[12px] sm:text-[18px] sm:px-6 sm:py-3
            rounded-full text-white font-medium
            bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52]
          "
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Download Whitepaper (PDF)
        </button>

        {/* SECOND BUTTON - Border then gradient on hover */}
        <button
          className="
            px-[10px] py-2 text-[12px] sm:text-[18px] sm:px-6 sm:py-3
            rounded-full text-white font-medium
            border border-[#7928D2]
            transition-all duration-300
            hover:bg-gradient-to-r hover:from-[#C766EF] hover:via-[#7928D2] hover:to-[#2B0C52]  sm:min-w-[150px]
          "
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Read Online
        </button>
      </div>
    </div>
  );
};

export default WhitePaper;
