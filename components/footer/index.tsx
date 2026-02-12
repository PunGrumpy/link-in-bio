import Link from 'next/link'
import { Status } from '@/components/footer/status'
import { Time } from './time'

export const Footer = () => (
  <footer className="absolute bottom-5 z-10 w-full px-4 sm:px-20">
    <div className="grid items-center justify-items-center gap-4 sm:grid-cols-2 sm:justify-between sm:justify-items-stretch">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
        <Status />
        <Time />
      </div>

      <div className="items-center text-center text-sm sm:justify-center sm:text-end">
        &copy; {new Date().getUTCFullYear()}&nbsp;
        <Link
          className="border-transparent border-b text-[#ff4500] transition-[color,background-color,border-color,transform] duration-200 ease-in hover:border-[#ff4500] hover:ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
          href="https://pungrumpy.com"
        >
          Noppakorn Kaewsalabnil.
        </Link>
        &nbsp; All rights reserved.
      </div>
    </div>
  </footer>
)
