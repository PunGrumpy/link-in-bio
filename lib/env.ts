import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets-zod'
import { z } from 'zod'

export const env = createEnv({
  extends: [vercel()],
  server: {
    RYBBIT_ID: z.string().min(1).optional()
  },
  client: {},
  runtimeEnv: {
    RYBBIT_ID: process.env.RYBBIT_ID
  }
})
