export type Experience = {
  role: string
  company: string
  period: string
  description: string
  type: string
}

export const experiences: Experience[] = [
  {
    role: 'Trainie',
    company: 'Samsung Software Academy For Youth (SSAFY)',
    period: '2024.7 - 2025.7',
    description: 'Learning the basic web applications with Python, React',
    type: 'Academy',
  },
  {
    role: 'Junior Frontend Engineer',
    company: 'Hygino',
    period: '2025.7 - Present',
    description:
      'Leading the migration from legacy jQuery to Next.js. Improved site performance by 40% and established a new design system.',
    type: 'Startup',
  },
]
