import type { Metadata } from 'next'
import { env } from './env'

const baseUrl = env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const createMetadata = (
  title: string,
  description: string
): Metadata => ({
  title,
  description,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl
  },
  applicationName: 'PunGrumpy Portfolio',
  authors: [
    {
      name: 'Noppakorn Kaewsalabnil',
      url: 'https://github.com/PunGrumpy'
    }
  ],
  creator: 'Noppakorn Kaewsalabnil',
  generator: 'Next.js',
  keywords: ['PunGrumpy', 'Noppakorn', 'Kaewsalabnil', 'Link in Bio'],
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: title,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: new URL('/opengraph-image.png', baseUrl).toString(),
        width: 1600,
        height: 900
      }
    ]
  },
  twitter: {
    title,
    description,
    creator: '@pungrumpy',
    card: 'summary_large_image',
    images: [
      {
        url: new URL('/opengraph-image.png', baseUrl).toString(),
        width: 1600,
        height: 900
      }
    ]
  },
  publisher: 'Noppakorn Kaewsalabnil',
  robots: 'index, follow'
})
