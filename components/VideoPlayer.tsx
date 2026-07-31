"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

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
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false;
        setIsMuted(false);
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Unmuted play blocked, trying muted play fallback:", err);
        try {
          videoRef.current.muted = true;
          setIsMuted(true);
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (e) {
          console.error("Video play completely failed:", e);
        }
      }
    }
  };

  const handlePause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      onClick={!isPlaying ? handlePlay : undefined}
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer group ${className}`}
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
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
        onVolumeChange={() => {
          if (videoRef.current) setIsMuted(videoRef.current.muted);
        }}
      />

      {/* Overlay Controls when Video is Playing (Mobile & Desktop Friendly) */}
      {isPlaying && (
        <>
          {/* Top-Right Floating Stop/Pause Button */}
          <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
            <button
              onClick={handlePause}
              type="button"
              aria-label="Pause Video"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs sm:text-sm font-medium border border-white/20 shadow-lg backdrop-blur-md transition active:scale-95 cursor-pointer"
            >
              <Pause className="w-4 h-4 text-[#00D2FF]" />
              <span>Pause</span>
            </button>
            <button
              onClick={handleStop}
              type="button"
              aria-label="Stop Video"
              className="flex items-center justify-center p-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-md transition active:scale-95 cursor-pointer"
              title="Stop & Close"
            >
              <X className="w-4 h-4 text-red-400" />
            </button>
          </div>

          {/* Top-Left Floating Mute Toggle */}
          <div className="absolute top-3 left-3 z-30">
            <button
              onClick={handleToggleMute}
              type="button"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs sm:text-sm font-medium border border-white/20 shadow-lg backdrop-blur-md transition active:scale-95 cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#00D2FF]" />
                  <span className="hidden sm:inline">Mute</span>
                </>
              )}
            </button>
          </div>
        </>
      )}

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
