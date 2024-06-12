import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Link in Bio',
  description:
    'Link in Bio is a simple, customizable, and easy-to-use link-in-bio tool for creators.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Noppakorn Kaewsalabnil" />
        <meta name="keywords" content="Link in Bio, Instagram, Linktree" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Link in Bio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bio.pungrumpy.com" />
        <meta property="og:image" content="/background.jpg" />
        <meta property="og:site_name" content="Link in Bio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pungrumpy_p" />
        <meta name="twitter:creator" content="@pungrumpy_p" />
        <meta name="twitter:title" content="Link in Bio" />
        <meta name="twitter:image" content="/background.jpg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
