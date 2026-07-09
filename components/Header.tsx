"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { textContent } from "@/constants/contents";
import { textVariant2 } from "@/font-utils/motion";
import { Github } from "lucide-react";

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
      <header className="Header header-glass w-full font-[var(--font-work-sans)] fixed top-0 left-0 z-[1000] transition-all duration-300">
        <motion.div
          variants={textVariant2}
          initial="hidden"
          animate="show"
          className="max-w-[1300px] mx-auto px-5 py-2 flex items-center justify-between"
        >
          <Link href={language === "esp" ? "/es" : "/"}>
            <Image
              src={"/assets/v2logo.png"}
              alt="logo"
              width={200}
              height={53}
              className="hidden sm:block"
              priority
            />
            <Image
              src={"/assets/v2logo.png"}
              alt="logo"
              width={180}
              height={53}
              className="block sm:hidden"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-white font-normal">
            {navItems.map((item, idx) => {
              const resolvedPath = language === "esp"
                ? (item.path === "/" ? "/es" : "/es" + item.path)
                : item.path;
              const isActive = pathname === resolvedPath ||
                (item.path !== "/" && pathname.startsWith(item.path));

              if (item.type === "link") {
                return (
                  <Link
                    key={idx}
                    href={resolvedPath}
                    className={`relative pb-1 cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "nav-active"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              } else if (item.type === "a") {
                const aIsActive = pathname.startsWith(item.path);
                return (
                  <a
                    key={idx}
                    href={item.path}
                    className={`relative pb-1 cursor-pointer transition-colors duration-200 ${
                      aIsActive
                        ? "nav-active"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              } else if (item.type === "labs") {
                const labsActive = pathname.startsWith("/labs");
                return (
                  <a
                    key={idx}
                    href={item.path}
                    className="flex items-center gap-2 group"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      labsActive ? "bg-[#80ECFF]" : "bg-cyan-400 group-hover:bg-white"
                    }`} />
                    <span className={`transition-colors tracking-wide text-sm font-medium ${
                      labsActive ? "text-[#80ECFF]" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {item.name}
                    </span>
                  </a>
                );
              }
            })}
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
                className="px-3 py-1.5 rounded-full text-[#000] font-medium text-[12px]"
                style={{
                  background:
                    "linear-gradient(90deg, #14F195 0%, #80ECFF 51%, #64A8F2 100%)",
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
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  {item.type === "link" && (
                    <Link
                      href={language === "esp" ? (item.path === "/" ? "/es" : "/es" + item.path) : item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.type === "a" && (
                    <a href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.name}
                    </a>
                  )}
                  {item.type === "labs" && (
                    <a
                      href={item.path}
                      className="flex items-center gap-2 mt-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-gray-300 tracking-wide text-sm font-medium">{item.name}</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
            <Link
              href={
                language === "esp"
                  ? "/CubaNex_Whitepaper_v1.0.pdf"
                  : "/CubaNex_Whitepaper_v1.0.pdf"
              }
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 w-full px-4 py-2 rounded-[999px] text-[#000] font-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #14F195 0%, #80ECFF 51%, #64A8F2 100%)",
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
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
