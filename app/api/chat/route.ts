import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // Return a static response for now as requested
        const staticReply = "Thank you for your inquiry! Our CubaNex AI Assistant is currently in maintenance mode for a major upgrade. Please visit our Telegram for instant support and updates.";

        return NextResponse.json({ reply: staticReply });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
