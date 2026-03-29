// 타입 정의
export type Skill = {
  name: string
  category: string
  url: string
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'JavaScript',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  // Libraries
  {
    name: 'Tailwind',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Styled Components',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg',
  },
  {
    name: 'Bootstrap',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'TanStack Query',
    category: 'Libraries',
    url: 'https://cdn.simpleicons.org/tanstack/FF4154',
  },
  {
    name: 'Zustand',
    category: 'Libraries',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
  },
  // Tools
  {
    name: 'Git',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Vite',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  },
  {
    name: 'ESLint',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  },
  {
    name: 'Prettier',
    category: 'Tools',
    url: 'https://cdn.simpleicons.org/prettier',
  },
  {
    name: 'Figma',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Notion',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
  },
  {
    name: 'Jira',
    category: 'Tools',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  },
]

export const skillCategories = [
  'All',
  'Frontend',
  'Libraries',
  'Tools',
] as const
