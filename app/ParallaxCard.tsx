'use client'

import React, { useRef, ReactNode, CSSProperties } from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.05
]

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface ParallaxCardProps {
  children: ReactNode
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({ children }) => {
  const ref = useRef<any>(null)
  const [{ xys, gradientAngle }, set] = useSpring(() => ({
    xys: [0, 0, 1],
    gradientAngle: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <animated.div
      ref={ref}
      className="relative px-4 py-10 bg-[rgba(0,0,0,0.6)] bg-opacity-60 backdrop-blur-md shadow-lg sm:rounded-3xl sm:p-20 rounded-xl"
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({
          xys: calc(x, y),
          gradientAngle:
            (Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) *
              180) /
            Math.PI
        })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1], gradientAngle: 0 })}
      style={
        {
          transform: xys.to(trans),
          '--gradient-angle': gradientAngle.to(a => `${a}deg`),
          border: `0.5px solid hsl(0, 0%, 25%)`
        } as unknown as CSSProperties
      }
    >
      {children}
    </animated.div>
  )
}
