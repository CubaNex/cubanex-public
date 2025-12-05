"use client";

import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";

// ✅ Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const VipForm = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("");

  // ✅ Email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email.");
      setMessageColor("#f87171"); // Red
      return;
    }

    // ➤ Insert email into Supabase
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email: email.trim() }]);

    if (error) {
      if (error.code === "23505") {
        setMessage("This email is already registered.");
      } else {
        setMessage("Subscription failed. Try again.");
      }
      setMessageColor("#f87171");
      return;
    }

    // ➤ Success
    setSubmitted(true);
    setEmail("");
    setMessage("Thank you! You’ll be notified first.");
    setMessageColor("#4ade80"); // Green
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-[#071219] p-6 sm:p-8 rounded-3xl border border-[#14f19533]/40 shadow-[0_0_40px_#00eaff66]/30">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 w-full px-5 py-3 sm:py-4 rounded-full bg-transparent border border-[#14F195]/10 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#14F195]/40 "
            required
          />
          <button
            type="submit"
            className="px-6 py-3 sm:py-4 rounded-full min-w-[180px] text-[#000] font-medium bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] shadow-md hover:opacity-90 transition w-full sm:w-auto"
          >
            Join
          </button>
        </form>

        {message && (
          <p
            className="text-center mt-4 text-sm font-medium"
            style={{ color: messageColor }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VipForm;
