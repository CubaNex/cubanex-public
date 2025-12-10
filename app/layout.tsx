// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import { Work_Sans, Orbitron } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BacktoTop";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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

// Server-side default language
const defaultLang: "eng" | "esp" = "esp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />{" "}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${orbitron.variable} antialiased`}
      >
        {/* Header (client) receives default language */}
        <Header defaultLanguage={defaultLang} />
        <BackToTop />
        {/* Main content */}
        {children}

        {/* Footer (server) receives language directly */}
        <Footer />
      </body>
    </html>
  );
}
