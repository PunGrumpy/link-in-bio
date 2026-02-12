import type { SVGProps } from 'react'

type SVGIconProps = SVGProps<SVGSVGElement>

export const Icons = {
  Logo: (props: SVGIconProps) => (
    <svg fill="none" height="64" viewBox="0 0 64 64" width="64" {...props}>
      <title>PunGrumpy</title>
      <path
        d="M35.2778 0C53.4508 0 61.5 8.91871 61.5 25.6826C61.5 38.0697 56.2722 47.4013 43.7419 47.4013C36.6055 47.4013 31.7096 44.511 26.1498 37.2439L16.6069 24.7742C14.5323 22.1316 10.6322 21.9665 8.05977 24.7742C5.81927 27.2516 6.23418 30.8852 8.3917 33.28L18.5985 44.6761C22.0007 48.5574 23.4114 51.6955 23.4114 55.7419C23.4114 61.5226 19.8432 64 13.4536 64C7.72785 64 2.5 62.1006 2.5 51.6955V16.1032C2.5 6.85419 7.56188 0 18.3495 0H35.2778ZM14.6983 17.0942C14.6983 18.4981 15.5281 19.7368 17.6027 20.8103L46.3973 35.3445C54.7785 39.5561 59.4255 34.271 55.1104 28.16L42.4972 10.1574C39.5098 5.94581 38.0162 5.53291 33.5352 7.34968L18.1835 13.6258C16.026 14.5342 14.6983 15.36 14.6983 17.0942Z"
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
