'use client'

import { cn } from '@repo/ui/lib/utils'
import { LinkInBioProps } from '@repo/ui/types/profile'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { ArrowUpRight, Globe, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

function BackgroundParticles() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; delay: number; duration: number }>
  >([])

  useEffect(() => {
    // Only create particles after component mount
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute size-1 rounded-full bg-white/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`
          }}
        />
      ))}
    </div>
  )
}

function FuturisticBackground() {
  return (
    <>
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent opacity-20" />

      {/* Moving Particles */}
      <BackgroundParticles />
    </>
  )
}

function HolographicHeader({
  name,
  title,
  avatarSrc,
  location,
  website
}: LinkInBioProps) {
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(
    200px at ${mouseX}px ${mouseY}px,
    white 20%,
    transparent 80%
  )`

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseMove={onMouseMove}
      className="relative mx-auto flex max-w-2xl flex-col items-center px-4 pt-24 text-center"
    >
      {/* Holographic Avatar */}
      <motion.div whileHover={{ scale: 1.05 }} className="group relative">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-75 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
        <img
          src={avatarSrc}
          alt={name}
          className="relative size-32 rounded-full border-2 border-white/10 object-cover backdrop-blur-xl transition-transform duration-500"
        />
      </motion.div>

      {/* Glowing Text */}
      <div className="relative mt-8">
        {isMounted && (
          <motion.div
            className="pointer-events-none absolute -inset-x-4 -inset-y-2 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
              background: 'linear-gradient(to right, #7DD3FC, #818CF8, #C084FC)'
            }}
          />
        )}
        <div className="relative z-10">
          <h1 className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-3xl font-light tracking-tight text-transparent">
            {name}
          </h1>
          <p className="mt-2 text-lg font-light text-white/60">{title}</p>
        </div>
      </div>

      {/* Info Links */}
      <div className="mt-6 flex items-center gap-6 text-sm text-white/40">
        <motion.span
          whileHover={{ scale: 1.05, color: 'rgba(255, 255, 255, 0.8)' }}
          className="flex items-center gap-2"
        >
          <MapPin className="size-4" strokeWidth={1.5} />
          {location}
        </motion.span>
        <motion.a
          whileHover={{ scale: 1.05, color: 'rgba(255, 255, 255, 0.8)' }}
          href={website.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors"
        >
          <Globe className="size-4" strokeWidth={1.5} />
          {website.text}
        </motion.a>
      </div>
    </motion.header>
  )
}

function FuturisticCard({ link }: { link: LinkInBioProps['links'][0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(
    120px at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  )`

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-black/20 p-4 backdrop-blur-sm transition-all duration-300',
        'hover:bg-black/40',
        link.featured ? 'border-cyan-500/30' : 'border-white/10'
      )}
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #7DD3FC, #818CF8, #C084FC)',
          WebkitMaskImage: maskImage,
          maskImage: maskImage
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="group flex size-12 items-center justify-center rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-300">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {link.icon}
          </motion.div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-light text-white/90">
            {link.text}
          </h3>
          <p className="mt-1 truncate font-light text-white/50">
            {link.subtext}
          </p>

          {link.skills && (
            <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
              {link.skills.map(skill => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-sm font-light text-white/70 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        <motion.div
          animate={{
            x: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="size-5 text-white/70" strokeWidth={1.5} />
        </motion.div>
      </div>

      {link.featured && (
        <div className="absolute right-3 top-3">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-light text-cyan-300 backdrop-blur-sm">
            Featured
          </span>
        </div>
      )}
    </motion.a>
  )
}

export function LinkInBio(props: LinkInBioProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950">
      <FuturisticBackground />

      <div className="relative">
        <HolographicHeader {...props} />

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl gap-4 px-4 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {props.links.map(link => (
            <FuturisticCard key={link.href} link={link} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LinkInBio
