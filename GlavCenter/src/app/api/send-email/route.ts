import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { to, subject, text, html } = await req.json();

        // создаем транспорт
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // отправляем письмо
        await transporter.sendMail({
            from: `"Мой сайт" <${process.env.SMTP_USER}>`,
            to,
            subject,
            text,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Ошибка при отправке письма:", err);
        return NextResponse.json(
            { error: "Не удалось отправить письмо" },
            { status: 500 }
        );
    }
}
