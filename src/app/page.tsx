import BackgroundBlobs from '@/components/BackgroundBlobs'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experiences from '@/components/Experiences'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className="flex flex-col gap-16 bg-[#6CABDD]">
      <BackgroundBlobs />
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}
