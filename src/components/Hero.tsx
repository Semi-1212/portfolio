import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-accent)_32%,transparent),transparent_65%)] blur-3xl sm:h-[36rem] sm:w-[36rem]" />
        <div className="absolute -right-1/4 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.2),transparent_65%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
        >
          System administrator · Infrastructure · Operations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Reliable systems.
          <span className="block text-white/55">Documented change.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          I design, maintain, and improve server, identity, and hybrid cloud
          environments — with security baselines, monitoring, and automation so
          teams can work without friction.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#skills"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#1a1208] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View skills
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
          >
            Experience
          </a>
        </motion.div>
        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/40 transition-colors hover:text-white/60"
        >
          <ArrowDown className="h-4 w-4" aria-hidden />
          Scroll
        </motion.a>
      </div>
    </section>
  )
}
