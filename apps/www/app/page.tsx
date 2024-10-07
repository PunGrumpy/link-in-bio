'use client'

import { LinkInBio } from '@repo/ui/components/link-in-bio'
import { motion } from 'framer-motion'
import { GithubIcon, InstagramIcon, Linkedin02Icon } from 'hugeicons-react'

const profile = {
  name: 'Noppakorn Kaewsalabnil',
  avatarSrc: 'https://avatars.githubusercontent.com/u/108584943?v=4',
  description:
    "I'm a dedicated computer science student at King Mongkut's Institute of Technology Ladkrabang, specializing in software development and DevOps.",
  links: [
    {
      icon: <GithubIcon />,
      text: 'Repositories and Contributions',
      subtext: 'My projects and contributions on GitHub',
      href: 'https://github.com/PunGrumpy'
    },
    {
      icon: <Linkedin02Icon />,
      text: 'Connect with me',
      subtext: 'More than happy to connect on LinkedIn',
      href: 'https://th.linkedin.com/in/noppakorn-kaewsalabnil'
    },
    {
      icon: <InstagramIcon />,
      text: 'Photography in my free time',
      subtext: 'Daily life and travel photos',
      href: 'https://www.instagram.com/pungrumpy_p'
    }
  ]
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/background.avif')] bg-cover bg-center bg-no-repeat p-4">
      <motion.div
        className="absolute inset-0 bg-black/15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="text-shadow relative z-10">
        <LinkInBio
          name={profile.name}
          avatarSrc={profile.avatarSrc}
          description={profile.description}
          links={profile.links}
        />
      </div>
    </div>
  )
}
