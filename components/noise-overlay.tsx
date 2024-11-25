'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const noiseOverlayVariants = cva('absolute pointer-events-none select-none', {
  variants: {
    size: {
      default: '-inset-1/2 size-[200%]',
      full: 'inset-0 size-full',
      large: '-inset-full size-[300%]',
      xl: 'inset-[-150%] size-[400%]'
    },
    intensity: {
      light: 'opacity-5',
      default: 'opacity-[0.09]',
      medium: 'opacity-15',
      strong: 'opacity-20',
      heavy: 'opacity-25'
    },
    speed: {
      default: '',
      fast: '[animation-duration:0.5s]',
      rapid: '[animation-duration:0.3s]'
    },
    blend: {
      normal: 'mix-blend-normal',
      multiply: 'mix-blend-multiply',
      screen: 'mix-blend-screen',
      overlay: 'mix-blend-overlay',
      darken: 'mix-blend-darken',
      lighten: 'mix-blend-lighten',
      difference: 'mix-blend-difference'
    }
  },
  defaultVariants: {
    size: 'default',
    intensity: 'default',
    speed: 'default',
    blend: 'normal'
  }
})

export interface NoiseOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noiseOverlayVariants> {
  noiseImage?: string
  zIndex?: number
  active?: boolean
  repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'
  position?: string
  backgroundSize?: string
  fixedPosition?: boolean
  grayscale?: boolean
  priority?: boolean
}

export const NoiseOverlay = React.forwardRef<HTMLDivElement, NoiseOverlayProps>(
  (
    {
      className,
      size = 'xl',
      intensity,
      speed,
      blend,
      noiseImage = 'https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png',
      zIndex = 20,
      active = true,
      repeat = 'repeat',
      position = '0 0',
      backgroundSize = '256px 256px',
      fixedPosition = false,
      grayscale = false,
      priority = true,
      ...props
    },
    ref
  ) => (
    <>
      {priority && <link rel="preload" href={noiseImage} as="image" />}
      <div
        ref={ref}
        className={cn(
          noiseOverlayVariants({ size, intensity, speed, blend }),
          active && 'animate-noise',
          className
        )}
        style={{
          zIndex,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
        {...props}
      >
        <div
          className={cn(
            'absolute size-full',
            grayscale && 'grayscale',
            fixedPosition && 'fixed'
          )}
          style={{
            background: `url("${noiseImage}") ${repeat} ${position}`,
            backgroundSize,
            willChange: 'transform'
          }}
        />
      </div>
    </>
  )
)
NoiseOverlay.displayName = 'NoiseOverlay'
