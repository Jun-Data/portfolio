export type Project = {
  slug: string
  title: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    slug: 'whisker',
    title: 'Whisker',
    tags: ['React', 'Tailwind'],
    image: '/projects/whisker.png',
  },
  {
    slug: 'muinus',
    title: 'Muinus',
    tags: ['React', 'Tailwind'],
    image: '/projects/muinus.png',
  },
  {
    slug: 'damdam',
    title: 'DamDam',
    tags: ['React', 'Tailwind'],
    image: '/projects/damdam.png',
  },
  {
    slug: 'modak',
    title: 'Modak',
    tags: ['React', 'Tailwind'],
    image: '/projects/pj.png',
  },
]
