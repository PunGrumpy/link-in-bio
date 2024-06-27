import { Link } from '@/app/lib/link'

export async function GET() {
  const links: Link[] = [
    { href: 'https://pungrumpy.com', title: 'Official Website' },
    { href: 'https://www.instagram.com/pungrumpy_p', title: 'Instagram' },
    {
      href: 'https://www.facebook.com/lnoppakornl.lkaewsalabnill',
      title: 'Facebook'
    },
    {
      href: 'https://www.linkedin.com/in/noppakorn-kaewsalabnil',
      title: 'LinkedIn'
    },
    { href: 'https://github.com/PunGrumpy', title: 'GitHub' }
  ]

  return Response.json(
    {
      links
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=60, s-maxage=60'
      },
      statusText: '👻 Booo!'
    }
  )
}
