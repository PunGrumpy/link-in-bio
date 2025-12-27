import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import { NoiseOverlay } from '@/components/noise-overlay'
import { createMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'
import { AnalyticsProvider } from '@/providers/analytics'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export const metadata: Metadata = createMetadata(
  'PunGrumpy — Link in Bio',
  'Connect with me on various platforms via my link in bio'
)

interface RootLayoutProps {
  readonly children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className="dark" lang="en">
    <body className={cn(spaceGrotesk.className, 'scroll-smooth antialiased')}>
      <main className="relative overflow-hidden">
        {children}
        <NoiseOverlay />
      </main>
      <AnalyticsProvider />
    </body>
  </html>
)

export default RootLayout
