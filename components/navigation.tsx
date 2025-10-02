import Image from 'next/image'
import Link from 'next/link'

type NagivationProps = {
  links: {
    label: string
    href: string
  }[]
}

export function Navigation({ links }: NagivationProps) {
  return (
    <nav className="absolute top-5 z-10 hidden w-full items-center justify-between px-5 sm:flex">
      <Image
        alt="Noppakorn Kaewsalabnil"
        height={48}
        src="/logo.png"
        width={48}
      />
      <ul className="flex space-x-4">
        {links.map(link => (
          <li key={link.label}>
            <Link
              className="text-sm transition-colors hover:text-[#ff4500]"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
