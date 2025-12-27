import { Space_Grotesk } from 'next/font/google'
import { cn } from './utils'

const spaceGrotesk = Space_Grotesk({
  adjustFontFallback: true,
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

export const fonts = cn(
  'touch-manipulation antialiased',
  spaceGrotesk.className
)
