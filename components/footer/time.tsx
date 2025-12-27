'use client'

import { useAnimationFrame } from 'framer-motion'
import { useState } from 'react'

export const Time = () => {
  const [time, setTime] = useState('--:--:--.---')

  useAnimationFrame(() => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0')

    setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
  })

  return (
    <div className="flex gap-1 text-muted-foreground text-sm tracking-widest">
      <span>{'//'}</span>
      <span className="text-foreground tabular-nums">{time}</span>
    </div>
  )
}
