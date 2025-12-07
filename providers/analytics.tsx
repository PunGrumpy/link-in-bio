import { Databuddy } from '@databuddy/sdk/react'
import { env } from '@/lib/env'

export const AnalyticsProvider = () => (
  <Databuddy
    clientId={env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID}
    enableBatching={true}
    trackAttributes={true}
    trackErrors={true}
    trackHashChanges={true}
    trackInteractions={true}
    trackOutgoingLinks={true}
    trackScrollDepth={true}
    trackWebVitals={true}
  />
)
