import './globals.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { NoiseOverlay } from '@/components/noise-overlay'
import { fonts } from '@/lib/fonts'
import { createMetadata } from '@/lib/metadata'
import { AnalyticsProvider } from '@/providers/analytics'

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
    <body className={fonts}>
      <main className="relative overflow-hidden">
        {children}
        <NoiseOverlay />
      </main>
      <AnalyticsProvider />
    </body>
  </html>
)

export default RootLayout
