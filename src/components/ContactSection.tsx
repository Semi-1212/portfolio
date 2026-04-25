import { motion } from "framer-motion"
import { Calendar, Download, Mail, MapPin, Phone } from "lucide-react"
import { profile, resumeHref, resume } from "../data/content"

const formAction = import.meta.env.VITE_FORMSPREE_ACTION?.trim()
const calendlyUrl = import.meta.env.VITE_CALENDLY_URL?.trim()

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
          className="rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_45%),#0f0f12] p-8 sm:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk infrastructure
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Open to full-time roles, contracts, or project-based work. Share your
            environment, challenges, and timeline — I usually respond within one
            business day.
          </p>
          <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
              {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
            >
              <Phone className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
              {profile.phone}
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
            <a
              href={resumeHref()}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
            >
              <Download className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
              {resume.label}
            </a>
            {calendlyUrl ? (
              <>
                <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
                >
                  <Calendar className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
                  Schedule a call
                </a>
              </>
            ) : null}
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
            <span className="inline-flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-white/35" aria-hidden />
              On-site or remote
            </span>
          </div>

          {formAction ? (
            <form
              action={formAction}
              method="POST"
              className="mt-10 grid max-w-lg gap-4 border-t border-white/[0.08] pt-10"
            >
              <input type="hidden" name="_subject" value="Portfolio site inquiry" />
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[var(--color-accent)]/0 transition-[border-color,box-shadow] focus:border-[var(--color-accent)]/50 focus:ring-2 focus:ring-[var(--color-accent)]/25"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[var(--color-accent)]/0 transition-[border-color,box-shadow] focus:border-[var(--color-accent)]/50 focus:ring-2 focus:ring-[var(--color-accent)]/25"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/45"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[var(--color-accent)]/0 transition-[border-color,box-shadow] focus:border-[var(--color-accent)]/50 focus:ring-2 focus:ring-[var(--color-accent)]/25"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#1a1208] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send message
              </button>
            </form>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
