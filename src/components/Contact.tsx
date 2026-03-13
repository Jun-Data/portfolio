'use client'

import { useState } from 'react'
import { ClayCard } from './ClayCard'
import { ClayButton } from './ClayButton'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { sendEmail } from '@/actions/contact'

type FormStatus = 'idle' | 'loading' | 'success'

export default function Contact() {
  const [email, setEmail] = useState('') // 이메일 입력값
  const [message, setMessage] = useState('') // 메세지 입력값
  const [status, setStatus] = useState<FormStatus>('idle') // 폼 상태
  const [emailError, setEmailError] = useState('') // 이메일 필드 에러
  const [messageError, setMessageError] = useState('') // 메세지 필드 에러
  const [serverError, setServerError] = useState('') // 서버 에러

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    let hasError = false

    if (!email.trim()) {
      setEmailError('Please enter your email address')
      hasError = true
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address')
      hasError = true
    }
    if (!message.trim()) {
      setMessageError('Please enter your message')
      hasError = true
    }
    if (hasError) return
    setStatus('loading')
    setServerError('')

    const result = await sendEmail({
      email: email.trim(),
      message: message.trim(),
    })
    if (result.success) {
      setStatus('success')
      setEmail('')
      setMessage('')
    } else {
      setStatus('idle')
      setServerError(result.error)
    }
  }

  return (
    <section id="contact" className="py-6">
      <div className="max-w-4xl mx-auto">
        <ClayCard
          variant="yellow"
          className="text-center py-16 px-6 hover:scale-100 active:scale-100"
        >
          <h2 className="text-5xl font-black text-navy mb-6">
            READY TO COLLABORATE ?
          </h2>
          <p className="text-xl text-navy/80 font-medium mb-10">
            Want to share your work or discuss an opportunity ? <br /> Lets
            connect !
          </p>

          {/* Form */}
          {status === 'success' ? (
            // 성공 화면
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 py-8">
              <CheckCircle size={48} className="text-navy" />
              <p className="text-2xl font-bold text-navy">Message Sent!</p>
              <p className="font-medium text-navy/70">
                Thank you for reaching out. I will get back to you soon.
              </p>
              <ClayButton variant="primary" onClick={() => setStatus('idle')}>
                Done
              </ClayButton>
            </div>
          ) : (
            <form
              className="max-w-2xl mx-auto flex flex-col gap-4 text-left"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError('')
                }}
                onBlur={() => {
                  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setEmailError('Please enter a valid email address')
                  }
                }}
                disabled={status === 'loading'}
                className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-navy placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(12,74,110,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] transition-all disabled:opacity-50"
              />
              {emailError && (
                <p className="text-red-600 font-medium px-1 text-sm flex items-center gap-1">
                  <AlertCircle size={16} />
                  {emailError}
                </p>
              )}
              <textarea
                rows={4}
                placeholder="How can I help you?"
                value={message}
                onChange={(m) => {
                  setMessage(m.target.value)
                  if (messageError) setMessageError('')
                }}
                disabled={status === 'loading'}
                className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-navy placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(12,74,110,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] resize-none transition-all disabled:opacity-50"
              />
              {messageError && (
                <p className="text-red-600 font-medium px-1 text-sm flex items-center gap-1">
                  <AlertCircle size={16} />
                  {messageError}
                </p>
              )}
              {serverError && (
                <p className="text-red-600 font-medium px-1 text-sm flex items-center gap-1">
                  <AlertCircle size={16} />
                  {serverError}
                </p>
              )}
              <ClayButton
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                className="w-full mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </ClayButton>
            </form>
          )}
        </ClayCard>
      </div>
    </section>
  )
}
