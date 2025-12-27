import { Hero } from './components/hero'
import { Social } from './components/social'

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-8">
    <Hero />
    <Social />
  </div>
)

export default Home
