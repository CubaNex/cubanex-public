"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { textContent } from "@/constants/contents";

export default function Footer() {
  const pathname = usePathname() || "/"; // fallback if undefined
  const language: "eng" | "esp" = pathname.startsWith("/en") ? "eng" : "esp";
  const t = textContent[language].footer;

  return (
    <footer className="w-full bg-[#000] font-[var(--font-work-sans)] Footer text-white border-t border-gray-800 shadow-[0_-3px_15px_rgba(255,255,255,0.03)]">
      <div className="max-w-[1300px] container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Link href={language === "eng" ? "/en" : "/"}>
                <Image
                  src="/logos/cuba-nex-logo-gold.png"
                  alt="Cubanex Logo"
                  width={230}
                  height={40}
                  className="object-contain "
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
                        ? `/en/${link.toLowerCase()}`
                        : `/${link.toLowerCase()}`
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
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors inline-flex items-center gap-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-display font-semibold mb-4">
              {language === "eng" ? "Community" : "Comunidad"}
            </h3>
            <div className="flex space-x-4">
              {t.community.map((icon, i) => {
                let src = "";
                switch (icon.toLowerCase()) {
                  case "twitter":
                    src = "/twitter-1.svg";
                    break;
                  case "telegram":
                    src = "/telegram-1.svg";
                    break;
                  case "message":
                    src = "/message-1.png";
                    break;
                }
                return (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    {src && (
                      <Image src={src} alt={icon} width={20} height={20} />
                    )}
                  </a>
                );
              })}
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
                  language === "eng" ? "/en/privacy-policy" : "/privacy-policy"
                }
                className="hover:text-gray-300 transition-colors"
              >
                {t.privacy}
              </Link>

              <Link
                href={
                  language === "eng"
                    ? "/en/terms-of-service"
                    : "/terms-of-service"
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
