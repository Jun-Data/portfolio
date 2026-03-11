'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionResult = { success: true } | { success: false; error: string }

export async function sendEmail(data: {
  email: string
  message: string
}): Promise<ActionResult> {
  const { email, message } = data
  if (!email.trim() || !message.trim()) {
    return { success: false, error: 'Please fill in both fields' }
  }
  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: ['jun9048@naver.com'],
    replyTo: email,
    subject: `Portfolio Contact from ${email}`,
    text: message,
  })
  if (error) {
    console.error('Resend error:', error)
    return { success: false, error: error.message }
  }
  return { success: true }
}
