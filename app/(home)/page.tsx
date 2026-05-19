import { createMetadata } from '@/lib/metadata'
import { Hero } from './components/hero'
import { Social } from './components/social'

export const metadata = createMetadata(
  'PunGrumpy — Link in Bio',
  'Connect with me on various platforms via my link in bio'
)

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
    <Hero />
    <Social />
  </div>
)

export default Home
