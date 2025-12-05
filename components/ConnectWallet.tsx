"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
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

const ConnectWallet = () => {
  const contract = "0x742d35Cc6634C0532925a3b844Bc9e7559f0Beb";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={` w-full flex justify-center py-16 px-5 ${workSans.variable} ${orbitron.variable}`}
    >
      <div className="bg-[#081420] border border-[#0f2334] rounded-xl p-10 w-full max-w-[900px] shadow-xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg font-[var(--font-orbitron)]">
          Connect Your Wallet
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mt-3 text-sm font-[var(--font-work-sans)]">
          Start your CNX journey by connecting your Web3 wallet
        </p>

        {/* Wallet Buttons */}
        <div className="flex justify-center gap-3 sm:gap-6 mt-10">
          {/* BUTTON 1 (Gradient) */}
          <button
            className="
              px-[10px] sm:px-[30px] py-[10px] text-[10px] sm:text-[16px]
              rounded-full text-white font-medium font-[var(--font-work-sans)]
              bg-gradient-to-r from-[#C766EF] via-[#7928D2] to-[#2B0C52]
              min-w-[150px] sm:min-w-[180px] text-center
            "
          >
            MetaMask
          </button>

          {/* BUTTON 2 (Border only → hover fills with gradient) */}
          <button
            className="
              px-[10px] sm:px-[30px] py-[10px] text-[10px] sm:text-[16px]
              rounded-full font-medium text-white font-[var(--font-work-sans)]
              border border-[#7928D2]
              transition-all duration-300
              hover:bg-gradient-to-r hover:from-[#C766EF] hover:via-[#7928D2] hover:to-[#2B0C52]
              min-w-[150px] sm:min-w-[180px] text-center
            "
          >
            WalletConnect
          </button>
        </div>

        {/* Contract Address Box */}
        <div className="mt-10 bg-[#071523] border border-[#0f2334] rounded-lg p-5">
          <p className="text-gray-400 text-sm font-[var(--font-work-sans)]">
            Contract Address:
          </p>

          <div className="flex items-center justify-between mt-2">
            <span className="text-[#FFB74A] break-all text-sm font-mono">
              {contract}
            </span>

            <button
              onClick={copyAddress}
              className="text-[#b340ff] hover:text-white transition cursor-pointer"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
