"use client";
import React from "react";

const ArrowB = () => {
  return (
    <img
      src="/barrow.svg"
      alt="Scroll Arrow"
      className="
        mx-auto
        drop-shadow-lg
        cursor-pointer
        animate-bounce
        transition-all
        duration-300
        hover:scale-110
        hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
      "
      onClick={() => {
        window.scrollTo({
          top: window.scrollY + 400,
          behavior: "smooth",
        });
      }}
    />
  );
};

export default ArrowB;
