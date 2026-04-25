/** Site copy and links — edit to match Seid’s real profiles, certs, and history. */

export type SocialLink = {
  id: string
  label: string
  href: string
}

/** Footer, hero, and JSON-LD `sameAs` — single source for profile URLs. */
export const socialLinks: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/seidb/" },
]

export const profile = {
  fullName: "Seid Barsido",
  shortTitle: "System Administrator",
  email: "seidba8@gmail.com",
  phone: "0910245494",
} as const

/** Placeholder PDF; replace `public/seid-barsido-resume.pdf` with the real export. */
export const resume = {
  fileName: "seid-barsido-resume.pdf",
  label: "Download résumé",
} as const

export function resumeHref(): string {
  return `/${resume.fileName}`
}

export type Certification = {
  id: string
  name: string
  issuer: string
  year: string
  credentialId?: string
  verifyUrl?: string
}

export const certifications: Certification[] = []

export type ExperienceItem = {
  id: string
  organization: string
  period: string
  title: string
  summary: string
  /** Outcome-focused bullets for scanning (metrics when you have them). */
  outcomes: string[]
  tags: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "System administration",
    items: [
      "System installation and configuration",
      "Technical support and troubleshooting",
      "User account and access management",
      "Documentation and reporting",
    ],
  },
  {
    title: "Networking & infrastructure",
    items: [
      "Network installation and infrastructure management",
      "Virtual network configuration",
      "Computer hardware and software maintenance",
      "Secure system configuration",
    ],
  },
  {
    title: "Security & resilience",
    items: [
      "System security and data protection",
      "Network and endpoint security",
      "Patch and vulnerability management",
      "Backup and disaster recovery",
    ],
  },
  {
    title: "Tools & operations",
    items: [
      "PowerShell",
      "Bash",
      "Windows Server",
      "Linux",
      "Security awareness training",
      "SOP development and knowledge sharing",
    ],
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    id: "poessa-it-specialist",
    organization: "Private Organization Employees Social Security Administration (POESSA)",
    period: "Mar 2023 — Present",
    title: "IT Specialist",
    summary:
      "Lead infrastructure operations across system installation, maintenance, and function testing for hardware and software in a government organization environment.",
    outcomes: [
      "Configured and maintained virtual network environments to support secure and stable service delivery.",
      "Designed and implemented platform improvements that increased operational reliability for internal teams.",
      "Created standard operating procedures and delivered regular technology and cyber security seminars to colleagues and partners.",
    ],
    tags: ["System Administration", "Virtual Networks", "Security", "Documentation"],
  },
  {
    id: "poessa-system-admin",
    organization: "Private Organization Employees Social Security Administration (POESSA)",
    period: "Jan 2020 — Mar 2023",
    title: "System Administrator",
    summary:
      "Managed core systems, user access, and endpoint reliability with a strong focus on security and business continuity.",
    outcomes: [
      "Handled installation, configuration, troubleshooting, and ongoing support for enterprise hardware and software.",
      "Strengthened system security and data protection practices, including response to cyber-attack risks targeting organizational information.",
      "Supported backup and disaster recovery readiness through routine checks, reporting, and access control discipline.",
    ],
    tags: ["Technical Support", "Endpoint Security", "Access Management", "DR/Backup"],
  },
]
