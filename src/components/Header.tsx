import { navItems } from '@/data/navigation'
import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative pt-6">
      <nav className="flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black bg-blue text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            J.
          </span>
          <span className="text-3xl font-black text-navy">Dev</span>
        </div>
        {/* 네비게이션 */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-lg font-bold text-navy/70 hover:text-navy transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-1.5 text-sm font-bold text-navy/60">
            <Globe size={16} />
            한국어
          </button>
        </div>
      </nav>
    </header>
  )
}
