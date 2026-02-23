import { motion } from "framer-motion";

<section
  className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
  style={{
    backgroundImage: `url('http://fortunwishdom.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-20-2026-11_02_38-PM.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dynamic light overlay to make the center pop */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.2)_0%,_transparent_70%)] pointer-events-none z-0" />

  {/* Rune Field Layer */}
  <RuneField />

  {/* Main Content Group */}
  <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 lg:gap-14">
    {/* Golden Bold Title */}
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="text-center px-4"
    >
      <h1 className="font-mystic font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.15em] sm:tracking-[0.25em] bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(251,191,36,0.6)] leading-[1.1] md:leading-normal">
        FORTUN WISHDOM
      </h1>
    </motion.div>

    {/* The Golden Infinity Core - Scaled up and shifted UP */}
    <div className="relative flex items-center justify-center scale-[1.8] md:scale-[2.4] lg:scale-[3.0] transition-transform duration-1000 -translate-y-[40px]">
      {/* Intense Outer Glow */}
      <div className="absolute inset-0 bg-amber-600/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute inset-[-40px] bg-amber-400/20 blur-[90px] rounded-full" />

      <InfinitySymbol />
    </div>
  </div>

  {/* Atmospheric sparkling particles */}
  <div className="absolute inset-0 pointer-events-none opacity-50">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-amber-200 shadow-[0_0_10px_#fcd34d]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 0.5}px`,
          height: `${Math.random() * 2 + 0.5}px`,
          animation: `pulse ${Math.random() * 4 + 2}s infinite ease-in-out`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

  <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.6); }
        }
      `}</style>
</section>;
