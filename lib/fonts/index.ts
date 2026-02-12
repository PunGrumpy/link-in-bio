import { GeistPixelSquare } from 'geist/font/pixel'
import localFont from 'next/font/local'
import { cn } from '../utils'

const sans = GeistPixelSquare
const mono = localFont({
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
  sans.variable,
  mono.variable
)
