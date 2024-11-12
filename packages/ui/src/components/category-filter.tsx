import { cn } from '@repo/ui/lib/utils'
import { CategoryName } from '@repo/ui/types/profile'

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
    <div className="mb-10 flex justify-center gap-1">
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
    </div>
  )
}
