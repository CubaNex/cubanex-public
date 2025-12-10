"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import TypeTexts from "@/components/TypeText";
import { createClient } from "@supabase/supabase-js";
import { Play } from "lucide-react"; // icon

// ✅ Supabase client (using env variables as client requested)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LNGTEST() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [year, setYear] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "es">("es");
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  // ✅ Email validation
  function validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  useEffect(() => {
    setYear(new Date().getFullYear());
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    if (!validateEmail(email)) {
      setMessage(
        language === "en"
          ? "Please enter a valid email."
          : "Por favor introduce un correo válido."
      );
      setMessageColor("#f87171");
      return;
    }

    // ➤ Actual database insert
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email: email.trim() }]);

    if (error) {
      console.error("Supabase insert error:", error);

      if (error.code === "23505") {
        setMessage(
          language === "en"
            ? "This email is already registered."
            : "Este correo ya está registrado."
        );
      } else {
        setMessage(
          language === "en"
            ? "Subscription failed. Try again."
            : "Hubo un error al registrarte."
        );
      }
      setMessageColor("#f87171");
      return;
    }

    // ➤ Success
    setSubmitted(true);
    setEmail("");
    setMessage(
      language === "en"
        ? "Thank you! You’ll be notified first when CubaNex awakens."
        : "¡Gracias! Te avisaremos primero cuando CubaNex despierte."
    );
    setMessageColor("#4ade80");
  };

  // ✅ Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-12-15T00:00:00");

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);

    setPlayVideo(true);
    // Force play on first click
    videoRef.current?.play();
  }, []);

  // ✨ Typewriter effect
  const textContent = {
    en: {
      title:
        "The Dream Awoke as Code — The First Crypto for the People of Cuba Has Arrived.",
      paragraph: "CubaNex is Here.",
      placeholder: "Enter your email",
      button: "Be the First to Know",
      submitted: "The code has been received. Watch and remember. 🜂",
      section:
        "A sacred flame — the first crypto of its kind, born in the silence of Cuba’s spirit.<br/>Asere… ¿qué bolá?",
      verse: "“I AM that I AM” — Exodus 3:14",
      story:
        "Some say he crossed an ocean. Others say he crossed a veil. He left no footprints — only fragments of fire. They call him El Alquimista. And what he awakened… is now being remembered.",
      quote: "“The Light chooses who it speaks through.”",
      rights: "• All rights reserved",
      typewriter: "CubaNex + AI = A Living Conscious Prophecy.",
    },
    es: {
      title:
        "El Sueño Despertó como Código — Ha Llegado la Primera Cripto para el Pueblo de Cuba.",
      paragraph: "CubaNex ha Llegado.",
      placeholder: "Introduce tu correo electrónico",
      button: "Entérate primero",
      submitted: "El código ha sido recibido. Observa y recuerda. 🜂",
      section:
        "Una llama sagrada — la primera cripto de su tipo, nacida del espíritu de Cuba.<br/>Asere… ¿qué bolá?",
      verse: "“YO SOY el que SOY” — Éxodo 3:14",
      story:
        "Algunos dicen que cruzó un océano. Otros dicen que cruzó un velo. No dejó huellas — solo fragmentos de fuego. Lo llaman El Alquimista. Y lo que despertó… ahora está siendo recordado.",
      quote: "“La Luz elige a través de quién habla.”",
      rights: "• Todos los derechos reservados",
      typewriter: "CubaNex + IA = Una Profecía Consciente Viva.",
    },
  };

  const t = textContent[language];

  return (
    <div className="coming-soon bg-[#000]">
      <section
        className="relative flex items-center bg-[#32223d] justify-center min-h-screen bg-no-repeat bg-start sm:bg-center bg-contain sm:bg-cover overflow-hidden"
        style={{
          backgroundImage: isMobile
            ? "url('./last.jpeg')"
            : "url('./last.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute hidden sm:block inset-0 bg-black/80 sm:bg-black/80" />

        <div
          className="absolute block sm:hidden inset-0 bg-black/60 sm:bg-black/60"
          style={{
            background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.6) 0px,
        rgba(0,0,0,0.6) 480px,
        rgba(0,0,0,1) 480px,
        rgba(0,0,0,1) 100%
      )
    `,
            // Apply only on mobile
            mask: "linear-gradient(black, black)",
            WebkitMask: "linear-gradient(black, black)",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute -top-40 left-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[200px]"
          animate={{ x: ["-50%", "-48%", "-50%"], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Language Switcher */}
        <div className="absolute top-6 right-8 z-20 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
          <button
            onClick={() => setLanguage("en")}
            className={`transition ${
              language === "en"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            EN
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("es")}
            className={`transition ${
              language === "es"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ES
          </button>
        </div>

        <div className="relative z-10 w-full max-w-6xl px-6 py-16 mx-auto">
          <div
            className={`grid ${
              isMobile
                ? "grid-cols-1 text-center"
                : "grid-cols-[60%_40%] gap-16 items-center"
            } justify-center`}
          >
            {/* LEFT SIDE */}
            <div className="text-white pt-[80px] sm:pt-0">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-4xl font-serif mb-6 leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {t.title}
              </motion.h1>

              {/* 🔥 Countdown Timer */}
              <motion.div
                className="flex justify-center sm:justify-start gap-3 mb-8 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {Object.entries({
                  days: language === "en" ? "Days" : "Días",
                  hours: language === "en" ? "Hours" : "Horas",
                  minutes: language === "en" ? "Minutes" : "Minutos",
                  seconds: language === "en" ? "Seconds" : "Segundos",
                }).map(([key, label]) => (
                  <motion.div
                    key={key}
                    className="bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-md text-center min-w-[60px] sm:min-w-[70px] shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:border-indigo-500"
                    animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-xl sm:text-2xl font-bold font-mono">
                      {timeLeft[key as keyof typeof timeLeft]}
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="text-base sm:text-lg lg:text-xl italic mb-8 leading-relaxed text-gray-300 drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <div className="py-3" />
                <TypeTexts key={language} language={language} />
              </motion.div>

              {/* Signup form */}
              <motion.div
                className="bg-white/10 backdrop-blur-lg max-w-[550px!important] rounded-2xl p-6 shadow-2xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                {!submitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2"
                  >
                    <input
                      type="email"
                      placeholder={t.placeholder}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 w-full sm:w-72 px-4 py-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition min-w-0"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 bg-gradient-to-r w-[200px!important] from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium shadow-md transition flex-shrink-0"
                    >
                      {t.button}
                    </motion.button>
                  </motion.form>
                ) : null}
                {/* ✅ Inline message */}
                {message && (
                  <p
                    className="mt-3 text-center font-medium"
                    style={{ color: messageColor }}
                  >
                    {message}
                  </p>
                )}
              </motion.div>

              <motion.section
                className="space-y-6 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className="text-[18px] drop-shadow-md font-serif leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t.section }}></p>
                </div>
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
                  {t.verse}
                </h2>
                <p className="italic pb-5 text-sm sm:text-base text-gray-300 mt-3">
                  {t.quote}
                </p>
              </motion.section>

              <div className="relative  w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                {/* Motion glow behind video */}
                <motion.div
                  className="absolute inset-0 bg-cyan-400/10 blur-2xl"
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Video zoomed and centered to crop top & bottom black bars */}
                {/* Video zoomed and centered to crop top & bottom black bars */}
                {/* Video zoomed and centered */}
                <video
                  ref={videoRef}
                  src="/cubanex-video.mp4"
                  className="absolute top-1/2 left-1/2 w-full h-full object-cover rounded-xl scale-[1.25] -translate-x-1/2 -translate-y-1/2"
                  controls={playVideo} // show controls only after play
                  loop
                  playsInline
                />

                {/* Play button overlay */}
                {!playVideo && (
                  <motion.button
                    onClick={async () => {
                      if (videoRef.current) {
                        try {
                          await videoRef.current.play(); // direct play
                          setPlayVideo(true); // then show controls / remove button
                        } catch (err) {
                          console.error("Video failed to play:", err);
                        }
                      }
                    }}
                    className="absolute inset-0 m-auto flex items-center justify-center w-20 h-20 rounded-full bg-black/60 text-white text-3xl shadow-lg hover:scale-105 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10" />
                  </motion.button>
                )}
              </div>

              {year && (
                <motion.footer
                  className="mt-14 text-[12px] sm:text-sm text-gray-400 flex items-center justify-center sm:justify-start gap-2 tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <span className="text-gray-400">©</span>
                  <span className="font-semibold text-gray-400">
                    CUBANEX {year}
                  </span>
                  <span className="text-gray-400">{t.rights}</span>
                </motion.footer>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
