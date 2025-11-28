import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Email from "@/lib/model";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json({ message: "Email submitted successfully" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
