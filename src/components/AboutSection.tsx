import { motion } from "framer-motion"
import { Server, ShieldCheck, Workflow } from "lucide-react"

const pillars = [
  {
    icon: Server,
    title: "Infrastructure",
    body: "Stable servers, storage, and services — patched, backed up, and sized for real workload.",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    body: "Identity hardening, least privilege, logging, and repeatable controls aligned with policy.",
  },
  {
    icon: Workflow,
    title: "Automation & process",
    body: "Scripts and runbooks that reduce toil: onboarding, reporting, and recurring maintenance.",
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
              Operations you can trust
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              I am a system administrator focused on practical outcomes: fewer
              outages, faster recovery, and IT that scales with the business. I
              work closely with stakeholders to translate requirements into
              architecture, standards, and support models that hold up under
              pressure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              Whether the stack is mostly on-prem, hybrid Microsoft, or a mix of
              Linux and Windows, I prioritize clear documentation, measured
              change windows, and communication during incidents so everyone knows
              what is happening and when it is resolved.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-5"
              >
                <p.icon
                  className="h-6 w-6 text-[var(--color-accent)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
