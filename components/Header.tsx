"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { textContent } from "@/constants/contents";
import { textVariant2 } from "@/font-utils/motion";

interface HeaderProps {
  defaultLanguage?: "eng" | "esp";
}

const Header: React.FC<HeaderProps> = ({ defaultLanguage }) => {
  const [language, setLanguage] = useState<"eng" | "esp">(
    defaultLanguage || "eng"
  ); // default to English
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "eng" || saved === "esp") setLanguage(saved);
  }, []);

  const switchLanguage = () => {
    const newLang = language === "eng" ? "esp" : "eng";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);

    let newPath = pathname;

    if (newLang === "esp") {
      // Switch to Spanish
      if (!pathname.startsWith("/es")) {
        newPath = pathname === "/" ? "/es" : "/es" + pathname;
      }
    } else {
      // Switch to English
      if (pathname.startsWith("/es")) {
        newPath = pathname === "/es" ? "/" : pathname.replace(/^\/es/, "");
      }
    }

    router.push(newPath);
  };

  const t = textContent[language].header;

  const menuItems = [
    { name: t.links[0], path: "/" },
    { name: t.links[1], path: "/about" },
    { name: t.links[2], path: "/tokenomics" },
    { name: t.links[3], path: "/community" },
    {
      name: t.links[4],
      path: "/CubaNex_Whitepaper_v1.0.pdf",
    },
  ];

  return (
    <>
      <header className="Header w-full bg-[#000] font-[var(--font-work-sans)] shadow-lg fixed top-0 left-0 z-[1000]">
        <motion.div
          variants={textVariant2}
          initial="hidden"
          animate="show"
          className="max-w-[1300px] mx-auto px-5 py-2 flex items-center justify-between"
        >
          <Link href={language === "esp" ? "/es" : "/"}>
            <Image
              src="/logos/cuba-nex-logo-gold.png"
              alt="Cubanex Logo"
              width={210}
              height={60}
              className="object-contain sm:ml-0 cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-white font-medium">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={language === "esp" ? "/es" + item.path : item.path}
                className="hover:text-gray-300 cursor-pointer transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={switchLanguage}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition"
            >
              <Image src="/lngswicher.svg" width={20} height={20} alt="" />
              {language === "eng" ? "ES" : "EN"}
            </button>
            <a href={t.btnLink}>
              <button
                className="px-3 py-1.5 rounded-full text-white text-[12px]"
                style={{
                  background:
                    "linear-gradient(90deg, #C766EF 0%, #7928D2 51%, #2B0C52 100%)",
                }}
              >
                {t.button}
              </button>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-nowrap md:hidden items-center gap-3 z-[1100] relative">
            <button
              className="flex items-center gap-1 text-white"
              onClick={switchLanguage}
            >
              <Image src="/lngswicher.svg" width={20} height={20} alt="" />
              {language === "eng" ? "ES" : "EN"}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                  <motion.img
                    key="menu"
                    src="/Menu.svg"
                    width={28}
                    height={28}
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
                    width={28}
                    height={28}
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
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed pt-[70px] right-0 h-[calc(100%-70px)] w-64 bg-[#1A1A20] text-white p-6 z-[999] flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg mt-4">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={language === "esp" ? "/es" + item.path : item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link href={language === "esp" ? "/es/community" : "/community"}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 w-full px-4 py-2 rounded-[999px] text-white font-medium"
                style={{
                  background:
                    "linear-gradient(90deg, #C766EF 0%, #7928D2 51%, #2B0C52 100%)",
                }}
              >
                {t.button}
              </motion.button>{" "}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
