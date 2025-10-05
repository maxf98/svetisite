// app/api/contact/route.ts (App Router)
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log("📧 Contact API called");

  try {
    const { name, email, message } = await req.json();
    console.log("📝 Form data:", {
      name,
      email,
      message: message?.substring(0, 50) + "...",
    });

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY environment variable not set");
      return NextResponse.json(
        { error: "RESEND_API_KEY not configured" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_RECEIVER) {
      console.error("❌ CONTACT_RECEIVER environment variable not set");
      return NextResponse.json(
        { error: "CONTACT_RECEIVER not configured" },
        { status: 500 }
      );
    }

    console.log("📬 Sending email via Resend...");
    const { data, error } = await resend.emails.send({
      from: "Contact Form <maxfest@quards.app>", // Replace with your domain
      to: [process.env.CONTACT_RECEIVER!],
      replyTo: email,
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message,
        },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error in contact API:", err);
    console.error("Error details:", {
      name: err instanceof Error ? err.name : "Unknown",
      message: err instanceof Error ? err.message : "Unknown error",
      stack: err instanceof Error ? err.stack : "No stack trace",
    });
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
