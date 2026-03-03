'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { social } from '@/lib/social'

export const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <footer className="relative w-full">
      <div className="grid-layout w-full pt-4 pb-6 uppercase">
        <p className="col-span-2 text-tertiary text-xs lg:col-span-3">
          Noppakorn Kaewsalabnil
        </p>
        {!isMobile && (
          <>
            <ul className="col-span-1">
              {social.slice(0, 2).map(item => (
                <li className="decorate text-xs" key={item.title}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-span-1">
              {social.slice(2, 4).map(item => (
                <li className="decorate text-xs" key={item.title}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-span-1">
              {social.slice(4, 6).map(item => (
                <li className="decorate text-xs" key={item.title}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {isMobile === true && (
          <>
            <ul className="col-span-2">
              <li className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()}
              </li>
            </ul>
            <ul className="col-span-2">
              {social.slice(0, 3).map(item => (
                <li className="decorate text-xs" key={item.title}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-span-2">
              {social.slice(3, 6).map(item => (
                <li className="decorate text-xs" key={item.title}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {!isMobile && (
          <ul className="col-span-2 lg:ml-auto">
            <li className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()}
            </li>
          </ul>
        )}
      </div>
    </footer>
  )
}
