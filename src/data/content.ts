/** Edit this file to match your client’s real experience, stack, and links. */

export type ExperienceItem = {
  id: string
  organization: string
  period: string
  title: string
  summary: string
  tags: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Operating systems & directory",
    items: [
      "Windows Server",
      "Linux (RHEL / Ubuntu)",
      "Active Directory",
      "Group Policy",
      "DNS / DHCP",
    ],
  },
  {
    title: "Cloud & virtualization",
    items: [
      "Microsoft Azure",
      "VMware / Hyper-V",
      "Entra ID (Azure AD)",
      "Backup & DR planning",
    ],
  },
  {
    title: "Networking & security",
    items: [
      "Firewalls & VPN",
      "Zero-trust concepts",
      "Patch management",
      "Endpoint protection",
    ],
  },
  {
    title: "Automation & operations",
    items: [
      "PowerShell",
      "Bash",
      "Microsoft Intune / MDM",
      "Monitoring (e.g. Zabbix, SCOM, cloud-native)",
      "Ticketing & ITIL workflows",
    ],
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    id: "corp-infra",
    organization: "Enterprise IT Services",
    period: "2022 — Present",
    title: "System Administrator",
    summary:
      "Own day-to-day operations for on-prem and hybrid infrastructure: user lifecycle in AD/Entra, server builds and patching, storage and backup checks, and incident response with clear runbooks and documentation.",
    tags: ["Windows Server", "Azure", "AD", "PowerShell"],
  },
  {
    id: "msp",
    organization: "Regional MSP",
    period: "2019 — 2022",
    title: "IT Support Engineer → Systems Administrator",
    summary:
      "Supported SMB clients across ticketing and projects: migrating file shares, deploying standardized images, hardening endpoints, and rolling out Microsoft 365 with conditional access baselines.",
    tags: ["M365", "Intune", "Networking", "Support"],
  },
  {
    id: "projects",
    organization: "Selected initiatives",
    period: "Ongoing",
    title: "Infrastructure & automation projects",
    summary:
      "Examples you can tailor: automated patching reports, self-service account workflows, monitoring dashboards for disk and backup health, and documentation in a team wiki or Confluence.",
    tags: ["Automation", "Documentation", "Monitoring"],
  },
]
