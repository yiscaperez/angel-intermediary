// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const acceptsJson =
    req.headers.get("accept")?.includes("application/json") ||
    req.headers.get("x-requested-with") === "XMLHttpRequest";

  try {
    const formData = await req.formData();
    const name = (formData.get("name") ?? "").toString();
    const email = (formData.get("email") ?? "").toString();
    const phone = (formData.get("phone") ?? "").toString();
    const organization = (formData.get("organization") ?? "").toString();
    const message = (formData.get("message") ?? "").toString();

    // ✅ Narrow env types from string | undefined -> string
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
      console.error("Missing SMTP_USER/SMTP_PASS");
      return acceptsJson
        ? NextResponse.json({ ok: false, error: "Email not configured" }, { status: 500 })
        : NextResponse.redirect(new URL("/?sent=0#contact", req.url), { status: 303 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmaail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: user,
      to: "angelintermediary@gmail.com",
      subject: `New Callback Request from ${name || email || "Website visitor"}`,
      text: `Name: ${name || "N/A"}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}
Organization: ${organization || "N/A"}
Message:
${message || "(no message)"}`
    });

    if (acceptsJson) return NextResponse.json({ ok: true });
    return NextResponse.redirect(new URL("/?sent=1#contact", req.url), { status: 303 });
  } catch (err) {
    console.error(err);
    if (acceptsJson) {
      return NextResponse.json({ ok: false, error: "Email failed" }, { status: 500 });
    }
    return NextResponse.redirect(new URL("/?sent=0#contact", req.url), { status: 303 });
  }
}
