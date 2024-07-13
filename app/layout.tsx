import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL || 'https://bio.pungrumpy.com'
  ),
  title: 'Link in Bio',
  description:
    'Link in Bio is a simple, customizable, and easy-to-use link-in-bio tool for creators.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  keywords: ['Link in Bio', 'Instagram', 'Linktree'],
  authors: {
    name: 'Noppakorn Kaewsalabnil',
    url: 'https://pungrumpy.com'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pungrumpy_p',
    creator: '@pungrumpy_p',
    title: 'Link in Bio',
    images: '/background.jpg'
  },
  openGraph: {
    title: 'Link in Bio',
    siteName: 'Link in Bio',
    type: 'website',
    url: 'https://bio.pungrumpy.com',
    images: '/background.jpg',
    countryName: 'Thailand'
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
