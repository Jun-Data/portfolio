import { ClayCard } from '@/components/ClayCard'
import Tagline from '@/components/Tagline'

export default function Hero() {
  return (
    <section id="home" className="flex-1 grid grid-cols-2 gap-8 items-center">
      {/* 왼쪽 영역 */}
      <div className="space-y-8">
        {/* 인사 태그 */}
        <Tagline>HELLO WORLD! 🚀</Tagline>
        {/* 메인 제목 */}
        <h1 className="text-7xl font-black text-navy leading-tight clay-text">
          FRONT END <br />
          <span className="text-blue">ADVENTUROUS</span>
          <br />
          DEVELOPER
        </h1>

        <p className="text-xl text-navy/80 font-semibold max-w-md">
          I picture someone using my interface for the first time. The endless
          tweaking to get there is the challenge I enjoy most
        </p>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md animate-float">
          <ClayCard variant="purple" className="p-8">
            <h3 className="text-3xl font-black text-white">KEEP IT GOING</h3>
            <p className="text-white/80 mt-2">WORK IN PROGRESS</p>

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
