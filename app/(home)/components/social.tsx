import {
  GithubIcon,
  Globe02Icon,
  Linkedin02Icon,
  NewTwitterIcon
} from 'hugeicons-react'
import Link from 'next/link'

const links = [
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

export const Social = () => (
  <div className="z-0 flex w-full flex-col gap-4 sm:flex-row sm:justify-center sm:space-x-6">
    {links.map(link => (
      <Link
        aria-label={link.label}
        className="z-50 flex items-center justify-center gap-2 rounded-none border border-foreground/20 px-4 py-2 text-foreground backdrop-blur-xs transition-colors duration-500 hover:bg-foreground/5 hover:text-[#ff4500] sm:border-0 sm:bg-transparent sm:p-0"
        href={link.href}
        key={link.label}
        rel="noopener noreferrer"
        target="_blank"
      >
        {link.icon}
        <span className="text-sm sm:hidden">{link.label}</span>
      </Link>
    ))}
  </div>
)
