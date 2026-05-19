'use client'

import { useReducedMotion } from 'framer-motion'
import { useAnimationFrame } from 'motion/react'
import { useEffect, useState } from 'react'

const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0')

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}

export const Time = () => {
  const [time, setTime] = useState('--:--:--.---')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setTime(formatTime(new Date()))
  }, [])

  useAnimationFrame(() => {
    if (shouldReduceMotion) {
      return
    }

    setTime(formatTime(new Date()))
  })

  return (
    <div className="flex gap-1 text-muted-foreground text-sm tracking-widest">
      <span>{'//'}</span>
      <span className="w-[100px] text-foreground tabular-nums">{time}</span>
    </div>
  )
}
