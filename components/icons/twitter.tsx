import type { SVGProps } from 'react'

export const Twitter = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg aria-label="Twitter" viewBox="0 0 24 24" {...props}>
    <rect fill="currentColor" height="1" width="1" x="22" y="5" />
    <rect fill="currentColor" height="1" width="1" x="22" y="3" />
    <polygon
      fill="currentColor"
      points="21 5 21 6 22 6 22 7 21 7 21 12 20 12 20 14 19 14 19 16 18 16 18 17 17 17 17 18 16 18 16 19 14 19 14 20 11 20 11 21 4 21 4 20 2 20 2 19 1 19 1 18 3 18 3 19 6 19 6 18 7 18 7 17 5 17 5 16 4 16 4 15 3 15 3 14 5 14 5 13 3 13 3 12 2 12 2 10 4 10 4 9 3 9 3 8 2 8 2 4 3 4 3 5 4 5 4 6 5 6 5 7 7 7 7 8 10 8 10 9 12 9 12 5 13 5 13 4 14 4 14 3 19 3 19 4 22 4 22 5 21 5"
    />
  </svg>
)
