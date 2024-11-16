'use client'

import { cn } from '@repo/ui/lib/utils'
import { LinkInBioProps } from '@repo/ui/types/profile'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { ArrowUpRight, Globe, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

function BackgroundParticles() {
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 15
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute size-1.5 rounded-full bg-white/10 blur-[2px]"
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

function HolographicHeader({
  name,
  title,
  avatarSrc,
  location,
  website
}: LinkInBioProps) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(
    250px at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 70%
  )`

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseMove={onMouseMove}
      className="relative mx-auto flex max-w-2xl flex-col items-center px-4 pt-24 text-center"
    >
      {/* Profile Image */}
      <motion.div whileHover={{ scale: 1.02 }} className="group relative">
        <div className="absolute -inset-0.5 rounded-full bg-white/10 opacity-0 blur transition-all duration-500 group-hover:opacity-100" />
        <img
          src={avatarSrc}
          alt={name}
          className="relative size-32 rounded-full border-2 border-white/10 object-cover shadow-lg transition-all duration-500"
        />
      </motion.div>

      {/* Name and Title */}
      <div className="relative mt-8">
        <motion.div
          className="pointer-events-none absolute -inset-x-4 -inset-y-2 z-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.08), transparent)',
            WebkitMaskImage: maskImage,
            maskImage: maskImage
          }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl font-medium text-white/90">{name}</h1>
          <p className="mt-2 font-light text-white/60">{title}</p>
        </div>
      </div>

      {/* Location and Website */}
      <div className="mt-6 flex items-center gap-6 text-sm text-white/50">
        <motion.span
          whileHover={{ scale: 1.02, color: 'rgba(255, 255, 255, 0.8)' }}
          className="flex items-center gap-2"
        >
          <MapPin className="size-4" strokeWidth={1.5} />
          {location}
        </motion.span>
        <motion.a
          whileHover={{ scale: 1.02, color: 'rgba(255, 255, 255, 0.8)' }}
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

function LinkCard({ link }: { link: LinkInBioProps['links'][0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(
    150px at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.08) 0%,
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
        'group relative overflow-hidden rounded-xl border bg-white/[0.02] p-4 transition-all duration-300',
        'hover:bg-white/[0.04]',
        link.featured ? 'border-blue-500/20' : 'border-white/[0.08]'
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: link.featured
            ? 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))'
            : 'rgba(255, 255, 255, 0.01)',
          WebkitMaskImage: maskImage,
          maskImage: maskImage
        }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon Container */}
        <div className="flex size-12 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.04]">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {link.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-light text-white/90">
            {link.text}
          </h3>
          <p className="mt-1 truncate text-sm font-light text-white/50">
            {link.subtext}
          </p>

          {/* Skills Tags */}
          {link.skills && (
            <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
              {link.skills.map(skill => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-light text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow Icon */}
        <motion.div
          animate={{
            x: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="hidden sm:block"
        >
          <ArrowUpRight className="size-5 text-white/70" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Featured Badge */}
      {link.featured && (
        <div className="absolute right-3 top-3">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-light text-blue-300">
            Featured
          </span>
        </div>
      )}
    </motion.a>
  )
}

export function LinkInBio(props: LinkInBioProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0B]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-50" />
        <BackgroundParticles />
      </div>

      {/* Content */}
      <div className="relative">
        <HolographicHeader {...props} />

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl gap-3 px-4 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {props.links.map(link => (
            <LinkCard key={link.href} link={link} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LinkInBio
