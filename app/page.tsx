import {
  GithubIcon,
  Globe02Icon,
  Linkedin02Icon,
  NewTwitterIcon
} from 'hugeicons-react'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer/footer'
import { Navigation } from '@/components/navigation'
import { NoiseOverlay } from '@/components/noise-overlay'
import { SocialLink } from '@/components/social-link'

type SocialLinkProps = {
  icon: ReactNode
  label: string
  href: string
}

const links: SocialLinkProps[] = [
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
      <Navigation links={links} />

      <div className="z-10 w-full max-w-4xl text-center">
        <h1 className="mb-4 font-bold text-5xl leading-none md:text-8xl lg:text-9xl">
          <span className="block text-stroke">Noppakorn</span>
          <span className="block">Kaewsalabnil</span>
        </h1>
        <p className="mb-8 text-[#ff4500] text-lg sm:mb-12 sm:text-xl md:text-2xl">
          Web Developer | Designer | Photographer
        </p>
        <SocialLink links={links} />
      </div>
      <Footer url={'https://pungrumpy.com'} />
      <NoiseOverlay />
    </main>
  )
}
