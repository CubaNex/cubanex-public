"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
            }}
          >
            <button
              onClick={scrollToTop}
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
              }}
            >
              <ArrowUp size={16} />
            </button>

            <style>{`
          @keyframes pulse {
            0% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.1); filter: brightness(0.8); }
            100% { transform: scale(1); filter: brightness(1); }
          }

          @media (max-width: 640px) {
            button {
              width: 30px !important;
              height: 30px !important;
            }
            button svg {
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

// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const BackToTop: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsVisible(window.scrollY > 100);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           onClick={scrollToTop}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 0.5 }}
//           exit={{ opacity: 0, scale: 0 }}
//           transition={{ duration: 0.3 }}
//           style={{
//             position: "fixed",
//             bottom: 30,
//             right: 30,
//             width: 36,
//             height: 36,
//             borderRadius: "50%",
//             border: "none",
//             cursor: "pointer",
//             zIndex: 9999,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#fff",
//             background:
//               //   "linear-gradient(90deg, #FFB74A 20%, #FFA726 36%, #FF8F00 100%)",
//               //   "linear-gradient(0deg, #C766EF 20%, #7928D2 36%, #2B0C52 100%)",
//               //   "linear-gradient(10deg, #14F195 0%, #80ECFF 50%, #64A8F2 100%)",
//               "linear-gradient(90deg, #FFB74A 20%, #FFA72 36%, #FF8F00 100%)",

//             boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//             animation: "pulse 1.8s infinite alternate",
//           }}
//         >
//           <ArrowUp size={16} />
//           <style>{`
//             @keyframes pulse {
//               0% { transform: scale(1); filter: brightness(1); }
//               50% { transform: scale(1.1); filter: brightness(0.8); }
//               100% { transform: scale(1); filter: brightness(1); }
//             }

//             @media (max-width: 640px) {
//               button {
//                 width: 30px !important;
//                 height: 30px !important;
//               }
//               button svg {
//                 width: 15px !important;
//                 height: 15px !important;
//               }
//             }
//           `}</style>
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// export default BackToTop;
