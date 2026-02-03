export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: 'Whisker',
    description: 'Finance app with cute cat interface',
    tags: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
  },
  {
    title: 'Muinus',
    description: '소비자와 점주가 함께 만들어가는 무인 판매점 플랫폼',
    tags: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
  },
  {
    title: 'DamDam',
    description: '당신이 담담해지는 그 날까지, 담담과 함께 이야기해보세요',
    tags: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
  },
]
