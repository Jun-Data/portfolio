import BackgroundBlobs from '@/components/BackgroundBlobs'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experiences from '@/components/Experiences'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Header from '@/components/Header'

export default function Page() {
  return (
    <div className="min-h-screen bg-sky">
      <BackgroundBlobs />
      <Navigation />
      <div className="h-svh flex flex-col max-w-6xl mx-auto px-6">
        <Header />
        <Hero />
      </div>
      <main className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col gap-16">
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
