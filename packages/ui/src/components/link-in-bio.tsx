import { DotFilledIcon } from '@radix-ui/react-icons'
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
        className: 'size-6'
      })
    }
    return null
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl"
    >
      <Card className="from-card/90 to-card-foreground/10 overflow-hidden rounded-3xl border-none bg-gradient-to-br shadow-lg backdrop-blur-sm">
        <CardContent className="p-8">
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center"
          >
            <Avatar className="mb-6 size-32 border-2 border-purple-500 ring-4 ring-purple-500/50 transition-all duration-300 hover:scale-105 hover:ring-purple-400">
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback className="bg-purple-500/10 text-2xl text-purple-700 dark:text-purple-300">
                {name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-foreground mb-3 flex items-center gap-4 text-3xl font-bold">
              {name}
              <div className="relative inline-flex">
                <DotFilledIcon
                  className="z-10 size-5 text-green-500"
                  aria-label="Online status"
                />
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/50" />
              </div>
            </h1>
            <p className="text-muted-foreground mb-6 max-w-lg text-center text-base leading-relaxed">
              {description}
            </p>
          </motion.div>
          <motion.div className="space-y-4">
            {links.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/70 hover:bg-secondary/90 group flex items-center justify-between rounded-lg p-4 transition-all duration-200 hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <span className="bg-background group-hover:text-background mr-5 flex size-12 items-center justify-center rounded-md text-purple-600 transition-colors group-hover:bg-purple-500">
                    {renderIcon(link.icon)}
                  </span>
                  <div>
                    <div className="text-foreground text-base font-semibold">
                      {link.text}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {link.subtext}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className="text-muted-foreground/50 size-5 transition-colors group-hover:text-purple-500"
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
