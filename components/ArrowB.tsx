"use client";
import React from "react";

const ArrowB = () => {
  return (
    <svg
      width="20"
      height="36"
      viewBox="0 0 20 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="
        mx-auto
        cursor-pointer
        animate-bounce
        transition-all
        duration-300
        hover:scale-110
      "
      onClick={() => {
        window.scrollTo({
          top: window.scrollY + 400,
          behavior: "smooth",
        });
      }}
    >
      {/* Outer thin capsule */}
      <rect
        x="1"
        y="1"
        width="18"
        height="34"
        rx="9"
        stroke="#DEAA66"
        strokeWidth="1.4"
      />

      {/* Inner small dot */}
      <rect x="9" y="9" width="2" height="6" rx="1" fill="#DEAA66" />
    </svg>
  );
};

export default ArrowB;
