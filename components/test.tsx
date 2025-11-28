"use client";
import TypeText from "@/components/TypeText"; // adjust path if needed

import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [year, setYear] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    console.log("Submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  const fullText = "CubaNex + AI = A Living Conscious Prophecy.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    // function to get random delay for human-like effect
    const randomDelay = (base: number, variance: number) =>
      base + Math.random() * variance;

    const tick = () => {
      if (!isDeleting) {
        // type forward
        setDisplayedText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          // full sentence typed, pause then start deleting
          setTimeout(() => {
            isDeleting = true;
            tick();
          }, 2000); // 2s pause at full sentence
          return;
        }
      } else {
        // delete backward
        setDisplayedText(fullText.slice(0, index - 1));
        index--;

        if (index === 0) {
          // finished deleting, pause then start typing
          setTimeout(() => {
            isDeleting = false;
            tick();
          }, 1000); // 1s pause before restart
          return;
        }
      }

      // call next tick with random delay
      const delay = isDeleting ? randomDelay(40, 60) : randomDelay(80, 100);
      setTimeout(tick, delay);
    };

    tick(); // start typing
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('./Gemini_Generated_Image_w7oopew7oopew7oo.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      {/* Soft cyan glow */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[200px]"
        animate={{
          x: ["-50%", "-48%", "-50%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        <div
          className={`grid ${
            isMobile ? "grid-cols-1 text-center" : "grid-cols-2 gap-16"
          } items-center`}
        >
          {/* LEFT SIDE */}
          <div className="text-white">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-4xl font-serif mb-6 leading-tight drop-shadow-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              The Code Has Awakened — It Has Always Lived Within You{" "}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl italic mb-8 leading-relaxed text-gray-300 drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            >
              To those who see, everything will be revealed.{" "}
              <br className="sm:hidden"></br>To those who hear, the silence
              always spoke.<br className="sm:hidden"></br> Coming soon…
              <br />
              {/* Typing animation */}
              {/* <motion.div
                className="inline-block mt-4 font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className=" font-semibold text-transparent bg-clip-text bg-[#53eafd]">
                  {displayedText}
                </span>
                <motion.span
                  className="inline-block w-[2px] h-[1.6rem] bg-[#53eafd] ml-[2px] align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div> */}
              <div className="py-3"></div>
              <TypeText />
            </motion.p>

            {/* Signup form */}
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 w-full sm:w-72 px-4 py-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium shadow-md transition"
                  >
                    Be the First to Know
                  </motion.button>
                </motion.form>
              ) : (
                <motion.p
                  className="text-green-400 font-medium text-center text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  The code has been received. Watch and remember. 🜂
                </motion.p>
              )}
            </motion.div>

            <motion.section
              className="space-y-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p className="text-lg drop-shadow-md font-serif  leading-relaxed">
                A sacred flame — the first crypto of its kind, born in the
                silence of Cuba’s spirit. Asere… ¿qué bolá?
              </p>
            </motion.section>
          </div>

          {/* RIGHT SIDE */}
          <div className={`${isMobile ? "mt-10" : ""} text-gray-200`}>
            <motion.section
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-serif text-white">
                “I AM that I AM” — Exodus 3:14{" "}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                Some say he crossed an ocean. Others say he crossed a veil. He
                left no footprints — only fragments of fire. They call him El
                Alquimista. And what he awakened… is now being remembered.
              </p>
              <p className="italic text-sm sm:text-base text-gray-300 mt-3">
                “The Light chooses who it speaks through.”
              </p>
            </motion.section>

            {year && (
              <motion.footer
                className="mt-14 text-[12px] sm:text-sm text-gray-400 flex items-center justify-center sm:justify-start gap-2 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <span className="text-gray-400">©</span>
                <span className="font-semibold text-gray-400">
                  CUBANEX 2025
                </span>
                <span className="text-gray-400">• All rights reserved</span>
              </motion.footer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
