import './globals.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { NoiseOverlay } from '@/components/noise-overlay'
import { fonts } from '@/lib/fonts'
import { createMetadata } from '@/lib/metadata'
import { AnalyticsProvider } from '@/providers/analytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
  colorScheme: 'dark'
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
        <Header />
        {children}
        <Footer />

        <NoiseOverlay />
      </main>
      <AnalyticsProvider />
    </body>
  </html>
)

export default RootLayout
