"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { textContent } from "@/constants/contents";
import Magnetic from "@/components/ui/Magnetic";
import Ripple from "@/components/ui/Ripple";

interface HeaderProps {
  defaultLanguage?: "eng" | "esp";
}

const Header: React.FC<HeaderProps> = ({ defaultLanguage }) => {
  const [language, setLanguage] = useState<"eng" | "esp">(
    defaultLanguage || "eng"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "eng" || saved === "esp") setLanguage(saved);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = () => {
    const newLang = language === "eng" ? "esp" : "eng";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);

    let newPath = pathname;

    if (newLang === "esp") {
      if (!pathname.startsWith("/es")) {
        newPath = pathname === "/" ? "/es" : "/es" + pathname;
      }
    } else {
      if (pathname.startsWith("/es")) {
        newPath = pathname === "/es" ? "/" : pathname.replace(/^\/es/, "");
      }
    }

    router.push(newPath);
  };

  const t = textContent[language].header;

  const navItems = [
    { type: "link", name: t.links[0], path: "/" },
    { type: "a", name: language === "eng" ? "Ecosystem" : "Ecosistema", path: "/ecosystem" },
    { type: "labs", name: "Labs", path: "/labs" },
    { type: "link", name: t.links[2], path: "/tokenomics" },
    { type: "link", name: t.links[3], path: "/community" },
    { type: "link", name: t.links[1], path: "/about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] py-3.5 sm:py-4 font-sans bg-transparent border-none shadow-none">
        <div className="max-w-[1300px] mx-auto px-5 flex items-center justify-between">
          {/* Logo with 3D Hover Scale */}
          <Link href={language === "esp" ? "/es" : "/"} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00D2FF]/20 to-[#9945FF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ scale: 1.04, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative z-10"
            >
              <Image
                src={"/assets/v2logo.png"}
                alt="CubaNex Logo"
                width={190}
                height={50}
                className="hidden sm:block h-auto w-[190px]"
                priority
              />
              <Image
                src={"/assets/v2logo.png"}
                alt="CubaNex Logo"
                width={160}
                height={42}
                className="block sm:hidden h-auto w-[160px]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Items with Silky Smooth Hover Slide Indicator */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {navItems.map((item, idx) => {
              const resolvedPath =
                language === "esp"
                  ? item.path === "/"
                    ? "/es"
                    : "/es" + item.path
                  : item.path;
              const isActive =
                pathname === resolvedPath ||
                (item.path !== "/" && pathname.startsWith(item.path));

              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Hover Backdrop Glow Pill */}
                  {hoveredIdx === idx && (
                    <motion.div
                      layoutId="hoverPill"
                      className="absolute inset-0 bg-[#00D2FF]/15 rounded-full border border-[#00D2FF]/30 z-0"
                      transition={{ type: "spring", stiffness: 220, damping: 28 }}
                    />
                  )}

                  {/* Active Indicator Backdrop Pill */}
                  {isActive && hoveredIdx === null && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20 z-0"
                      transition={{ type: "spring", stiffness: 220, damping: 28 }}
                    />
                  )}

                  {item.type === "link" ? (
                    <Link
                      href={resolvedPath}
                      className={`relative z-10 px-3.5 py-1.5 text-sm font-medium transition-colors duration-500 ease-in-out block ${
                        isActive
                          ? "text-[#80ECFF] font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : item.type === "a" ? (
                    <a
                      href={item.path}
                      className={`relative z-10 px-3.5 py-1.5 text-sm font-medium transition-colors duration-500 ease-in-out block ${
                        isActive
                          ? "text-[#80ECFF] font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      href={item.path}
                      className="relative z-10 px-3.5 py-1.5 text-sm font-medium flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
                      <span
                        className={`transition-colors duration-500 ease-in-out ${
                          isActive
                            ? "text-[#80ECFF] font-semibold"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Language Switcher & Glowing Presale CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={switchLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-xs font-semibold text-white transition-all cursor-pointer"
            >
              <Image src="/lngswicher.svg" width={18} height={18} alt="language" />
              <span>{language === "eng" ? "ES" : "EN"}</span>
            </button>

            <Magnetic>
              <Ripple>
                <a href={t.btnLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group px-5 py-2 rounded-full font-bold text-xs text-black shadow-[0_0_25px_rgba(20,241,149,0.4)] overflow-hidden cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, #14F195 0%, #80ECFF 51%, #64A8F2 100%)",
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>{t.button}</span>
                    </span>
                  </motion.button>
                </a>
              </Ripple>
            </Magnetic>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3 relative z-[1100]">
            <button
              onClick={switchLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white"
            >
              <Image src="/lngswicher.svg" width={16} height={16} alt="language" />
              <span>{language === "eng" ? "ES" : "EN"}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-white/15 bg-black/60 backdrop-blur flex items-center justify-center text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                  <motion.img
                    key="menu"
                    src="/Menu.svg"
                    width={24}
                    height={24}
                    alt="Menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.img
                    key="close"
                    src="/close.svg"
                    width={24}
                    height={24}
                    alt="Close"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* 3D Glass Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, x: "100%", rotateY: 10 }}
            animate={{ opacity: 1, x: "0%", rotateY: 0 }}
            exit={{ opacity: 0, x: "100%", rotateY: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-72 bg-black/90 backdrop-blur-2xl border-l border-white/10 text-white p-6 pt-24 z-[999] flex flex-col justify-between shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
          >
            <nav className="flex flex-col gap-4 text-base">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 + 0.1 }}
                >
                  {item.type === "link" && (
                    <Link
                      href={
                        language === "esp"
                          ? item.path === "/"
                            ? "/es"
                            : "/es" + item.path
                          : item.path
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-200 hover:text-[#80ECFF] font-medium border-b border-white/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.type === "a" && (
                    <a
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-200 hover:text-[#80ECFF] font-medium border-b border-white/5 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                  {item.type === "labs" && (
                    <a
                      href={item.path}
                      className="flex items-center gap-2 py-2 text-[#80ECFF] font-semibold border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
                      <span>{item.name}</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="pb-8">
              <a href={t.btnLink} onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full py-3 rounded-full text-black font-extrabold text-sm shadow-[0_0_20px_rgba(20,241,149,0.5)]"
                  style={{
                    background:
                      "linear-gradient(90deg, #14F195 0%, #80ECFF 51%, #64A8F2 100%)",
                  }}
                >
                  {t.button}
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
