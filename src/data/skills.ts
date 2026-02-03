// 타입 정의
export type Skill = {
  name: string
  category: string
  url: string
}

export const skills: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Tailwind',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Three.js',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  },
  {
    name: 'Redux',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    name: 'Framer',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
  },
  {
    name: 'Node.js',
    category: 'Environment',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Git',
    category: 'Environment',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Firebase',
    category: 'Environment',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Vercel',
    category: 'Environment',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  },
  {
    name: 'Figma',
    category: 'Design',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Photoshop',
    category: 'Design',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
  },
  {
    name: 'Illustrator',
    category: 'Design',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
  },
  {
    name: 'Blender',
    category: 'Design',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
  },
]

export const skillCategories = [
  'All',
  'Frontend',
  'Libraries',
  'Environment',
  'Design',
] as const
