import React from "react";
import { Work_Sans, Orbitron } from "next/font/google";
import ConnectWallet from "@/components/ConnectWallet";
import Image from "next/image";
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
      <div className="flex px-4 pt-[120px] pb-[80px] sm:py-[150px] flex-col gap-2 items-center justify-center abhBg">
        <h1
          className={`${orbitron.className} text-[32px] sm:text-[56px] max-w-[800px] mx-auto text-center text-[#fff] font-semibold leading-[1.2em] mb-6`}
        >
          From <span className="text-[#00DED4]"> Havana</span>
          to the
          <span className="text-[#FFB74A]">  Blockchain</span>
        </h1>

        <p
          className={`${workSans.className} max-w-[750px] text-center text-[16px] sm:text-[24px] text-gray-300   mx-auto mb-8`}
        >
          CubaNex represents more than cryptocurrency—it's a bridge between
          Cuba's vibrant past and its innovative future, powered by blockchain
          technology and sustainable vision.
        </p>
        <div className="max-w-[800px] mx-auto rounded-[12px] bg-[#030E1C] border border-[#1F2E47] p-6 sm:p-[50px] ">
          <h2
            className={`${orbitron.className} text-[26px] sm:text-[32px] max-w-[800px]  text-[#fff] font-semibold leading-[1.2em] mb-6`}
          >
            Our
            <span className="text-[#FFB74A]"> Story</span>
          </h2>

          <p
            className={`${workSans.className} max-w-[750px]  text-[16px]  text-gray-300   mb-8`}
          >
            CubaNex emerges from this same spirit—a vision to leapfrog outdated
            financial systems and embrace the future of decentralized finance.
            We're not just building a cryptocurrency; we're creating an
            ecosystem that honors Cuban culture while propelling it into the
            Web3 era.
          </p>
          <p
            className={`${workSans.className} max-w-[750px]  text-[16px]  text-gray-300   mb-8`}
          >
            Cuba has always been a land of innovation born from necessity. From
            the iconic vintage cars kept running through ingenuity to the spirit
            of resilience that defines its people, Cuba embodies the power of
            adaptation and creativity.
          </p>
          <p
            className={`${workSans.className} max-w-[750px]  text-[16px]  text-gray-300   mb-8`}
          >
            CubaNex emerges from this same spirit—a vision to leapfrog outdated
            financial systems and embrace the future of decentralized finance.
            We're not just building a cryptocurrency; we're creating an
            ecosystem that honors Cuban culture while propelling it into the
            Web3 era.
          </p>
        </div>
      </div>
      <section className="">
        <Image
          src="/abvbg.svg"
          alt="Hero Background"
          width={800}
          height={800}
          className="w-full absolute top-[200px] left-0 h-full object-cover opacity-80"
        />

        <h2
          className={`${orbitron.className} text-center text-[30px]  sm:text-[40px] lg:text-[46px] text-[#fff] font-semibold leading-[1.3em] mb-6`}
        >
          Our
          <span className="text-[#00DED4]"> Value</span>
        </h2>

        <div className="relative pb-20 z-10 px-6 grid max-w-[1300px] text-white mx-auto gap-8 md:grid-cols-4">
          {/* 1 */}
          <div className="p-8 border  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/aboutValeu1.png"}
              width={50}
              height={50}
              alt="icon discord"
              className=" pb-4 w-[55px]"
            />
            <h3 className="text-xl  font-semibold mb-3 items-center">
              Cuban Heritage{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Rooted in the rich culture, resilience, and innovation spirit of
              Cuba{" "}
            </p>
          </div>
          {/* 2 */}
          <div className="p-8 border  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/aboutValeu2.png"}
              width={50}
              height={50}
              alt="icon discord"
              className=" pb-4 w-[55px]"
            />{" "}
            <h3 className="text-xl  font-semibold mb-3 items-center">
              Community First{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Building together with transparency, inclusivity, and shared
              prosperity{" "}
            </p>
          </div>
          {/* 3 */}
          <div className="p-8 border  border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/aboutValeu3.png"}
              width={50}
              height={50}
              alt="icon discord"
              className=" pb-4 w-[55px]"
            />
            <h3 className="text-xl font-semibold mb-3 items-center">
              Global Vision{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Connecting Cuba to the world through decentralized technology{" "}
            </p>
          </div>
          {/* 4 */}
          <div className="p-8   border border-[#FFB74A]/17 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-[1.02] transition">
            <Image
              src={"/aboutValeu4.png"}
              width={50}
              height={50}
              alt="icon discord"
              className=" pb-4 w-[55px]"
            />
            <h3 className="text-xl font-semibold mb-3 items-center">
              Sustainable Future{" "}
            </h3>
            <p className="text-gray-400 text-sm">
              Pioneering eco-friendly blockchain for clean energy and green
              economy{" "}
            </p>
          </div>
        </div>
        <div
          className={`${workSans.variable} relative z-10 ${orbitron.variable} w-full flex justify-center py-16 px-4 bg-[#060b12]`}
        >
          <div className="w-full max-w-5xl border border-[#1b2733] rounded-xl p-10 text-center bg-[#0b111b]">
            <h2
              className={`${orbitron.className} text-white text-2xl md:text-3xl font-bold mb-10`}
            >
              Vision for the Future
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* 2025 */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#16e0ff] text-3xl font-extrabold mb-3`}
                >
                  2025
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Launch ecosystem and establish
                  <br />
                  partnerships with Cuban enterprises
                </p>
              </div>

              {/* 2026 */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#ffcc66] text-3xl font-extrabold mb-3`}
                >
                  2026
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Deploy real-world applications in
                  <br />
                  transportation and renewable energy
                </p>
              </div>

              {/* 2027+ */}
              <div>
                <h3
                  className={`${orbitron.className} text-[#b374ff] text-3xl font-extrabold mb-3`}
                >
                  2027+
                </h3>
                <p className="text-[#c8d0d7] text-sm leading-relaxed">
                  Scale globally while empowering
                  <br />
                  Cuban communities and economy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
