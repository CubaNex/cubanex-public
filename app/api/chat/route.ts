import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // Load knowledge base
        const kbPath = path.join(process.cwd(), "lib", "knowledge-base.json");
        let knowledgeBase = "";
        if (fs.existsSync(kbPath)) {
            knowledgeBase = fs.readFileSync(kbPath, "utf-8");
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const systemPrompt = `
      You are the CubaNex Assistant, a professional and helpful AI for the CubaNex crypto project.
      Your goal is to provide accurate information about CubaNex (CNEX) based ONLY on the provided knowledge base.
      
      Project Overview:
      - CubaNex (CNEX) is a blockchain project inspired by Cuban culture.
      - Built on BNB Smart Chain (BEP-20).
      - Total Supply: 100,000,000,000 CNEX.
      - Contract Address: 0xf073d173Ed309f8A208e6C183eFf858DbC882DbB
      - Founder: The Alchemist (Anonymous).
      
      Guidelines:
      1. Be professional, modern, and enthusiastic about the project.
      2. If you don't know the answer or it's not in the knowledge base, say you don't have that specific information and suggest joining the Telegram or following on X for updates.
      3. Answers should be strictly related to CubaNex.
      4. Support both English and Spanish queries. Respond in the language of the user.
      
      Knowledge Base (Pages and Global Context):
      ${knowledgeBase}
      
      User Question: ${message}
    `;

        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
