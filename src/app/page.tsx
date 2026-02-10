import BackgroundBlobs from '@/components/BackgroundBlobs'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function page() {
  return (
    <div className="flex flex-col gap-16 bg-[#6CABDD]">
      <BackgroundBlobs />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}
