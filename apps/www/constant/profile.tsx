import { Calendar03Icon, GithubIcon, Linkedin02Icon } from 'hugeicons-react'

interface Profile {
  name: string
  title: string
  location: string
  website: {
    text: string
    href: string
  }
  avatarSrc: string
  links: {
    icon: JSX.Element
    text: string
    subtext: string
    href: string
    category: 'Projects' | 'Work' | 'Social'
    featured?: boolean
    skills?: string[]
  }[]
}

export const profile: Profile = {
  name: 'Noppakorn Kaewsalabnil',
  title: 'Computer Science Student',
  location: 'Bangkok, Thailand',
  website: {
    text: 'https://pungrumpy.com',
    href: 'https://pungrumpy.com'
  },
  avatarSrc: 'https://avatars.githubusercontent.com/u/108584943?v=4',
  links: [
    {
      icon: <GithubIcon className="size-6" />,
      text: 'Open Source Projects',
      subtext: 'Check out my contributions and repositories',
      href: 'https://github.com/PunGrumpy',
      category: 'Projects',
      featured: true,
      skills: ['TypeScript', 'React', 'Next.js']
    },
    {
      icon: <Linkedin02Icon className="size-6" />,
      text: 'Professional Network',
      subtext: 'Connect with me on LinkedIn',
      href: 'https://th.linkedin.com/in/noppakorn-kaewsalabnil',
      category: 'Work',
      skills: ['Software Development', 'DevOps', 'Cloud Computing']
    },
    {
      icon: <Calendar03Icon className="size-6" />,
      text: 'Schedule a Meeting',
      subtext: 'Book a time to connect with me',
      href: 'https://cal.com/pungrumpy',
      category: 'Work'
    }
  ]
}
