import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MY_EMAIL, // who sends (you)
    replyTo: email, // user’s email
    to: process.env.MY_EMAIL, // you receive it
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });

  return NextResponse.json({ success: true });
}
