import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { SkillsSection } from "./components/SkillsSection"
import { CertificationsSection } from "./components/CertificationsSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { AboutSection } from "./components/AboutSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import { SeoHead } from "./components/SeoHead"
import { Analytics } from "./components/Analytics"

function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-surface)] text-white antialiased">
      <SeoHead />
      <Analytics />
      <a
        href="#main-content"
        className="skip-link focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1a1208] focus:outline-none"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
