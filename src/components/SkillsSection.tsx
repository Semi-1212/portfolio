import { motion } from "framer-motion"
import { skillGroups } from "../data/content"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/[0.06] bg-[#070708] px-5 py-20 sm:px-6 sm:py-28"
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
            Technical profile
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & tooling
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Breadth across on-prem, cloud, identity, networking, and day-two
            operations — the stack most organizations rely on for stable IT
            delivery.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-6"
            >
              <h3 className="font-display text-lg font-bold text-white">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--color-accent)] before:opacity-80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
