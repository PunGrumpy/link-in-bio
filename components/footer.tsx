'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

interface FooterProps {
  url: string
  className?: string
}

export function Footer({ url, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'text-foreground/500 absolute bottom-5 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2 px-20 text-center text-sm',
        className
      )}
    >
      &copy; {new Date().getUTCFullYear()}&nbsp;
      <Link
        href={url}
        className="border-b border-transparent text-[#ff4500] transition-all duration-500 hover:border-[#ff4500]"
      >
        Noppakorn Kaewsalabnil.
      </Link>
      &nbsp; All rights reserved.
    </footer>
  )
}
