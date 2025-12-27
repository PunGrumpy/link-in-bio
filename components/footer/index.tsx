import Link from 'next/link'
import { Status } from '@/components/footer/status'
import { Time } from './time'

export const Footer = () => (
  <footer className="absolute bottom-5 z-10 w-full px-20">
    <div className="grid items-center justify-items-center gap-4 sm:grid-cols-2 sm:justify-between sm:justify-items-stretch">
      <div className="flex gap-1">
        <Status />
        <Time />
      </div>

      <div className="items-center text-center text-sm sm:justify-center sm:text-end">
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
