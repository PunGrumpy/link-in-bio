import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import { NoiseOverlay } from '@/components/noise-overlay'
import { cn } from '@/lib/utils'
import { AnalyticsProvider } from '@/providers/analytics'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bio.pungrumpy.com'),
  title: 'PunGrumpy - Link in Bio',
  description: 'Connect with me on various platforms',
  applicationName: 'PunGrumpy - Link in Bio',
  keywords: ['PunGrumpy', 'Noppakorn', 'Kaewsalabnil', 'Link in Bio'],
  authors: [
    {
      name: 'Noppakorn Kaewsalabnil',
      url: 'https://pungrumpy.com'
    }
  ],
  generator: 'PunGrumpy - Link in Bio',
  robots: 'index, follow',
  creator: 'Noppakorn Kaewsalabnil',
  publisher: 'Noppakorn Kaewsalabnil',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'PunGrumpy - Link in Bio',
    description: 'Connect with me on various platforms',
    type: 'website',
    url: 'https://bio.pungrumpy.com',
    siteName: 'PunGrumpy - Link in Bio',
    images: [
      {
        url: '/og-image.png',
        width: 1600,
        height: 900,
        alt: 'PunGrumpy - Link in Bio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PunGrumpy',
    creator: '@PunGrumpy',
    images: [
      {
        url: '/og-image.png',
        width: 1600,
        height: 900,
        alt: 'PunGrumpy - Link in Bio'
      }
    ]
  }
}

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
