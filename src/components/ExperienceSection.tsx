import { motion } from "framer-motion"
import { experienceItems } from "../data/content"
import { ExperienceCard } from "./ExperienceCard"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Background
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Recent roles and initiatives focused on reliability, security
            hygiene, clear documentation, and predictable change management.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-6">
          {experienceItems.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
