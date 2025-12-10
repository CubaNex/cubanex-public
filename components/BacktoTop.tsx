"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show button when scrolled more than 100px
    const onScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} // start below the screen
            animate={{ opacity: 1, y: 0 }} // slide up into view
            exit={{ opacity: 0, y: 50 }} // slide back down when hiding
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: 30,
              right: 30,
              zIndex: 9999,
              // --- 👇 THE FIXES FOR MOBILE SCROLL JUMP START HERE 👇 ---
              // Forces hardware acceleration, which stabilizes fixed positioning on many mobile browsers
              transform: "translate3d(0, 0, 0)",
              willChange: "transform",
              // --- 👆 THE FIXES END HERE 👆 ---
            }}
          >
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "linear-gradient(135deg, #333 0%, #000 100%)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                animation: "pulse 1.8s infinite alternate",
                // Ensure the button itself is also clean
                padding: 0,
              }}
            >
              <ArrowUp size={16} />
            </button>

            {/* Note: In a Next.js/Tailwind project, it's generally better to use a global CSS file
                or a CSS-in-JS library rather than inline <style> tags, but this works for a quick fix. */}
            <style jsx global>{`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                  filter: brightness(1);
                }
                50% {
                  transform: scale(1.1);
                  filter: brightness(0.8);
                }
                100% {
                  transform: scale(1);
                  filter: brightness(1);
                }
              }

              /* Use a separate class selector instead of 'button' to avoid specificity issues 
                 if you were using global styles, but sticking to your original approach for now */
              @media (max-width: 640px) {
                /* Target the motion.div's button directly */
                [style*="position: fixed"] button {
                  width: 30px !important;
                  height: 30px !important;
                }
                [style*="position: fixed"] button svg {
                  width: 15px !important;
                  height: 15px !important;
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTop;
