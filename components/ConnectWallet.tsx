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

const TokenOverview = () => {
  const contract = "0xf073d173Ed309f8A208e6C183eFf858DbC882DbB";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      id="smart-contract"
      className={`w-full flex justify-center py-16 px-5 ${workSans.variable} ${orbitron.variable}`}
    >
      <div className="bg-[#081420] border border-[#0f2334] rounded-xl p-8 sm:p-10 w-full max-w-[900px] shadow-xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-white font-[var(--font-orbitron)]">
          CubaNex (CNEX) — Token Overview
        </h2>

        <p className="text-center text-gray-400 mt-3 text-sm font-[var(--font-work-sans)]">
          Official token information for transparency and verification
        </p>

        {/* Token Info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <InfoItem label="Token Name" value="CubaNex" />
          <InfoItem label="Symbol" value="CNEX" />
          <InfoItem label="Network" value="Binance Smart Chain (BEP-20)" />
          <InfoItem label="Standard" value="BEP-20" />
          <InfoItem label="Total Supply" value="100,000,000,000 CNEX" />
          <InfoItem label="Decimals" value="18" />
        </div>

        {/* Contract */}
        <div className="mt-10 bg-[#071523] border border-[#0f2334] rounded-lg p-5">
          <p className="text-gray-400 text-sm font-[var(--font-work-sans)]">
            Contract Address
          </p>

          <div className="flex items-center justify-between gap-3 mt-2">
            <a
              href={`https://bscscan.com/token/${contract}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB74A] hover:text-[#FFB74A]/80 transition break-all text-sm font-mono underline underline-offset-4"
            >
              {contract}
            </a>

            <button
              onClick={copyAddress}
              className="text-[#b340ff] hover:text-white transition"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-gray-500 text-center">
          CubaNex is a community-driven blockchain project and is not affiliated
          with any government or official institution.
        </p>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#071523] border border-[#0f2334] rounded-lg p-4">
    <p className="text-gray-400">{label}</p>
    <p className="text-white font-medium mt-1">{value}</p>
  </div>
);

export default TokenOverview;
