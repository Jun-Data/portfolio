'use client'

import { navItems } from '@/data/navigation'
import { useScrollPast } from '@/hooks/useScrollPast'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ArrowUp } from 'lucide-react'

export default function Navigation() {
  const isScrolled = useScrollPast(100)
  const activeSection = useActiveSection([
    'home',
    'skills',
    'projects',
    'experiences',
    'contact',
  ])
  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10 pointer-events-none'
      }`}
    >
      <nav className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-full py-3 px-2 flex flex-col items-center gap-4 shadow-[8px_8px_16px_rgba(28,44,91,0.1),inset_1px_1px_2px_rgba(255,255,255,0.8)]">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className={`group relative p-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-gold text-navy shadow-[2px_2px_5px_rgba(0,0,0,0.1)] scale-110' : 'text-navy/60 hover:text-navy hover:bg-white/50'}`}
          >
            <span className="absolute right-full px-3 py-1 bg-navy rounded-lg text-white text-xs font-bold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
              {item.label}
            </span>
            <item.icon size={20} />
          </a>
        ))}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 bg-navy/5 rounded-full transition-all duration-300 hover:bg-navy hover:text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </nav>
    </div>
  )
}
