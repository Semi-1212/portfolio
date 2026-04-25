import { useEffect } from "react"
import { profile, socialLinks } from "../data/content"
import { getSiteUrl } from "../config/site"

const desc =
  "Seid Barsido — system administrator portfolio: infrastructure, hybrid cloud, identity, security, and automation."

export function SeoHead() {
  useEffect(() => {
    const base = getSiteUrl().replace(/\/$/, "")
    const url = `${base}/`
    const image = `${base}/og.png`

    const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    ensureMeta("property", "og:type", "website")
    ensureMeta("property", "og:title", `${profile.fullName} — ${profile.shortTitle}`)
    ensureMeta("property", "og:description", desc)
    ensureMeta("property", "og:url", url)
    ensureMeta("property", "og:image", image)
    ensureMeta("name", "twitter:card", "summary_large_image")
    ensureMeta("name", "twitter:title", `${profile.fullName} — ${profile.shortTitle}`)
    ensureMeta("name", "twitter:description", desc)
    ensureMeta("name", "twitter:image", image)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.rel = "canonical"
      document.head.appendChild(link)
    }
    link.href = url

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.shortTitle,
      url,
      sameAs: socialLinks.map((s) => s.href),
    }

    const existing = document.getElementById("jsonld-person")
    if (existing) existing.remove()
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "jsonld-person"
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }, [])

  return null
}
