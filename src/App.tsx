import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ReelSection } from "./components/ReelSection"
import { WorkSection } from "./components/WorkSection"
import { AboutSection } from "./components/AboutSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-surface)] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <ReelSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
