"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { textContent } from "@/constants/contents";
import { Twitter, Send, Github } from "lucide-react";

export default function Footer() {
  const pathname = usePathname() || "/"; // fallback if undefined

  // Default is English, if URL starts with /es → Spanish
  const language: "eng" | "esp" = pathname.startsWith("/es") ? "esp" : "eng";
  const t = textContent[language].footer;

  return (
    <footer className="w-full bg-[#000] font-[var(--font-work-sans)] Footer text-white border-t border-gray-800 shadow-[0_-3px_15px_rgba(255,255,255,0.03)]">
      <div className="max-w-[1300px] container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Link href={language === "eng" ? "/" : "/es"}>
                <Image
                  src={"/logos/logo.png"}
                  alt="logo"
                  width={200}
                  height={53}
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed">{t.brandText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">
              {language === "eng" ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <ul className="space-y-3">
              {t.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={
                      language === "eng"
                        ? `/${link.toLowerCase()}`
                        : `/es/${link.toLowerCase()}`
                    }
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold mb-4">
              {language === "eng" ? "Resources" : "Recursos"}
            </h3>
            <ul className="space-y-3">
              {t.resources.map((item, i) => (
                <li key={i}>
                  <Link
                    href={
                      language === "eng" ? `/${item.slug}` : `/es/${item.slug}`
                    }
                    className="hover:text-gray-300 transition-colors inline-flex items-center gap-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={"/CubaNex_Whitepaper_v1.0.pdf"}
              className="hover:text-gray-300 pt-3 transition-colors inline-flex items-center gap-2"
            >
              {language === "eng" ? "Whitepaper (PDF)" : "Libro Blanco (PDF)"}
            </a>
            <br></br>
            <a
              href="#smart-contract"
              className="hover:text-gray-300 pt-3 transition-colors inline-flex items-center gap-2"
            >
              {language === "eng" ? "Contract" : "Contrato"}
            </a>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-display font-semibold mb-4">
              {language === "eng" ? "Community" : "Comunidad"}
            </h3>
            <div className="flex space-x-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/CubaNexOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/CubaNexOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/CubaNex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1f1f] border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">{t.rights}</p>
            <div className="flex space-x-6 text-sm">
              <Link
                href={
                  language === "eng" ? "/privacy-policy" : "/es/privacy-policy"
                }
                className="hover:text-gray-300 transition-colors"
              >
                {t.privacy}
              </Link>

              <Link
                href={
                  language === "eng"
                    ? "/terms-of-service"
                    : "/es/terms-of-service"
                }
                className="hover:text-gray-300 transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
