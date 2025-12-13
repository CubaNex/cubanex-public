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
    setIsPlaying(true);
    try {
      await videoRef.current?.play();
    } catch (err) {
      console.error("Video failed to play:", err);
    }
  };

  return (
    <div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-xl ${className}`}
    >
      {/* Glow Animation */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 bg-cyan-400/10 blur-2xl"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Preview Image */}
      {!isPlaying && (
        <img
          src={previewSrc}
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-20"
          alt="Preview"
        />
      )}

      {/* Dark overlay */}
      {!isPlaying && <div className="absolute inset-0 bg-black/40 z-10"></div>}

      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
          isPlaying ? "opacity-100 z-20" : "opacity-0 z-0"
        }`}
        controls={isPlaying} // show controls only after play
        loop
        playsInline
        muted={false}
      />

      {/* Play Button */}
      {!isPlaying && (
        <motion.button
          onClick={handlePlay}
          className="absolute inset-0 z-30 m-auto flex items-center justify-center w-20 h-20 rounded-full bg-black/60 text-white shadow-lg hover:scale-105 transition cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-10 h-10" />
        </motion.button>
      )}
    </div>
  );
}
