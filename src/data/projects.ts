export type Project = {
  slug: string
  title: string
  tags: string[]
  image: string
  github: string
  status: 'completed' | 'in-progress'
}

export const projects: Project[] = [
  {
    slug: 'whisker',
    title: 'Whisker',
    tags: ['Vue', 'Bootstrap'],
    image: '/projects/whisker.png',
    github: 'https://github.com/Jun-Data/Whisker',
    status: 'completed',
  },
  {
    slug: 'muinus',
    title: 'Muinus',
    tags: ['React', 'Styled-Components'],
    image: '/projects/muinus2.png',
    github: 'https://github.com/Jun-Data/Muinus',
    status: 'completed',
  },
  {
    slug: 'damdam',
    title: 'DamDam',
    tags: ['Next.js', 'Tailwind'],
    image: '/projects/damdam.png',
    github: 'https://github.com/Jun-Data/DamDam',
    status: 'completed',
  },
  {
    slug: 'modak',
    title: 'Modak',
    tags: ['Next.js', 'Three.js'],
    image: '/projects/modak.png',
    github: 'https://github.com/Jun-Data/Modak',
    status: 'in-progress',
  },
]
