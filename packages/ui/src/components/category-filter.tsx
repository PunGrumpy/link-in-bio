'use client'

import { categoryVariants } from '@repo/ui/animations/variants'
import { cn } from '@repo/ui/lib/utils'
import { CategoryName } from '@repo/ui/types/profile'
import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: CategoryName[]
  selectedCategory: CategoryName
  onChange: (category: CategoryName) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onChange
}: CategoryFilterProps) {
  return (
    <motion.div
      className="mb-10 flex justify-center gap-1"
      variants={categoryVariants}
    >
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            'relative px-4 py-1.5 text-[13px] transition-colors duration-200',
            selectedCategory === category
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {selectedCategory === category && (
            <div className="bg-muted absolute inset-0 -z-10 rounded-full border shadow-sm" />
          )}
          {category}
        </button>
      ))}
    </motion.div>
  )
}
