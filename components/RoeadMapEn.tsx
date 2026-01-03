"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Work_Sans, Orbitron } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
});

const phases = [
  {
    id: 1,
    phase: "PHASE 1",
    title: "The Awakening",
    status: "Completed",
    type: "completed",
    items: [
      "Smart contract creation",
      "Website deployment",
      "Whitepaper v1.0 release",
    ],
  },
  {
    id: 2,
    phase: "PHASE 2",
    title: "Conscious Layer Foundation",
    status: "Current",
    type: "current",
    items: [
      "Branding finalization",
      "Website enhancements",
      "Explorer verification",
    ],
  },
  {
    id: 3,
    phase: "PHASE 3",
    title: "Ecosystem Expansion",
    status: "Upcoming",
    type: "upcoming",
    items: ["Developer tools", "Governance framework"],
  },
  {
    id: 4,
    phase: "PHASE 4",
    title: "Integration & Growth",
    status: "Upcoming",
    type: "upcoming",
    items: ["AI integrations", "Strategic partnerships"],
  },
  {
    id: 5,
    phase: "PHASE 5",
    title: "Legacy Framework",
    status: "Upcoming",
    type: "upcoming",
    items: ["Open-source expansion", "Long-term evolution"],
  },
];

export default function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto py-20 px-4">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-400/50 -translate-x-1/2 " />

      {phases.map((phase, index) => {
        const isLeft = index % 2 === 0;
        const isCompleted = phase.type === "completed";
        const isCurrent = phase.type === "current";

        return (
          <div
            key={phase.id}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            className="relative mb-24 flex md:block"
          >
            {/* CIRCLE */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg
                ${
                  isCompleted
                    ? "bg-yellow-400 text-black"
                    : isCurrent
                    ? "bg-cyan-400 text-black animate-[pulseRadio_2.5s_infinite]"
                    : "bg-[#0B1220] border border-cyan-400/60 text-cyan-400"
                }`}
              >
                {phase.id}
              </div>
            </div>

            {/* CARD */}
            <div
              className={`mt-14 w-full md:w-[420px]
                ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}
              `}
            >
              <div
                className={`bg-[#0B1220] rounded-xl p-6 border
                ${
                  isCompleted
                    ? "border-yellow-400/60"
                    : isCurrent
                    ? "border-cyan-400/70 shadow-[0_0_30px_#00E5FF55]"
                    : "border-cyan-400/30"
                }`}
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs tracking-widest text-gray-400">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded
                    ${
                      isCompleted
                        ? "bg-yellow-400/20 text-yellow-300"
                        : isCurrent
                        ? "bg-cyan-400/20 text-cyan-300"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <h3 className={`${orbitron.className} text-xl text-white mb-4`}>
                  {phase.title}
                </h3>

                {/* PROGRESS */}
                <div className="h-[3px] w-full bg-white/10 mb-5">
                  <div
                    className={`h-full
                    ${
                      isCompleted
                        ? "bg-yellow-400 w-full"
                        : isCurrent
                        ? "bg-cyan-400 w-[60%]"
                        : "bg-cyan-400/40 w-[20%]"
                    }`}
                  />
                </div>

                {/* LIST */}
                <ul className={`${workSans.className} space-y-3 text-gray-300`}>
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-3 h-3 mt-1 rounded-full border border-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
