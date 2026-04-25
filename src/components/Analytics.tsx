import { useEffect } from "react"

const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim()

export function Analytics() {
  useEffect(() => {
    if (!domain || import.meta.env.DEV) return
    if (document.querySelector(`script[data-domain="${domain}"]`)) return
    const s = document.createElement("script")
    s.defer = true
    s.dataset.domain = domain
    s.src = "https://plausible.io/js/script.js"
    document.head.appendChild(s)
  }, [])

  return null
}
