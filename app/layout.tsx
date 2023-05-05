import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
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
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Link in Bio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wtpp_p114" />
        <meta name="twitter:creator" content="@wtpp_p114" />
        <meta name="twitter:title" content="Link in Bio" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/background.jpg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default Layout
