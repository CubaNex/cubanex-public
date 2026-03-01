"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Orbitron, Work_Sans } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500"] });

interface Message {
    role: "user" | "bot";
    content: string;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            content: "Hello! I'm the CubaNex Assistant. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        // Simulate a brief wait to keep the "AI" feel
        setTimeout(() => {
            const staticReply = "CubaNex AI is currently in maintenance mode for performance upgrades. Our advanced features will be back online soon! Check out our social media for updates.";
            setMessages((prev) => [...prev, { role: "bot", content: staticReply }]);
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-end">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`mb-4 w-[350px] sm:w-[400px] h-[500px] bg-[#010813] border border-[#1F2E47] rounded-2xl shadow-2xl flex flex-col overflow-hidden ${workSans.className}`}
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#7928D2] to-[#2B0C52] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center border border-white/20">
                                    <Image src="/logos/logo.png" alt="CubaNex" width={30} height={30} className="object-contain" />
                                </div>
                                <div>
                                    <h3 className={`${orbitron.className} text-white text-sm font-bold`}>CubaNex AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-white/70 uppercase tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('/abvbg.svg')] bg-fixed bg-center bg-no-repeat bg-contain">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user"
                                            ? "bg-[#7928D2] text-white rounded-tr-none"
                                            : "bg-[#1F2E47] text-gray-100 rounded-tl-none border border-white/5"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1F2E47] p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                                        <Loader2 size={16} className="text-[#00DED4] animate-spin" />
                                        <span className="text-xs text-gray-400 italic">Thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#081420] border-t border-[#1F2E47]">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask about CubaNex..."
                                    className="w-full bg-[#010813] border border-[#1F2E47] rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7928D2]/50 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#FFB74A] hover:text-[#FFB74A]/80 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="text-[10px] text-center mt-2 text-gray-500">
                                Powered by CubaNex AI & Gemini
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7928D2] via-[#2B0C52] to-[#7928D2] shadow-[0_0_20px_rgba(121,40,210,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isOpen ? <X size={28} className="relative z-10" /> : <MessageSquare size={28} className="relative z-10" />}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB74A] rounded-full border-2 border-[#010813] animate-bounce" />
                )}
            </button>
        </div>
    );
};

export default ChatBot;
