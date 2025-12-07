import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets-zod'
import { z } from 'zod'

export const env = createEnv({
  extends: [vercel()],
  server: {
    BETTERSTACK_URL: z.url(),
    BETTERSTACK_API_KEY: z.string()
  },
  client: {
    NEXT_PUBLIC_DATABUDDY_CLIENT_ID: z.string().optional()
  },
  runtimeEnv: {
    BETTERSTACK_URL: process.env.BETTERSTACK_URL,
    BETTERSTACK_API_KEY: process.env.BETTERSTACK_API_KEY,
    NEXT_PUBLIC_DATABUDDY_CLIENT_ID: process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID
  }
})
