import Link from 'next/link'

interface SocialLinks {
  label: string
  href: string
  icon: React.ReactNode
}

interface SocialLinkProps {
  links: SocialLinks[]
}

export function SocialLink({ links }: SocialLinkProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:space-x-6">
      {links.map(link => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 flex items-center justify-center gap-2 rounded-none border border-foreground/20 px-4 py-2 text-foreground backdrop-blur-sm transition-colors duration-500 hover:bg-foreground/5 hover:text-[#ff4500] sm:border-0 sm:bg-transparent sm:p-0"
          aria-label={link.label}
        >
          {link.icon}
          <span className="text-sm sm:hidden">{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
