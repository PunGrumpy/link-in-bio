import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@repo/ui/components/ui/avatar'
import { ProfileInfo } from '@repo/ui/types/profile'
import { Mail, MapPin } from 'lucide-react'

export function Profile({
  name,
  title,
  avatarSrc,
  location,
  email
}: ProfileInfo) {
  return (
    <div className="relative mb-16">
      <div className="via-border pointer-events-none absolute inset-x-0 top-12 -z-10 h-px bg-gradient-to-r from-transparent to-transparent" />

      <div className="flex flex-col items-center">
        <div className="group relative mb-8">
          <div className="from-primary/20 to-primary/20 absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <Avatar className="border-border relative size-28 border-2 shadow-lg">
            <AvatarImage
              src={avatarSrc}
              alt={name}
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <AvatarFallback className="bg-muted">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="text-center">
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm">{title}</p>

          <div className="text-muted-foreground mt-6 flex items-center justify-center gap-6 text-[13px]">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" strokeWidth={1.5} />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5" strokeWidth={1.5} />
              {email}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
