import type { SVGProps } from 'react'

type SVGIconProps = SVGProps<SVGSVGElement>

export const Icons = {
  Logo: (props: SVGIconProps) => (
    <svg fill="none" height="64" viewBox="0 0 64 64" width="64" {...props}>
      <title>PunGrumpy</title>
      <path
        d="M35.28 0C53.45 0 61.5 8.92 61.5 25.68C61.5 38.07 56.27 47.4 43.74 47.4C36.61 47.4 31.71 44.51 26.15 37.24L16.61 24.77C14.53 22.13 10.63 21.97 8.06 24.77C5.82 27.25 6.23 30.89 8.39 33.28L18.6 44.68C22 48.56 23.41 51.7 23.41 55.74C23.41 61.52 19.84 64 13.45 64C7.73 64 2.5 62.1 2.5 51.7V16.1C2.5 6.85 7.56 0 18.35 0H35.28ZM14.7 17.09C14.7 18.5 15.53 19.74 17.6 20.81L46.4 35.34C54.78 39.56 59.43 34.27 55.11 28.16L42.5 10.16C39.51 5.95 38.02 5.53 33.54 7.35L18.18 13.63C16.03 14.53 14.7 15.36 14.7 17.09Z"
        fill="currentColor"
      />
    </svg>
  ),
  GlobeIcon: (props: SVGIconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <title>Globe</title>
      <path
        d="m22,9v-2h-1v-2h-1v-1h-1v-1h-2v-1h-2v-1h-6v1h-2v1h-2v1h-1v1h-1v2h-1v2h-1v7h1v1h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1v-6h-1Zm-1,1v4h-3v-4h3Zm-5-6h1v1h2v2h1v1h-3v-3h-1v-1Zm-2,14v2h-1v1h-2v-1h-1v-2h-1v-2h6v2h-1Zm2-8v4h-8v-4h8Zm-7-4h1v-2h1v-1h2v1h1v2h1v2h-6v-2Zm-5,1h1v-2h2v-1h1v1h-1v3h-3v-1Zm-1,7v-4h3v4h-3Zm2,5v-2h-1v-1h3v3h1v1h-1v-1h-2Zm14-2v2h-2v1h-1v-1h1v-3h3v1h-1Z"
        fill="currentColor"
      />
    </svg>
  ),
  GitHubIcon: (props: SVGIconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <title>GitHub</title>
      <polygon
        fill="currentColor"
        points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9"
      />
    </svg>
  ),
  LinkedInIcon: (props: SVGIconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <title>LinkedIn</title>
      <path
        d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z"
        fill="currentColor"
      />
    </svg>
  ),
  TwitterIcon: (props: SVGIconProps) => (
    <svg id="twitter" viewBox="0 0 24 24" {...props}>
      <title>Twitter</title>
      <rect fill="currentColor" height="1" width="1" x="22" y="5" />
      <rect fill="currentColor" height="1" width="1" x="22" y="3" />
      <polygon
        fill="currentColor"
        points="21 5 21 6 22 6 22 7 21 7 21 12 20 12 20 14 19 14 19 16 18 16 18 17 17 17 17 18 16 18 16 19 14 19 14 20 11 20 11 21 4 21 4 20 2 20 2 19 1 19 1 18 3 18 3 19 6 19 6 18 7 18 7 17 5 17 5 16 4 16 4 15 3 15 3 14 5 14 5 13 3 13 3 12 2 12 2 10 4 10 4 9 3 9 3 8 2 8 2 4 3 4 3 5 4 5 4 6 5 6 5 7 7 7 7 8 10 8 10 9 12 9 12 5 13 5 13 4 14 4 14 3 19 3 19 4 22 4 22 5 21 5"
      />
    </svg>
  )
}
