'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionResult = | {success: true} | {success:false; error:string}

export async function sendEmail(data: {email:string message:string}):Promise<ActionResult> {
  const {email, message} = data
  if (!email.trim() || !message.trim()) {
    return {success:false, error: 'Please fill in both fields'}
  }

}
