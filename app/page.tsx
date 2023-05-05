import React from 'react'
import Layout from './layout'
import Image from 'next/image'
import { ParallaxCard } from './ParallaxCard'

const LinkCard: React.FC<{ href: string; title: string }> = ({
  href,
  title
}) => (
  <li>
    <a
      className="block px-6 py-3 rounded-lg text-white font-mplus font-bold text-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </li>
)

const HomePage: React.FC = () => {
  const links = [
    { href: 'https://example.com', title: 'Example Link 1' },
    { href: 'https://example.com', title: 'Example Link 2' },
    { href: 'https://example.com', title: 'Example Link 3' }
  ]

  return (
    <Layout title="Link in Bio" description="Link in Bio Vertical Website">
      <div
        className="min-h-screen bg-cover bg-center py-6 flex flex-col justify-center sm:py-12"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <ParallaxCard>
            <div className="box-profile ">
              <Image
                src="/author_profile.png"
                alt="Author Profile"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                width={128}
                height={128}
              />
            </div>
            <h1 className="text-4xl font-mplus font-bold text-center mb-4 text-white">
              My Links
            </h1>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <LinkCard key={index} href={link.href} title={link.title} />
              ))}
            </ul>
          </ParallaxCard>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
