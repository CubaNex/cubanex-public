"use client";

import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
const supabase = createClient(supabaseUrl, supabaseKey);

const VipForm = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setMessageColor("#f87171"); // Red
      return;
    }

    setLoading(true);
    setMessage("");

    // ➤ Insert email into Supabase
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email: email.trim() }]);

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setMessage("This email is already registered on the network.");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
      setMessageColor("#f87171");
      return;
    }

    // ➤ Success
    setSubmitted(true);
    setEmail("");
    setMessage("Success! You're connected to the CubaNex signal.");
    setMessageColor("#4ade80"); // Green
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6 px-4">
      <div className="relative w-full max-w-2xl">
        {/* Outer Glow Halo */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#14F195]/20 via-[#00D2FF]/20 to-[#64A8F2]/20 rounded-3xl sm:rounded-full blur-xl opacity-70 pointer-events-none" />

        {/* Capsule Form Container */}
        <div className="relative w-full bg-gradient-to-b from-[#0B1528]/95 via-[#060D1B]/95 to-[#0B1528]/95 p-2 sm:p-3 rounded-3xl sm:rounded-full border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,210,255,0.15)] hover:border-[#00D2FF]/50 transition-all duration-500">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 w-full"
          >
            {/* Mail Icon + Input Field */}
            <div className="relative flex items-center flex-1 w-full pl-4 pr-2">
              <Mail className="w-5 h-5 text-[#00D2FF] flex-shrink-0 opacity-80" />
              <input
                type="email"
                placeholder="Enter your email for signal updates..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full pl-3 pr-4 py-3 sm:py-3.5 bg-transparent text-white placeholder-gray-400 font-medium text-sm sm:text-base outline-none border-none"
                required
              />
            </div>

            {/* Glowing CTA Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 sm:py-4 rounded-full min-w-[160px] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] shadow-[0_0_25px_rgba(20,241,149,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.7)] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>Connecting...</span>
              ) : (
                <>
                  <span>Join Signal</span>
                  <Send className="w-4 h-4 text-black fill-black" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Feedback Message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md"
            style={{ color: messageColor }}
          >
            {messageColor === "#4ade80" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VipForm;
