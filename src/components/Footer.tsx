import { profile, socialLinks } from "../data/content"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {profile.fullName}. System administrator portfolio.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-white/45">
          {socialLinks.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
