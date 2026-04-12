import { motion } from "framer-motion"
import { Clapperboard, Palette, Volume2 } from "lucide-react"

const skills = [
  {
    icon: Clapperboard,
    title: "Editorial",
    body: "Pacing, structure, and clarity — from assembly to fine cut.",
  },
  {
    icon: Palette,
    title: "Color",
    body: "Consistent looks, skin tones, and deliverables-ready passes.",
  },
  {
    icon: Volume2,
    title: "Sound",
    body: "Dialogue polish, ambience beds, and simple sound design.",
  },
] as const

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0a0c] px-5 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              About me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Editing with intent
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              I&apos;m Seid Barsido, a video editor working across commercial,
              narrative, and branded pieces. I partner with directors, producers,
              and clients to shape footage into a clear story — pacing that holds
              attention, cuts that feel motivated, and sound and picture that
              support the idea instead of distracting from it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              I keep projects moving with organized timelines, predictable
              handoffs, and exports tailored to your platform — whether that is
              broadcast, web, or social. I work remotely with teams worldwide,
              using professional editing, color, and finishing workflows in tools
              such as DaVinci Resolve, Premiere Pro, and After Effects.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-5"
              >
                <s.icon
                  className="h-6 w-6 text-[var(--color-accent)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
