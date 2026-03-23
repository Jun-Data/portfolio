'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Globe } from 'lucide-react'
import { useTransition } from 'react'
import { setLocaleCookie } from '@/actions/locale'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const t = useTranslations('langSwitch')
  const [isPending, startTransition] = useTransition()

  function handleSwitch() {
    startTransition(async () => {
      await setLocaleCookie(locale === 'ko' ? 'en' : 'ko')
    })
  }
  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="min-w-22 flex items-center gap-1.5 t ext-sm font-bold text-navy/60 hover:text-navy transition-colors disabled:opacity-50 cursor-pointer"
    >
      <Globe size={16} />
      {t('label')}
    </button>
  )
}
