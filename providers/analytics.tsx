import { Databuddy } from '@databuddy/sdk/react'
import Script from 'next/script'
import { env } from '@/lib/env'

export const AnalyticsProvider = () => (
  <>
    <Script
      data-site-id={env.RYBBIT_ID}
      defer
      src="https://app.rybbit.io/api/script.js"
    />
    <Databuddy
      clientId={env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID}
      enableBatching={true}
      trackAttributes={true}
      trackBounceRate={true}
      trackEngagement={true}
      trackErrors={true}
      trackExitIntent={true}
      trackHashChanges={true}
      trackInteractions={true}
      trackOutgoingLinks={true}
      trackScrollDepth={true}
      trackWebVitals={true}
    />
  </>
)
