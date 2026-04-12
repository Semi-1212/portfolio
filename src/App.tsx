import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { SkillsSection } from "./components/SkillsSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { AboutSection } from "./components/AboutSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-surface)] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
