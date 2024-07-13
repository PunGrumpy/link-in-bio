'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LinkCardProps {
  href: string
  title: string
}

export const LinkCard: React.FC<LinkCardProps> = ({ href, title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Link
      className="box block rounded-lg text-white font-mplus font-bold text-center hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 focus:bg-[rgba(255,255,255,0.1)] sm:px-6 sm:py-3 px-4 py-3 transition-all duration-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        cursor: `url('https://tobiasahlin.com/static/cursors/pointer.png'), auto`
      }}
    >
      <motion.span
        initial={{ letterSpacing: '0.1em' }}
        animate={{ letterSpacing: '0em' }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.span>
    </Link>
  </motion.div>
)
