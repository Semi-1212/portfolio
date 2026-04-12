import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(232,165,75,0.12),transparent_45%),#0f0f12] p-8 sm:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build the cut
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Share a brief, references, and timeline. I typically reply within one
            business day.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
              hello@example.com
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
            <span className="inline-flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-white/35" aria-hidden />
              Remote · Worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
