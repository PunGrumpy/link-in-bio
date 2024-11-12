'use client'

import { pageVariants } from '@repo/ui/animations/variants'
import { CategoryFilter } from '@repo/ui/components/category-filter'
import { LinkCard } from '@repo/ui/components/link-card'
import { Profile } from '@repo/ui/components/profile'
import { Card } from '@repo/ui/components/ui/card'
import { Skeleton } from '@repo/ui/components/ui/skeleton'
import { CategoryName, LinkInBioProps } from '@repo/ui/types/profile'
import { motion } from 'framer-motion'
import { useState } from 'react'

function LinkCardSkeleton() {
  return (
    <div className="border-border bg-foreground/[0.02] rounded-xl border p-4">
      <div className="flex items-center gap-4">
        <Skeleton className="size-10 rounded-lg" />
        <div className="flex-1">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="mt-2 h-4 w-48" />
        </div>
      </div>
    </div>
  )
}

export function LinkInBio(props: LinkInBioProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName>('All')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  })

  const categories: CategoryName[] = [
    'All',
    ...Array.from(new Set(props.links.map(link => link.category)))
  ] as CategoryName[]

  const filteredLinks =
    selectedCategory === 'All'
      ? props.links
      : props.links.filter(link => link.category === selectedCategory)

  return (
    <motion.div
      className="mx-auto size-full max-w-xl px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <Card className="bg-background/50 relative overflow-hidden border-none p-8 shadow-2xl backdrop-blur-lg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="from-foreground/[0.03] absolute inset-0 bg-gradient-to-b to-transparent" />
          {hoveredLink && (
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent transition-opacity duration-500" />
          )}
        </div>

        <Profile {...props} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="grid gap-3">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, i) => <LinkCardSkeleton key={i} />)
            : filteredLinks.map(link => (
                <LinkCard
                  key={link.href}
                  link={link}
                  isHovered={hoveredLink === link.href}
                  onHoverStart={() => setHoveredLink(link.href)}
                  onHoverEnd={() => setHoveredLink(null)}
                />
              ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default LinkInBio
