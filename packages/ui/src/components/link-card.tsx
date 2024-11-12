'use client'

import { cardVariants } from '@repo/ui/animations/variants'
import { Badge } from '@repo/ui/components/ui/badge'
import { cn } from '@repo/ui/lib/utils'
import { LinkItem } from '@repo/ui/types/profile'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface LinkCardProps {
  link: LinkItem
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export function LinkCard({
  link,
  isHovered,
  onHoverStart,
  onHoverEnd
}: LinkCardProps) {
  const { featured, icon, text, subtext, href, skills } = link

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={cn(
        'group relative overflow-hidden rounded-xl border transition-all duration-300',
        'border-border bg-foreground/[0.02]',
        'hover:border-foreground/[0.12] hover:bg-foreground/[0.04]',
        'touch-none active:scale-[0.98]',
        featured && 'border-sky-500/20'
      )}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              'flex size-10 items-center justify-center rounded-lg transition-all duration-300',
              'bg-foreground/[0.02] border-foreground/[0.08] border',
              'group-hover:border-foreground/[0.12] group-hover:bg-foreground/[0.04]'
            )}
          >
            {icon}
          </div>
          <div>
            <p className="text-foreground/90 font-light tracking-wide">
              {text}
            </p>
            <p className="text-foreground/40 mt-0.5 text-[13px] font-light tracking-wide">
              {subtext}
            </p>
            {skills && (
              <div className="mt-2 flex flex-wrap gap-1">
                {skills.map(skill => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={cn(
                      'border-foreground/10 text-foreground/60',
                      'px-1.5 py-0 text-[10px]',
                      'hidden sm:inline-flex'
                    )}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className={cn(
            'transition-transform duration-300',
            'hidden sm:block',
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          )}
        >
          <ArrowUpRight
            className="text-foreground/80 size-5"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {featured && (
        <Badge
          variant="outline"
          className={cn(
            'absolute border-sky-500/20 bg-sky-500/5',
            'text-[12px] font-light tracking-wide text-sky-500/80',
            'right-2 top-2 sm:right-4 sm:top-4',
            'max-w-[90px] truncate sm:max-w-none'
          )}
        >
          Featured
        </Badge>
      )}
    </motion.a>
  )
}
