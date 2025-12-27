import Link from 'next/link'
import { Status } from '@/components/footer/status'

export const Footer = () => (
  <footer className="absolute bottom-5 left-1/2 z-10 w-full -translate-x-1/2 px-20 text-center text-foreground/500 text-sm">
    <div className="grid items-center justify-items-center gap-4 sm:grid-cols-2 sm:justify-between sm:justify-items-stretch">
      <Status />
      <div className="items-center text-center sm:justify-center sm:text-end">
        &copy; {new Date().getUTCFullYear()}&nbsp;
        <Link
          className="border-transparent border-b text-[#ff4500] transition-all duration-500 hover:border-[#ff4500]"
          href="https://pungrumpy.com"
        >
          Noppakorn Kaewsalabnil.
        </Link>
        &nbsp; All rights reserved.
      </div>
    </div>
  </footer>
)
