import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface NoiseOverlayProps extends ComponentProps<'div'> {}

export const NoiseOverlay = ({ className, ...props }: NoiseOverlayProps) => (
  <div
    aria-hidden="true"
    className={cn(
      'pointer-events-none absolute select-none opacity-[0.09]',
      'inset-[-150%] size-[400%] animate-noise',
      className
    )}
    {...props}
  >
    <div
      className="absolute size-full"
      style={{
        background: `url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png") repeat 0 0`,
        backgroundSize: '256px 256px',
        willChange: 'transform'
      }}
    />
  </div>
)
