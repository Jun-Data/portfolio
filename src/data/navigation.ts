import { LucideIcon, Wrench, Rocket, Milestone, Mail } from 'lucide-react'

export type NavItem = {
  id: string
  label: string
  icon: LucideIcon
  href: string
}

export const navItems: NavItem[] = [
  { id: 'skills', label: 'Skills', icon: Wrench, href: '#skills' },
  { id: 'projects', label: 'Projects', icon: Rocket, href: '#projects' },
  {
    id: 'experiences',
    label: 'Experiences',
    icon: Milestone,
    href: '#experiences',
  },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
]
