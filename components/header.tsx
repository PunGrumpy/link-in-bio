import { Marquee } from '@/components/ui/marquee'
import { social } from '@/lib/social'

const principles = [
  'DevSecOps',
  'Design Engineering',
  'Adopt new technologies',
  'Collaborate with others',
  'Automate everything'
]

export const Header = () => (
  <header className="relative w-full">
    <div className="grid-layout items-center py-4">
      <div className="col-span-2 flex items-center gap-3">
        {social
          .filter(item => item.icon !== undefined)
          .map(item => (
            <a
              href={item.href}
              key={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <item.icon className="size-6 transition-colors duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-tertiary" />
            </a>
          ))}
      </div>
      <Marquee
        direction={1}
        marqueeClassName="text-muted-foreground uppercase w-fit"
        play
        rootClassName="col-start-5 col-end-8"
        speed={100}
        speedFactor={0.5}
      >
        {principles.map((principle, index) => (
          <p
            className="text-base blur-[1.5px] transition-[filter] duration-300 ease-in-out hover:blur-none"
            key={principle}
          >
            <span>{(index + 1).toString().padStart(2, '0')}</span>
            &nbsp;{principle}
            <span className="ml-8">{'//'}</span>
          </p>
        ))}
      </Marquee>
      <a
        className="col-span-1 ml-auto text-end"
        href="mailto:hello@pungrumpy.com"
      >
        hello@pungrumpy.com
      </a>
    </div>
  </header>
)
