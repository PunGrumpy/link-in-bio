import {
  GithubIcon,
  Globe02Icon,
  Linkedin02Icon,
  NewTwitterIcon
} from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'

import { NoiseOverlay } from '@/components/noise-overlay'

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
}

const links: SocialLink[] = [
  {
    icon: <Globe02Icon aria-hidden="true" focusable="false" />,
    label: 'Portfolio',
    href: 'https://pungrumpy.com'
  },
  {
    icon: <GithubIcon aria-hidden="true" focusable="false" />,
    label: 'GitHub',
    href: 'https://github.com/PunGrumpy'
  },
  {
    icon: <NewTwitterIcon aria-hidden="true" focusable="false" />,
    label: 'Twitter',
    href: 'https://x.com/PunGrumpy'
  },
  {
    icon: <Linkedin02Icon aria-hidden="true" focusable="false" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/noppakorn-kaewsalabnil'
  }
]

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      <nav className="absolute top-5 z-10 hidden w-full items-center justify-between px-5 sm:flex">
        <Image
          src="/logo.png"
          alt="Noppakorn Kaewsalabnil"
          width={48}
          height={48}
        />
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm transition-colors hover:text-[#ff4500]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="z-10 w-full max-w-4xl text-center">
        <h1 className="mb-4 text-6xl font-bold leading-none md:text-8xl lg:text-9xl">
          <span className="text-stroke block">Noppakorn</span>
          <span className="block">Kaewsalabnil</span>
        </h1>
        <p className="mb-8 text-lg text-[#ff4500] sm:mb-12 sm:text-xl md:text-2xl">
          Web Developer | Designer | Photographer
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:space-x-6">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 flex items-center justify-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 text-foreground backdrop-blur-sm transition-colors duration-500 hover:text-[#ff4500] sm:border-0 sm:bg-transparent sm:p-0"
              aria-label={link.label}
            >
              {link.icon}
              <span className="text-sm sm:hidden">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <footer className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center text-sm text-foreground/50">
        <p>
          &copy; {new Date().getFullYear()}&nbsp;
          <Link
            href="https://pungrumpy.com"
            className="border-b border-transparent text-[#ff4500] transition-all duration-500 hover:border-[#ff4500]"
          >
            Noppakorn Kaewsalabnil
          </Link>
          . All rights reserved.
        </p>
      </footer>
      <NoiseOverlay />
    </main>
  )
}
