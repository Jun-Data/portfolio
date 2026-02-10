export type Experience = {
  role: string
  company: string
  period: string
  description: string
  type: string
}

export const experiences: Experience[] = [
  {
    role: 'Student',
    company: 'Chung-ang University',
    period: '2018.02 ~ 2024.02',
    description: 'Double Majored in Civil & Electrical Engineering',
    type: 'University',
  },
  {
    role: 'Trainee',
    company: 'Samsung Software Academy For Youth (SSAFY)',
    period: '2024.07 ~ 2025.07',
    description: 'Learning the basic web applications with Python, React',
    type: 'Academy',
  },
  {
    role: 'Junior Frontend Engineer',
    company: 'Hygino',
    period: '2025.07 ~ Present',
    description:
      'Leading the migration from legacy jQuery to Next.js. Improved site performance by 40% and established a new design system',
    type: 'Startup',
  },
]
