import Image from 'next/image'
import Link from 'next/link'

interface NagivationLinks {
  label: string
  href: string
}

interface NagivationProps {
  links: NagivationLinks[]
}

export function Navigation({ links }: NagivationProps) {
  return (
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
  )
}
