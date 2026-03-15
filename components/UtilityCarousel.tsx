"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Orbitron, Work_Sans } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export interface UtilityItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface Props {
  titleText: React.ReactNode;
  items: UtilityItem[];
}

export default function UtilityCarousel({ titleText, items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative max-w-[1240px] mx-auto overflow-hidden px-4">
      {/* Header section with title and arrows */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6 border-b border-white/10 pb-6">
        <h2 className={`${orbitron.className} text-[32px] sm:text-[42px] font-bold text-white leading-tight max-w-[600px] text-left`}>
          {titleText}
        </h2>
        
        <div className="flex gap-4 mb-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/20 flex justify-center items-center text-white hover:bg-white/10 transition bg-[#040A15]"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/20 flex justify-center items-center text-white hover:bg-white/10 transition bg-[#040A15]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex items-stretch overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex-none w-[320px] sm:w-[350px] md:w-[400px] snap-start bg-[#0B1320] border border-[#1b2733] rounded-2xl flex flex-col overflow-hidden group hover:border-[#00D2FF]/50 transition-colors duration-300 shadow-2xl"
          >
            {/* Image top half */}
            <div className="h-[240px] w-full relative overflow-hidden bg-[#0A101C]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-100" />
            </div>
            
            {/* Text bottom half */}
            <div className="p-6 sm:px-8 pb-8 flex flex-col flex-grow relative z-10 -mt-8">
              <div className="text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-2">
                {item.category}
              </div>
              <h3 className={`${orbitron.className} text-white font-bold text-[26px] mb-3 leading-tight`}>
                {item.title}
              </h3>
              <p className={`${workSans.className} text-gray-400 text-[15px] leading-relaxed flex-grow`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
