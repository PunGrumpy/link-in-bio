import Layout from './layout'
import Image from 'next/image'
import { Card } from './Card'
import data from './data.json'

const LinkCard: React.FC<{ href: string; title: string }> = ({
  href,
  title
}) => (
  <li>
    <a
      className="box block rounded-lg text-white font-mplus font-bold text-center hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 focus:bg-[rgba(255,255,255,0.1)] sm:px-6 sm:py-3 px-4 py-3 transition-all duration-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        cursor: ` url('https://tobiasahlin.com/static/cursors/pointer.png'), auto`
      }}
    >
      {title}
    </a>
  </li>
)

const HomePage: React.FC = () => {
  const { links } = data

  return (
    <Layout title="Link in Bio" description="Link in Bio for Instagram">
      <div
        className="min-h-screen relative flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-xs mx-auto z-10">
          <Card>
            <div className="box-profile">
              <Image
                src="/author_profile.png"
                alt="Author Profile"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                width={128}
                height={128}
              />
            </div>
            <h1 className="text-3xl font-mplus font-bold text-center mb-8 text-white">
              Link in Bio
            </h1>
            <ul className="space-y-4 sm:mb-2">
              {links.map((link, index) => (
                <LinkCard key={index} href={link.href} title={link.title} />
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
