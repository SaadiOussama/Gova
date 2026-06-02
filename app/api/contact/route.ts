import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    await transporter.sendMail({
      from: `"GOVA Contact" <${process.env.MAIL_FROM_ADDRESS ?? "no-reply@gova.dz"}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.MAIL_USERNAME,
      replyTo: email,
      subject: `[GOVA] ${subject} — ${name}`,
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
        
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1A73E8 0%,#0d5bba 100%);padding:36px 40px;text-align:center">
            <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-1px">GOVA</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:6px">Nouveau message de contact</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px">

            <!-- Fields -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e8edf5">
              <tr style="background:#f8faff">
                <td style="padding:14px 18px;font-size:12px;font-weight:700;color:#6b7a99;text-transform:uppercase;letter-spacing:0.5px;width:120px">Nom</td>
                <td style="padding:14px 18px;font-size:15px;color:#1a1f36;font-weight:600">${name}</td>
              </tr>
              <tr style="border-top:1px solid #e8edf5">
                <td style="padding:14px 18px;font-size:12px;font-weight:700;color:#6b7a99;text-transform:uppercase;letter-spacing:0.5px">Email</td>
                <td style="padding:14px 18px;font-size:15px"><a href="mailto:${email}" style="color:#1A73E8;text-decoration:none;font-weight:500">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #e8edf5;background:#f8faff">
                <td style="padding:14px 18px;font-size:12px;font-weight:700;color:#6b7a99;text-transform:uppercase;letter-spacing:0.5px">Téléphone</td>
                <td style="padding:14px 18px;font-size:15px;color:#1a1f36">${phone ?? "—"}</td>
              </tr>
              <tr style="border-top:1px solid #e8edf5">
                <td style="padding:14px 18px;font-size:12px;font-weight:700;color:#6b7a99;text-transform:uppercase;letter-spacing:0.5px">Sujet</td>
                <td style="padding:14px 18px">
                  <span style="background:#e8f0fe;color:#1A73E8;font-size:13px;font-weight:600;padding:4px 12px;border-radius:20px">${subject}</span>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:28px">
              <div style="font-size:12px;font-weight:700;color:#6b7a99;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px">Message</div>
              <div style="background:#f8faff;border:1px solid #e8edf5;border-radius:10px;padding:20px;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</div>
            </div>

            <!-- CTA -->
            <div style="margin-top:28px;text-align:center">
              <a href="mailto:${email}" style="display:inline-block;background:#1A73E8;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:30px;text-decoration:none;letter-spacing:0.3px">
                Répondre à ${name}
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8faff;border-top:1px solid #e8edf5;padding:20px 40px;text-align:center">
            <div style="font-size:12px;color:#9aa3b8">Ce message a été envoyé depuis le formulaire de contact <strong>gova.dz</strong></div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
