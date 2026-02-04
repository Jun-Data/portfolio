'use client'

import { ClayButton } from '@/components/ClayButton'
import { ClayCard } from '@/components/ClayCard'
import Tagline from '@/components/Tagline'

export function Hero() {
  return (
    <section id="home" className="grid grid-cols-2 gap-8 items-center">
      {/* 왼쪽 영역 */}
      <div className="space-y-8">
        {/* 인사 태그 */}
        <Tagline>HELLO THERE! 👋</Tagline>
        {/* 메인 제목 */}
        <h1 className="text-8xl font-black text-white leading-tight clay-text">
          FULL STACK <br />
          <span className="text-navy">CREATIVE</span>
          <br />
          DEVELOPER
        </h1>

        <p className="text-xl text-navy/80 font-semibold max-w-md">
          I build web experiences that feel as good as they look. Focused on
          React, interactive UI, and playful interactions.
        </p>

        <div className="flex gap-4">
          <ClayButton variant="primary">View Work</ClayButton>
          <ClayButton variant="secondary">Contact Me</ClayButton>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md animate-float">
          <ClayCard variant="purple" className="p-8">
            <h3 className="text-3xl font-black text-white">KEEP IT GOING</h3>
            <p className="text-white/80 mt-2">
              As a challenging person, I enjoy new things and exploring
              different fields
            </p>

            {/* 통계 그리드 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <span className="block text-3xl font-black text-gold">1+</span>
                <span className="text-sm text-white/80">Years Experience</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <span className="block text-3xl font-black text-gold">3+</span>
                <span className="text-sm text-white/80">Projects</span>
              </div>
            </div>
          </ClayCard>
        </div>
      </div>
    </section>
  )
}
