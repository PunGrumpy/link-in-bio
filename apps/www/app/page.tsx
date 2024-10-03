'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@repo/ui/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Globe, Layout } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-20">
      <motion.main
        className="flex w-full max-w-4xl flex-col items-center gap-12 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            className="dark:invert"
          />
        </motion.div>
        <motion.h1
          className="text-center text-4xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#0099F7] to-[#F11712] bg-clip-text text-transparent">
            Next.js 15
          </span>{' '}
          with Turborepo and shadcn/ui
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-[600px] text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A modern web application using Next.js 15, Turborepo, and shadcn/ui
          components.
        </motion.p>
        <motion.div
          className="bg-muted/50 rounded-lg border p-6 font-mono text-sm leading-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>
            Get started by editing{' '}
            <code className="bg-muted rounded p-1 font-semibold">
              app/page.tsx
            </code>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-3 transition"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
              className="mr-2 dark:invert"
            />
            Deploy now
          </Link>
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="border-primary/10 text-primary hover:bg-primary/10 rounded-full border px-6 py-3 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Turborepo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                High-performance build system for JavaScript and TypeScript
                codebases.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The latest version of the React framework with improved
                performance and developer experience.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </motion.main>
      <motion.footer
        className="mt-16 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <FileText size={16} />
          <span>Learn</span>
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <Layout size={16} />
          <span>Templates</span>
        </Link>
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <Globe size={16} />
          <span>Go to nextjs.org</span>
          <ArrowRight size={16} />
        </Link>
      </motion.footer>
    </div>
  )
}
