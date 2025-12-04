"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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

const RoeadMapEn = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const phases = [
    {
      id: 1,
      title: "Launch",
      tag: "Current",
      tagColor: "#00E5FF33",
      progress: "60%",
      items: [
        "Smart Contract Deployment",
        "Website Launch",
        "Presale Begin",
        "Audit Completion",
      ],
      aos: "fade-right",
      circleBg: "#00E5FF",
      circleText: "#00131A",
    },
    {
      id: 2,
      title: "Growth",
      tag: "Q2 2025",
      tagColor: "#1A1F2E",
      progress: "30%",
      items: [
        "DEX Listing",
        "Staking Platform",
        "Community Expansion",
        "Marketing Campaign",
      ],
      aos: "fade-left",
      circleBg: "#1A1F2E",
      circleText: "#fff",
    },
    {
      id: 3,
      title: "Utility Expansion",
      tag: "Q3 2025",
      tagColor: "#1A1F2E",
      progress: "20%",
      items: [
        "Transportation Utility",
        "Energy Utility",
        "Partnership Integrations",
        "App Alpha Release",
      ],
      aos: "fade-right",
      circleBg: "#1A1F2E",
      circleText: "#fff",
    },
    {
      id: 4,
      title: "Ecosystem Scaling",
      tag: "Q4 2025",
      tagColor: "#1A1F2E",
      progress: "10%",
      items: [
        "Mainstream Adoption",
        "Advanced DeFi Tools",
        "Mobile App Full Release",
        "Global Utility Expansion",
      ],
      aos: "fade-left",
      circleBg: "#1A1F2E",
      circleText: "#fff",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-10 pb-20">
      {/* Center Vertical Line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-[#00E5FF]/20 pointer-events-none"></div>

      {/* Loop Phases */}
      {phases.map((phase) => (
        <div
          key={phase.id}
          data-aos={phase.aos}
          className={`
            relative w-full md:w-[420px]
            bg-[#0F1524] border border-[#00E5FF]/40 rounded-xl p-7
            shadow-[0_0_20px_#00E5FF22]
            ${phase.aos === "fade-right" ? "md:ml-[55%]" : "md:mr-[55%]"}
            mb-14
          `}
        >
          {/* Pulsing Circle */}
          <div
            className={`
              absolute top-8 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold
              border border-[#00E5FF]/40 animate-[pulseGlow_2s_infinite]
              ${phase.aos === "fade-right" ? "-left-[34px]" : "-right-[34px]"}
            `}
            style={{ backgroundColor: phase.circleBg, color: phase.circleText }}
          >
            {phase.id}
          </div>

          <span
            className={`${workSans.className} uppercase text-sm tracking-wide text-gray-300`}
          >
            PHASE {phase.id}
            <span
              className="ml-2 px-2 py-0.5 rounded-md"
              style={{ backgroundColor: phase.tagColor }}
            >
              {phase.tag}
            </span>
          </span>

          <h3 className={`${orbitron.className} text-3xl text-white mt-2`}>
            {phase.title}
          </h3>

          {/* Progress Bar */}
          <div className="h-[4px] w-full bg-gray-700 rounded-full mt-4">
            <div
              className="h-full bg-[#00E5FF] rounded-full"
              style={{ width: phase.progress }}
            ></div>
          </div>

          {/* Phase Items */}
          <ul className={`${workSans.className} text-gray-300 space-y-3 mt-6`}>
            {phase.items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoeadMapEn;
