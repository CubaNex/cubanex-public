"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Work_Sans, Orbitron } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700"],
});

const TokenOverviewMini = () => {
  const contract = "0xf073d173Ed309f8A208e6C183eFf858DbC882DbB";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={`w-full flex justify-center py-10 px-5 ${workSans.variable} ${orbitron.variable}`}
    >
      <div className="bg-[#081420] border border-[#0f2334] rounded-xl p-6 w-full max-w-[800px]">
        <h3 className="text-center text-xl font-bold text-white font-[var(--font-orbitron)]">
          Token Overview
        </h3>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <Info label="Token" value="CubaNex (CNEX)" />
          <Info label="Network" value="BSC (BEP-20)" />
          <Info label="Supply" value="100B CNEX" />
          <Info label="Decimals" value="18" />
        </div>

        <div className="mt-6 bg-[#071523] border border-[#0f2334] rounded-lg p-4">
          <p className="text-gray-400 text-xs">Contract Address</p>

          <div className="flex items-center justify-between gap-2 mt-1">
            <span className="text-[#FFB74A] break-all text-xs font-mono">
              {contract}
            </span>

            <button onClick={copyAddress} className="text-[#b340ff]">
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <p className="mt-4 text-[11px] text-gray-500 text-center">
          CubaNex is a community-driven blockchain project and is not affiliated
          with any government or official institution.
        </p>
      </div>
    </div>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#071523] border border-[#0f2334] rounded-md p-3">
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="text-white font-medium mt-0.5">{value}</p>
  </div>
);

export default TokenOverviewMini;
