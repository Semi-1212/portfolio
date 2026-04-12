import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Square } from "lucide-react"
import type { Project } from "../data/projects"

type Props = {
  project: Project
  index: number
}

export function VideoProjectCard({ project, index }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)
  const [coarsePointer, setCoarsePointer] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)")
    const update = () => setCoarsePointer(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const play = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {
      /* autoplay policies */
    })
  }, [])

  const pause = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
  }, [])

  const ratio =
    project.aspect === "portrait"
      ? "aspect-[9/16] max-h-[min(70vh,520px)]"
      : "aspect-video"

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group rounded-2xl border border-white/[0.08] bg-[#0f0f12] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:p-4"
      onMouseEnter={() => {
        setActive(true)
        play()
      }}
      onMouseLeave={() => {
        setActive(false)
        pause()
      }}
      onFocus={() => {
        setActive(true)
        play()
      }}
      onBlur={() => {
        setActive(false)
        pause()
      }}
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-black ${ratio} mx-auto w-full`}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.02]"
          style={{
            filter: active ? "brightness(1.02)" : "brightness(0.88)",
          }}
          src={project.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Preview: ${project.title}`}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90"
          aria-hidden
        />
        {coarsePointer ? (
          <div className="absolute right-3 top-3">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (active) {
                  setActive(false)
                  pause()
                } else {
                  setActive(true)
                  play()
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
            >
              {active ? (
                <>
                  <Square className="h-3.5 w-3.5" aria-hidden />
                  Stop
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden />
                  Preview
                </>
              )}
            </button>
          </div>
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-white/55">
            {project.client} · {project.year}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="px-1 pb-1 pt-4 sm:px-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
          {project.role}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
      </div>
    </motion.article>
  )
}
