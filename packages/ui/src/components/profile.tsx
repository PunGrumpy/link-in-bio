import { avatarVariants, profileVariants } from '@repo/ui/animations/variants'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@repo/ui/components/ui/avatar'
import { ProfileInfo } from '@repo/ui/types/profile'
import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'

export function Profile({
  name,
  title,
  avatarSrc,
  location,
  website
}: ProfileInfo) {
  return (
    <motion.div className="relative mb-16" variants={profileVariants}>
      <div className="flex flex-col items-center">
        <motion.div className="group relative mb-8" variants={avatarVariants}>
          <div className="from-primary/20 to-primary/20 absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <Avatar className="border-border relative size-28 border-2 shadow-lg">
            <AvatarImage
              src={avatarSrc}
              alt={name}
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div className="text-center" variants={profileVariants}>
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm">{title}</p>

          <motion.div
            className="text-muted-foreground mt-6 flex items-center justify-center gap-6 text-[13px]"
            variants={profileVariants}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" strokeWidth={1.5} />
              {location}
            </span>
            <a
              href={website.href}
              className="hover:text-primary flex items-center gap-1.5"
            >
              <Globe className="size-3.5" strokeWidth={1.5} />
              {website.text}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
