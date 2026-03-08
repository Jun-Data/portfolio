'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionResult = | {success: true} | {success:false; error:string}

export async function sendEmail(data: {email:string message:string}):Promise<ActionResult> {
  const {email, message} = data
  if (!email.trim() || !message.trim()) {
    return {success:false, error: 'Please fill in both fields'}
  }
const {error} = await resend.emails.send({
  from: 'Portfolio Contact <onboarding@resend.dev>',
  to: ['jun.hyunjun.lee@gmail.com'],
  replyTo: email,
  subject: `Portfolio Contact from ${email}`,
  text: message,
})
if(error) {
  return {success: false, error: 'Failed to send email'}
}
return {success: true}
}
