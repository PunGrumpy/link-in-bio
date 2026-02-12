import Link from 'next/link'
import { Icons } from '../icons'

const links = [
  {
    label: 'Portfolio',
    href: 'https://pungrumpy.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/PunGrumpy'
  },
  {
    label: 'Twitter',
    href: 'https://x.com/PunGrumpy'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/noppakorn-kaewsalabnil'
  }
]

export const Header = () => (
  <header className="absolute top-5 z-10 hidden w-full px-20 text-center md:block">
    <nav className="flex w-full items-center justify-between">
      <Icons.Logo className="size-6" />
      <ul className="flex space-x-4">
        {links.map(link => (
          <li key={link.label}>
            <Link
              className="text-sm transition-[color,background-color,border-color,transform] duration-200 ease-in hover:text-[#ff4500] hover:ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
