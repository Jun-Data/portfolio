'use client'

import { useState } from 'react'
import { ClayCard } from './ClayCard'
import { ClayButton } from './ClayButton'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { sendEmail } from '@/actions/contact'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [email, setEmail] = useState('') // 이메일 입력값
  const [message, setMessage] = useState('') // 메세지 입력값
  const [status, setStatus] = useState<FormStatus>('idle') // 현재 상태
  const [errorMessage, setErrorMessage] = useState('') // 에러 메세지

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in both fields')
      return
    }
    setStatus('loading')
    setErrorMessage('')
    const result = await sendEmail({
      email: email.trim(),
      message: message.trim(),
    })
    if (result.success) {
      setStatus('success')
      setEmail('')
      setMessage('')
    } else {
      setStatus('error')
      setErrorMessage(result.error)
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
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-navy placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(12,74,110,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] transition-all disabled:opacity-50"
              />
              <textarea
                rows={4}
                placeholder="How can I help you?"
                value={message}
                onChange={(m) => setMessage(m.target.value)}
                disabled={status === 'loading'}
                className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-navy placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(12,74,110,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] resize-none transition-all disabled:opacity-50"
              />
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-700 font-medium px-2">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
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
