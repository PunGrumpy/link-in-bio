export type CategoryName = 'Projects' | 'Work' | 'Social' | 'Tech' | 'All'

export interface LinkItem {
  icon: React.ReactNode
  text: string
  subtext: string
  href: string
  category: Exclude<CategoryName, 'All'>
  featured?: boolean
  skills?: string[]
}

export interface ProfileInfo {
  name: string
  title: string
  avatarSrc: string
  location: string
  website: {
    text: string
    href: string
  }
}

export interface LinkInBioProps extends ProfileInfo {
  links: LinkItem[]
  featuredSkills?: string[]
}
