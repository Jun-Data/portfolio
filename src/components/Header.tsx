import { navItems } from '@/data/navigation'
import { getTranslations } from 'next-intl/server'
import LocaleSwitcher from './LocaleSwitcher'

export default async function Header() {
  const t = await getTranslations('nav')

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
                  {t(item.id)}
                </a>
              </li>
            ))}
          </ul>

          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
