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
    url: '/icons/javascript.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    url: '/icons/typescript.svg',
  },
  {
    name: 'React',
    category: 'Frontend',
    url: '/icons/react.svg',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    url: '/icons/nextjs.svg',
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    url: '/icons/vuejs.svg',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    url: '/icons/html5.svg',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    url: '/icons/css3.svg',
  },
  // Libraries
  {
    name: 'Tailwind',
    category: 'Libraries',
    url: '/icons/tailwind.svg',
  },
  {
    name: 'Styled Components',
    category: 'Libraries',
    url: '/icons/styled-components.svg',
  },
  {
    name: 'Bootstrap',
    category: 'Libraries',
    url: '/icons/bootstrap.svg',
  },
  {
    name: 'TanStack Query',
    category: 'Libraries',
    url: '/icons/tanstack-query.png',
  },
  {
    name: 'Zustand',
    category: 'Libraries',
    url: '/icons/zustand.svg',
  },
  // Tools
  {
    name: 'Git',
    category: 'Tools',
    url: '/icons/git.svg',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    url: '/icons/github.svg',
  },
  {
    name: 'Vite',
    category: 'Tools',
    url: '/icons/vite.svg',
  },
  {
    name: 'ESLint',
    category: 'Tools',
    url: '/icons/eslint.svg',
  },
  {
    name: 'Prettier',
    category: 'Tools',
    url: '/icons/prettier.svg',
  },
  {
    name: 'Figma',
    category: 'Tools',
    url: '/icons/figma.svg',
  },
  {
    name: 'Notion',
    category: 'Tools',
    url: '/icons/notion.svg',
  },
  {
    name: 'Jira',
    category: 'Tools',
    url: '/icons/jira.svg',
  },
]

export const skillCategories = [
  'All',
  'Frontend',
  'Libraries',
  'Tools',
] as const
