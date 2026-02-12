'use client'

import { ClayCard } from './ClayCard'
import { ClayButton } from './ClayButton'
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-6">
      <div className="max-w-5xl mx-auto">
        <ClayCard variant="yellow" className="text-center py-16 px-6">
          <h2 className="text-5xl font-black text-navy mb-6">
            READY TO COLLABORATE?
          </h2>
          <p className="text-xl text-navy/80 font-medium mb-10">
            want to share your work or discuss an opportunity? <br /> lets
            connect!
          </p>

          {/* Form */}
          <form
            className="max-w-lg mx-auto flex flex-col gap-4 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(28,44,91,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] transition-all"
            />
            <textarea
              rows={4}
              placeholder="How can I help you?"
              className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-navy placeholder-navy/50 font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 shadow-[inset_3px_3px_6px_rgba(28,44,91,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] resize-none transition-all"
            />
            <ClayButton
              variant="primary"
              className="w-full mt-2 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </ClayButton>
          </form>
        </ClayCard>
      </div>
    </section>
  )
}
