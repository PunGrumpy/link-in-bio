import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets-zod'
import { z } from 'zod'

export const env = createEnv({
  extends: [vercel()],
  server: {
    RYBBIT_ID: z.string().optional()
  },
  client: {
    NEXT_PUBLIC_LOGLIB_ID: z.string().optional()
  },
  runtimeEnv: {
    RYBBIT_ID: process.env.RYBBIT_ID,
    NEXT_PUBLIC_LOGLIB_ID: process.env.NEXT_PUBLIC_LOGLIB_ID
  }
})
