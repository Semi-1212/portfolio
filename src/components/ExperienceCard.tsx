import { motion } from "framer-motion"
import type { ExperienceItem } from "../data/content"

type Props = {
  item: ExperienceItem
  index: number
}

export function ExperienceCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          {item.organization}
        </p>
        <p className="text-xs font-medium text-white/40">{item.period}</p>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
        {item.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
