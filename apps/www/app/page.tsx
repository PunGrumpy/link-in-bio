import { LinkInBio } from '@repo/ui/components/link-in-bio'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

import { profile } from '@/constant/profile'

function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="size-8 animate-spin text-cyan-500" />
        <p className="text-sm text-white/60">Initializing command center...</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LinkInBio {...profile} />
    </Suspense>
  )
}
