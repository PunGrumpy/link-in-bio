import Link from 'next/link'
import { Icons } from '@/components/icons'

const links = [
  {
    icon: Icons.GlobeIcon,
    label: 'Portfolio',
    href: 'https://link.pungrumpy.com/me'
  },
  {
    icon: Icons.GitHubIcon,
    label: 'GitHub',
    href: 'https://link.pungrumpy.com/github'
  },
  {
    icon: Icons.TwitterIcon,
    label: 'Twitter',
    href: 'https://link.pungrumpy.com/x'
  },
  {
    icon: Icons.LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://link.pungrumpy.com/linkedin'
  }
]

export const Social = () => (
  <div className="z-0 flex w-full flex-col gap-4 sm:flex-row sm:justify-center sm:space-x-6">
    {links.map(link => (
      <Link
        aria-label={link.label}
        className="z-50 flex items-center justify-center gap-2 rounded-none border border-foreground/20 px-4 py-2 text-foreground backdrop-blur-xs transition-[color,background-color,border-color,transform] duration-200 ease-in hover:bg-foreground/5 hover:text-[#ff4500] hover:ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 sm:border-0 sm:bg-transparent sm:p-0"
        href={link.href}
        key={link.label}
        rel="noopener noreferrer"
        target="_blank"
      >
        <link.icon aria-hidden="true" className="size-4 md:size-6" />
        <span className="text-sm sm:hidden">{link.label}</span>
      </Link>
    ))}
  </div>
)
