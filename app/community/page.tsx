import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
import VipForm from "@/components/VipForm";
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
            Únete a la <span className="text-[#FF8F00]"> Comunidad</span>
          </h1>
          <p
            className={`${workSans.className} text-center sm:text-start max-w-[750px]  text-[16px] sm:text-[24px] text-gray-300 mb-8`}
          >
            Conéctate con miles de seguidores que construyen juntos el futuro
            descentralizado de Cuba
          </p>
        </div>
        <Image
          alt="log"
          src={"/community_logo.png"}
          width={400}
          height={500}
          className="hidden sm:block"
        />
        <Image
          alt="log"
          src={"/community_logo.png"}
          width={150}
          height={200}
          className="block mx-auto sm:hidden"
        />
      </div>
      <section className="">
        <h2
          className={`${orbitron.className} text-center text-[30px]  sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          <span className="text-[#00DED4]"> Connect</span> With Us
        </h2>

        <VipForm />
        <div className="px-6 pt-20 grid  text-white max-w-[1100px] mx-auto gap-8 md:grid-cols-3">
          {/* 1 */}

          {/* 2 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/twitter-1.svg"}
              width={50}
              height={50}
              alt="icon discord"
              className="mx-auto pb-4 w-[55px]"
            />
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Twitter/X
            </h3>
            <p className="text-gray-400 text-sm">
              Follow us for real-time updates and announcements
              <br />
              <br />
              Follow @CubaNex
            </p>
          </div>
          {/* 3 */}
          <div className="p-8 border text-center  items-center border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/telegram-1.svg"}
              width={50}
              height={50}
              alt="icon discord"
              className="mx-auto pb-4 w-[55px]"
            />
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Telegram{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Join our active community and chat with team members <br />
              <br />
              Join Telegram{" "}
            </p>
          </div>
          {/* 4 */}
          <div className="p-8  text-center  items-center border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/message-new.svg"}
              width={50}
              height={50}
              alt="icon discord"
              className="mx-auto pb-4 w-[55px]"
            />
            <h3 className="text-xl text-center font-semibold mb-3 items-center">
              Discord{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Connect with holders and participate in governance <br />
              <br />
              Join Discord{" "}
            </p>
          </div>
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
