'use client'

import { animate } from 'motion'
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { cn } from '@/lib/utils'

const POINTER_SELECTOR = "button, a, input, label, [data-cursor='pointer']"
const GRAB_SELECTOR = "[data-cursor='grab']"

export const Cursor = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  cursorClassName?: string
}) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isGrab, setIsGrab] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      const el = cursorRef.current
      if (!el) {
        return
      }
      const size = 40
      const x = clientX - size / 2
      const y = clientY - size / 2
      animate(
        el,
        { x, y },
        {
          duration: hasMoved ? 0.6 : 0,
          ease: [0.16, 1, 0.3, 1]
        }
      )
      setHasMoved(true)
    },
    [hasMoved]
  )

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, false)
    return () => window.removeEventListener('mousemove', onMouseMove, false)
  }, [onMouseMove])

  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor')
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  useEffect(() => {
    const pointerElements = document.querySelectorAll(POINTER_SELECTOR)
    const onEnter = () => setIsPointer(true)
    const onLeave = () => setIsPointer(false)
    for (const el of pointerElements) {
      el.addEventListener('mouseenter', onEnter, false)
      el.addEventListener('mouseleave', onLeave, false)
    }
    return () => {
      for (const el of pointerElements) {
        el.removeEventListener('mouseenter', onEnter, false)
        el.removeEventListener('mouseleave', onLeave, false)
      }
    }
  }, [])

  useEffect(() => {
    const grabElements = document.querySelectorAll(GRAB_SELECTOR)
    const onEnter = () => setIsGrab(true)
    const onLeave = () => setIsGrab(false)
    for (const el of grabElements) {
      el.addEventListener('mouseenter', onEnter, false)
      el.addEventListener('mouseleave', onLeave, false)
    }
    return () => {
      for (const el of grabElements) {
        el.removeEventListener('mouseenter', onEnter, false)
        el.removeEventListener('mouseleave', onLeave, false)
      }
    }
  }, [])

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-5 hidden h-dvh w-full overflow-hidden [@media(hover:hover)]:block',
        className
      )}
      {...props}
    >
      <div
        className="absolute top-0 left-0 size-10 will-change-transform"
        ref={cursorRef}
      >
        <div
          className={cn(
            'size-10 rounded-full bg-muted/40 transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)]',
            {
              'scale-50': isPointer,
              'scale-[0.4]': isGrab
            }
          )}
        />
      </div>
    </div>
  )
}
