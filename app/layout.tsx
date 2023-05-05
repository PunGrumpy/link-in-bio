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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default Layout
