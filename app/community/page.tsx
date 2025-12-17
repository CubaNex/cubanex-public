import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
import VipForm from "@/components/VipForm";
import { MessageCircle, Send, Twitch, TwitchIcon, Twitter } from "lucide-react";
import { div } from "framer-motion/client";
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
    <div className="main relative  bg-[#010813]">
      <div className=" sm:flex px-4 w-full pt-[120px] pb-[20px] sm:pt-[150px]  gap-2 items-center justify-center cmbg">
        <div>
          {" "}
          <h1
            className={`${orbitron.className} text-center sm:text-start text-[32px] sm:text-[56px] max-w-[800px]  text-[#fff] font-semibold leading-[1.2em] mb-6`}
          >
            Join the <span className="text-[#FF8F00]"> Community</span>
          </h1>
          <p
            className={`${workSans.className} text-center sm:text-start max-w-[750px]  text-[16px] sm:text-[24px] text-gray-300 mb-8`}
          >
            Connect with thousands of supporters building Cuba's decentralized
            future together
          </p>
        </div>
        <Image
          alt="logo"
          src={"/logos/favoco.png"}
          width={500}
          height={500}
          className="hidden sm:block"
        />
        <Image
          alt="logo"
          src={"/logos/favoco.png"}
          width={300}
          height={200}
          className="block mt-[-60px] mx-auto sm:hidden"
        />
      </div>
      <section className="">
        <h2
          className={`${orbitron.className} text-center text-[30px]  sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          <span className="text-[#00DED4]"> Connect</span> With Us
        </h2>

        <VipForm />
        <div className="px-6 pb-10 pt-20 grid  text-white max-w-[1100px] mx-auto gap-8 md:grid-cols-3">
          {/* 1 */}

          {/* 2 */}
          <a
            href="https://x.com/CubaNexOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <Twitter size={56} className="mx-auto mb-5" strokeWidth={1.8} />

              <h3 className="text-xl font-semibold mb-3">Twitter / X</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Follow us for real-time updates and announcements
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">@CubaNex</span>
              </p>
            </div>
          </a>

          {/* 3 */}
          <a
            href="https://t.me/CubaNexOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <Send size={56} className="mx-auto mb-5" strokeWidth={1.8} />

              <h3 className="text-xl font-semibold mb-3">Telegram</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Join our active community and chat with the team
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">
                  Join Telegram
                </span>
              </p>
            </div>
          </a>

          {/* 4 */}
          <a href="#" rel="noopener noreferrer" className="block">
            <div className="p-8 border border-[#FFB74A]/20 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-center transition transform hover:scale-[1.02] hover:border-[#FFB74A]/40">
              <MessageCircle
                size={56}
                className="mx-auto mb-5"
                strokeWidth={1.8}
              />

              <h3 className="text-xl font-semibold mb-3">Discord</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with holders and participate in governance
                <br />
                <br />
                <span className="text-[#FFB74A] font-medium">Join Discord</span>
              </p>
            </div>
          </a>
        </div>

        <div
          className={`${workSans.variable} relative z-10 ${orbitron.variable} w-full flex justify-center py-16 px-4 bg-[#060b12]`}
        >
          <div className="w-full max-w-[1000px] bg-cover border border-[#1b2733] rounded-xl p-10 text-center cmf">
            <h2
              className={`${orbitron.className} text-white text-[40px] md:text-[50px] font-bold mb-10`}
            >
              Be Part of Our <span className="text-[#FFB74A]">Team!</span>
            </h2>
            <p className="text-gray-400 text-[16px] max-w-[500px] mx-auto text-center">
              We are a global, growing team on a mission to solve two of the
              biggest pain points in the physical and digital world today – we
              are the quintessentially PHIGITAL company:
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
