export interface WorkCase {
  title: string
  summary: string
  points: string[]
  tags: string[]
}

export interface StudyProject {
  slug: string
  title: string
  kind: string
  description: string
  image: string
  liveUrl: string
  repoUrl: string
  tags: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface Job {
  place: string
  role: string
  period: string
}

