// app/en/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import { Work_Sans, Orbitron } from "next/font/google";
import "../globals.css";

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

// Server-side language
const defaultLang: "eng" | "esp" = "eng";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${orbitron.variable} antialiased`}
      >
        {/* Header (client) receives default language */}

        {/* Main content */}
        {children}

        {/* Footer (server) receives language directly */}
      </body>
    </html>
  );
}
