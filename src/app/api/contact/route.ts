import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  // transporter SMTP (infos à mettre dans .env.local)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Demande de contact : ${data.subject}`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nEntreprise: ${data.company}\nSujet: ${data.subject}\n\nMessage:\n${data.message}`,
      html: `<p><b>Nom:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Téléphone:</b> ${data.phone}</p><p><b>Entreprise:</b> ${data.company}</p><p><b>Sujet:</b> ${data.subject}</p><p><b>Message:</b><br/>${data.message.replace(/\n/g, '<br/>')}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 