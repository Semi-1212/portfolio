import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { certifications } from "../data/content"

export function CertificationsSection() {
  if (certifications.length === 0) return null

  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0a0c] px-5 py-20 sm:px-6 sm:py-28"
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
            Credentials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Vendor and platform credentials that complement hands-on infrastructure
            work — update the list to match your verified badges.
          </p>
        </motion.div>

        <ul className="mt-14 flex flex-col gap-4">
          {certifications.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Award
                    className="h-5 w-5 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    {c.issuer} · {c.year}
                    {c.credentialId ? ` · ${c.credentialId}` : ""}
                  </p>
                </div>
              </div>
              {c.verifyUrl ? (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-[var(--color-accent)] hover:underline sm:self-center"
                >
                  Verify
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
