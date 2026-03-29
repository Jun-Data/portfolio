import { ClayCard } from '@/components/ClayCard'
import Tagline from '@/components/Tagline'
import { getTranslations } from 'next-intl/server'
import { projects } from '@/data/projects'

const CAREER_START = new Date('2025-07-21')

export default async function Hero() {
  const t = await getTranslations('hero')
  const now = new Date()
  const years = Math.floor(
    (now.getTime() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365),
  )
  const completedCount = projects.filter((p) => p.status === 'completed').length

  return (
    <section id="home" className="flex-1 grid grid-cols-2 gap-8 items-center">
      {/* 왼쪽 영역 */}
      <div className="space-y-8">
        {/* 인사 태그 */}
        <Tagline>{t('tagline')}</Tagline>
        {/* 메인 제목 */}
        <h1 className="text-7xl font-black text-navy leading-tight clay-text">
          {t('title1')} <br />
          <span className="text-blue">{t('title2')}</span>
          <br />
          {t('title3')}
        </h1>

        <p className="text-xl text-navy/80 font-semibold max-w-md">
          {t('description')}
        </p>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md animate-float">
          <ClayCard variant="purple" className="p-8">
            <h3 className="text-3xl font-black text-white">{t('cardTitle')}</h3>
            <p className="text-white/80 mt-2">{t('cardSubtitle')}</p>

            {/* 통계 그리드 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <span className="block text-3xl font-black text-gold">
                  {years}+
                </span>
                <span className="text-sm text-white/80">
                  {t('yearsExperience')}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <span className="block text-3xl font-black text-gold">
                  {completedCount}+
                </span>
                <span className="text-sm text-white/80">{t('projects')}</span>
              </div>
            </div>
          </ClayCard>
        </div>
      </div>
    </section>
  )
}
