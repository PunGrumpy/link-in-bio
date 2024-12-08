import '@/app/globals.css'

import LogLib from '@loglib/tracker/react'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'

import { cn } from '@/lib/utils'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' }
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
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={cn(spaceGrotesk.className, 'scroll-smooth antialiased')}>
        <LogLib
          config={{
            id: process.env.NEXT_PUBLIC_LOGLIB_ID!
          }}
        />
        {children}
      </body>
    </html>
  )
}
