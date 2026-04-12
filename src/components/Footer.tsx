export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Seid Barsido. System administrator portfolio.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-white/45">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.credly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Certifications
          </a>
        </div>
      </div>
    </footer>
  )
}
