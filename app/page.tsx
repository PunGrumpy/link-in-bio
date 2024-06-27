import Image from 'next/image'
import { Card } from './components/card'
import { LinkCard } from './components/link-card'
import { BackgroundVideo } from './components/background-video'
import { Link } from './lib/link'

async function getData(): Promise<Link[]> {
  const response = await fetch('https://bio.pungrumpy.com/api/user', {
    next: { revalidate: 60 }
  })
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { links } = await response.json()
  return links
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <div
        className="min-h-screen relative flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <BackgroundVideo />
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-xs mx-auto z-10">
          <Card>
            <div className="box-profile">
              <Image
                src="/author_profile.png"
                alt="Author Profile"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                width={128}
                height={128}
                priority={true}
              />
            </div>
            <h1 className="text-3xl font-mplus font-bold text-center mb-8 text-white">
              Link in Bio
            </h1>
            <ul className="space-y-4 sm:mb-2">
              {data.map((link: Link) => (
                <LinkCard key={link.href} href={link.href} title={link.title} />
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  )
}
