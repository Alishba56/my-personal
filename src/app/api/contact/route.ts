import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const { name, email, message }: ContactFormData = await request.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email Error:', error)

    // Use type assertion to access `.message` safely
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
