import BackgroundBlobs from '@/components/BackgroundBlobs'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function page() {
  return (
    <div className="flex flex-col gap-16 bg-[#6CABDD]">
      <BackgroundBlobs />
      <Hero />
      <Skills />
    </div>
  )
}
