import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import type { WebSite, WithContext } from 'schema-dts'
import { fonts } from '@/lib/fonts'
import { escapeJsonForHtml } from '@/lib/utils'

const applicationName = 'PunGrumpy'
const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
const metadataBase = productionUrl
  ? new URL(`${protocol}://${productionUrl}`)
  : new URL(`${protocol}://localhost:3000`)

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
  colorScheme: 'dark'
}

export const metadata: Metadata = {
  metadataBase,
  title: {
    template: `%s — ${applicationName}`,
    default: 'PunGrumpy — Built on Principle.'
  },
  description:
    'PunGrumpy is a DevSecOps Engineer and a software engineer who loves to build things that perform.',
  applicationName,
  authors: [
    { name: 'Noppakorn Kaewsalabnil', url: 'https://www.pungrumpy.com/' }
  ],
  creator: 'Noppakorn Kaewsalabnil',
  keywords: [
    'Pun',
    'PunGrumpy',
    'Noppakorn Kaewsalabnil',
    'Noppakorn',
    'Kaewsalabnil',
    'Design Engineer',
    'DevSecOps',
    'Short',
    'Link in Bio'
  ],
  generator: 'Next.js',
  robots: 'index, follow',
  formatDetection: { telephone: false },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: applicationName
  },
  openGraph: {
    type: 'website',
    siteName: applicationName,
    locale: 'en_US'
  },
  publisher: 'Noppakorn Kaewsalabnil',
  twitter: {
    creator: '@pungrumpy',
    site: '@pungrumpy',
    card: 'summary_large_image'
  }
}

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Noppakorn Kaewsalabnil',
  url: metadataBase.origin,
  alternateName: ['Pungrumpy', 'Noppakorn Kaewsalabnil']
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={fonts} lang="en" suppressHydrationWarning>
    <head>
      <Script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script with escaped content
        dangerouslySetInnerHTML={{
          __html: escapeJsonForHtml(JSON.stringify(jsonLd))
        }}
        id="json-ld-website"
        type="application/ld+json"
      />
    </head>

    <body className="flex min-h-full flex-col">{children}</body>
  </html>
)

export default RootLayout
