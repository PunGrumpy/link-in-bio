import { LinkInBio } from '@repo/ui/components/link-in-bio'

import { profile } from '@/constant/profile'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/background.avif')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative">
        <LinkInBio {...profile} />
      </div>
    </main>
  )
}
