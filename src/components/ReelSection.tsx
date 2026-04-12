import { motion } from "framer-motion"
import { demoReel } from "../data/projects"

export function ReelSection() {
  return (
    <section
      id="reel"
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
            Featured
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Demo reel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            {demoReel.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)]"
        >
          <div className="aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              src={demoReel.videoSrc}
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
