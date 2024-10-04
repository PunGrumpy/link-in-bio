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
        className: 'w-5 h-5 sm:w-6 sm:h-6'
      })
    }
    return null
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-md px-4 sm:max-w-lg sm:px-0"
    >
      <Card className="from-card/90 to-card-foreground/10 overflow-hidden rounded-2xl border-none bg-gradient-to-br shadow-lg backdrop-blur-sm sm:rounded-3xl">
        <CardContent className="p-6 sm:p-8">
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-center sm:mb-8"
          >
            <Avatar className="mb-4 size-24 border-2 border-purple-500 ring-2 ring-purple-500/50 transition-all duration-300 hover:scale-105 hover:ring-purple-400 sm:mb-6 sm:size-28">
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback className="bg-purple-500/10 text-2xl text-purple-700 sm:text-3xl dark:text-purple-300">
                {name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-foreground mb-2 flex items-center gap-2 text-center text-2xl font-bold sm:mb-3 sm:text-3xl">
              {name}
            </h1>
            <p className="text-muted-foreground mb-4 max-w-sm text-center text-sm leading-relaxed sm:mb-6 sm:text-base">
              {description}
            </p>
          </motion.div>
          <motion.div className="space-y-3 sm:space-y-4">
            {links.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/70 hover:bg-secondary/90 group flex items-center justify-between rounded-lg p-3 transition-all duration-200 hover:shadow-md sm:p-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <span className="bg-background group-hover:text-background mr-3 flex size-10 items-center justify-center rounded-md text-purple-600 transition-colors group-hover:bg-purple-500 sm:mr-4 sm:size-12">
                    {renderIcon(link.icon)}
                  </span>
                  <div>
                    <div className="text-foreground text-sm font-semibold sm:text-base">
                      {link.text}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      {link.subtext}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className="text-muted-foreground/50 size-4 transition-colors group-hover:text-purple-500 sm:size-5"
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
