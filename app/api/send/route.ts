// app/api/send/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    const data = await resend.emails.send({
      from: "FromSun Energy <info@fromsunenergy.com>",
      to: ["info@fromsunenergy.com"],
      subject: `New Contact Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Solar Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Failed to send message:", error);
  }
}