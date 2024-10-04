import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@repo/ui/components/ui/avatar'
import { Card, CardContent } from '@repo/ui/components/ui/card'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import React from 'react'

interface LinkItem {
  icon: string | React.ReactNode
  text: string
  subtext: string
  href: string
}

interface LinkInBioProps {
  name: string
  avatarSrc: string
  description: string
  links: LinkItem[]
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
}

export function LinkInBio({
  name,
  avatarSrc,
  description,
  links
}: LinkInBioProps) {
  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') return icon
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement, {
        className: 'w-6 h-6 sm:w-8 sm:h-8'
      })
    }
    return null
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-3xl px-4 sm:px-6"
    >
      <Card className="from-card/90 to-card-foreground/10 overflow-hidden rounded-2xl border-none bg-gradient-to-br shadow-lg backdrop-blur-sm sm:rounded-3xl">
        <CardContent className="p-6 sm:p-10">
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col items-center sm:mb-12"
          >
            <Avatar className="mb-6 size-32 border-4 border-purple-500 ring-4 ring-purple-500/50 transition-all duration-300 hover:scale-105 hover:ring-purple-400 sm:mb-8 sm:size-40">
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback className="bg-purple-500/10 text-3xl text-purple-700 sm:text-4xl dark:text-purple-300">
                {name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-foreground mb-3 flex items-center gap-2 text-center text-3xl font-bold sm:mb-4 sm:gap-4 sm:text-4xl">
              {name}
            </h1>
            <p className="text-muted-foreground mb-6 max-w-lg text-center text-base leading-relaxed sm:mb-8 sm:text-lg">
              {description}
            </p>
          </motion.div>
          <motion.div className="space-y-4 sm:space-y-6">
            {links.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/70 hover:bg-secondary/90 group flex items-center justify-between rounded-xl p-4 transition-all duration-200 hover:shadow-md sm:p-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <span className="bg-background group-hover:text-background mr-4 flex size-12 items-center justify-center rounded-lg text-purple-600 transition-colors group-hover:bg-purple-500 sm:mr-6 sm:size-16">
                    {renderIcon(link.icon)}
                  </span>
                  <div>
                    <div className="text-foreground text-lg font-semibold sm:text-xl">
                      {link.text}
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      {link.subtext}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className="text-muted-foreground/50 size-5 transition-colors group-hover:text-purple-500 sm:size-6"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
