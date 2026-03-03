'use client'

import { useEffect, useRef, useState } from 'react'

export const Noise = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const bufferRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') {
        return
      }
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const canvas = document.createElement('canvas')
    const buffer = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    canvasRef.current = canvas
    bufferRef.current = buffer

    containerRef.current.appendChild(canvas)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      canvas.remove()
      canvasRef.current = null
      bufferRef.current = null
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const buffer = bufferRef.current

    if (!(canvas && buffer)) {
      return
    }
    if (size.width === 0 || size.height === 0) {
      return
    }

    const context = canvas.getContext('2d')
    const bufferContext = buffer.getContext('2d')

    if (!(context && bufferContext)) {
      return
    }

    const dpr = Math.min(
      typeof window !== 'undefined' ? window.devicePixelRatio : 1,
      2
    )
    const width = size.width
    const height = size.height

    canvas.width = width
    canvas.height = height

    const image = context.createImageData(width * dpr, height * dpr)
    const buffer32 = new Uint32Array(image.data.buffer)

    for (let i = 0; i < buffer32.length; i += 1) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff_ff_ff_ff
      }
    }

    buffer.width = width
    buffer.height = height
    bufferContext.putImageData(image, 0, 0)
  }, [size.height, size.width])

  useEffect(() => {
    const canvas = canvasRef.current
    const buffer = bufferRef.current

    if (!(canvas && buffer)) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(
        buffer,
        -Math.random() * 200,
        -Math.random() * 200,
        canvas.width + 200,
        canvas.height + 200
      )

      animationFrameRef.current = window.requestAnimationFrame(draw)
    }

    animationFrameRef.current = window.requestAnimationFrame(draw)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-100000 size-full opacity-[0.06]"
      ref={containerRef}
    />
  )
}
