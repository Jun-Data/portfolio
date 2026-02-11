import BackgroundBlobs from '@/components/BackgroundBlobs'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experiences from '@/components/Experiences'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className="min-h-screen bg-[#6CABDD]">
      <BackgroundBlobs />
      <main className="relative max-w-7xl mx-auto px-6 py-6 flex flex-col gap-16">
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
