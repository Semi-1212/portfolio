export type Project = {
  id: string
  title: string
  client: string
  role: string
  year: string
  description: string
  /** Replace with your own renders (MP4/WebM) or leave as demo samples while building. */
  videoSrc: string
  aspect: "video" | "portrait"
}

export const demoReel: Project = {
  id: "reel",
  title: "2025 Demo Reel",
  client: "Personal",
  role: "Edit · Color · Sound design",
  year: "2025",
  description:
    "A fast-cut overview of recent commercial and narrative work. Swap this source for your master export.",
  videoSrc:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  aspect: "video",
}

export const projects: Project[] = [
  {
    id: "aurora-labs",
    title: "Aurora Labs — Product launch",
    client: "Aurora Labs",
    role: "Lead editor",
    year: "2025",
    description:
      "Launch film for a hardware line: rhythm-led cuts, macro product detail, and a restrained grade.",
    videoSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    aspect: "video",
  },
  {
    id: "northline",
    title: "Northline — Brand story",
    client: "Northline",
    role: "Editor · Online",
    year: "2024",
    description:
      "Documentary-style brand piece with interview-driven structure and natural light.",
    videoSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    aspect: "video",
  },
  {
    id: "pulse-fest",
    title: "Pulse Fest — Social cutdowns",
    client: "Pulse Fest",
    role: "Short-form edits",
    year: "2024",
    description:
      "Vertical-first promos and recap energy for paid social — built for sound-off hooks.",
    videoSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    aspect: "portrait",
  },
]
