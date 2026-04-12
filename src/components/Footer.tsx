export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Seid Barsido. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-white/45">
          <a href="#" className="transition-colors hover:text-white">
            Vimeo
          </a>
          <a href="#" className="transition-colors hover:text-white">
            YouTube
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
