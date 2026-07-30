"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoSrc: string;
  previewSrc: string;
  className?: string;
}

export default function VideoPlayer({
  videoSrc,
  previewSrc,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Unmuted play blocked, trying muted play fallback:", err);
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (e) {
          console.error("Video play completely failed:", e);
        }
      }
    }
  };

  return (
    <div
      onClick={!isPlaying ? handlePlay : undefined}
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer ${className}`}
    >
      {/* Glow Animation */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 bg-cyan-400/10 blur-2xl pointer-events-none"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Preview Image */}
      {!isPlaying && (
        <img
          src={previewSrc}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl z-20 pointer-events-none"
          alt="Preview"
        />
      )}

      {/* Dark overlay */}
      {!isPlaying && <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />}

      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
          isPlaying ? "opacity-100 z-20" : "opacity-0 z-0"
        }`}
        controls={isPlaying}
        loop
        playsInline
      />

      {/* Play Button */}
      {!isPlaying && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            handlePlay();
          }}
          type="button"
          aria-label="Play Video"
          className="absolute inset-0 z-30 m-auto flex items-center justify-center w-20 h-20 rounded-full bg-black/70 text-white border border-white/20 shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:scale-110 hover:border-[#00D2FF] transition cursor-pointer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-9 h-9 text-[#00D2FF] ml-1" fill="#00D2FF" />
        </motion.button>
      )}
    </div>
  );
}
