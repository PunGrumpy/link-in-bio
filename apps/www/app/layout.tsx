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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {/* NextJS App Shell */}
            <div className="fixed inset-0 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
                style={{
                  background: `
                    radial-gradient(circle at 50% 50%,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.5) 100%
                    ),
                    linear-gradient(180deg,
                      rgba(0, 0, 0, 0.8) 0%,
                      rgba(0, 0, 0, 1) 100%
                    )
                  `
                }}
              />

              {/* Futuristic Grid Overlay */}
              <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMnYyaC0yeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')]"
                style={{
                  maskImage:
                    'radial-gradient(circle at center, black, transparent)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, black, transparent)'
                }}
              />

              {/* Animated Border Effect */}
              <div className="absolute inset-0">
                <div className="animate-border-glow absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <div className="animate-border-glow absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
                <div className="animate-border-glow absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <div className="animate-border-glow absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
              </div>

              {/* Content */}
              <main className="relative h-screen w-screen overflow-hidden">
                {children}
              </main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
