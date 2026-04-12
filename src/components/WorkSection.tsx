import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { VideoProjectCard } from "./VideoProjectCard"

export function WorkSection() {
  return (
    <section
      id="work"
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
            Selected projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Hover (or focus) cards to preview cuts. Replace sample sources in{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-sm text-white/80">
              src/data/projects.ts
            </code>{" "}
            with your exports or hosted files.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <VideoProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
