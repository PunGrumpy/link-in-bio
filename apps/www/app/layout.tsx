import '@repo/ui/globals.css'

import { ThemeProvider } from '@repo/ui/components/theme-provider'
import { TooltipProvider } from '@repo/ui/components/ui/tooltip'
import { cn } from '@repo/ui/lib/utils'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}`)
    : new URL('http://localhost:3000'),
  title: 'Link In Bio',
  description: 'A easy-to-click link in bio for your social media profile.',
  robots: 'follow, index',
  icons: {
    icon: '/metadata/favicon.ico',
    shortcut: '/metadata//favicon.ico',
    apple: '/metadata/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Link In Bio',
    description: 'A easy-to-click link in bio for your social media profile.',
    type: 'website',
    locale: 'en_US',
    countryName: 'Thailand',
    images: [
      {
        url: '/metadata/og-image.png',
        alt: 'Link In Bio'
      }
    ]
  },
  twitter: {
    title: 'Link In Bio',
    description: 'A easy-to-click link in bio for your social media profile.',
    card: 'summary_large_image',
    images: [
      {
        url: '/metadata/og-image.png',
        alt: 'Link In Bio'
      }
    ]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'from-background to-secondary/20 min-h-screen bg-gradient-to-br font-sans antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
