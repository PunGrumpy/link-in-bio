import Link from 'next/link'

import { Status } from '@/components/footer/status'
import { cn } from '@/lib/utils'

interface FooterProps {
  url: string
  className?: string
}

export function Footer({ url, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'text-foreground/500 absolute bottom-5 left-1/2 z-10 min-w-max -translate-x-1/2 px-20 text-center text-sm',
        className
      )}
    >
      <div className="grid items-center justify-items-center gap-4 sm:grid-cols-3">
        <Status />
        <div className="items-center sm:justify-center">
          &copy; {new Date().getUTCFullYear()}&nbsp;
          <Link
            href={url}
            className="border-b border-transparent text-[#ff4500] transition-all duration-500 hover:border-[#ff4500]"
          >
            Noppakorn Kaewsalabnil.
          </Link>
          &nbsp; All rights reserved.
        </div>
        <div className="items-center sm:justify-center">
          Built with&nbsp;
          <Link
            href="https://nextjs.org"
            className="border-b border-transparent text-[#ff4500] transition-all duration-500 hover:border-[#ff4500]"
          >
            Next.js
          </Link>
          &nbsp;+&nbsp;
          <Link
            href="https://tailwindcss.com"
            className="border-b border-transparent text-[#38b2ac] transition-all duration-500 hover:border-[#38b2ac]"
          >
            Tailwind CSS
          </Link>
          &nbsp;+&nbsp;
          <Link
            href="https://vercel.com"
            className="border-b border-transparent text-white transition-all duration-500 hover:border-white"
          >
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  )
}
