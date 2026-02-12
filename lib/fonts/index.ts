import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '../utils'

const spaceGrotesk = Space_Grotesk({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
const basementGrotesque = localFont({
  src: [
    {
      path: './BasementGrotesque-Black_v1.202.woff2',
      weight: '800',
      style: 'extrabold'
    }
  ],
  display: 'swap',
  variable: '--font-basement-grotesque'
})

export const fonts = cn(
  'touch-manipulation font-sans antialiased',
  spaceGrotesk.variable,
  basementGrotesque.variable
)
