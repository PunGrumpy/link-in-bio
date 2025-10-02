import Link from 'next/link'

type SocialLinkProps = {
  links: {
    label: string
    href: string
    icon: React.ReactNode
  }[]
}

export function SocialLink({ links }: SocialLinkProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:space-x-6">
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
}
