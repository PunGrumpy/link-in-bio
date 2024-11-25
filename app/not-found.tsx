import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold">
        <span className="text-stroke">404</span>
      </h1>
      <p className="mb-8 text-xl">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-lg font-semibold transition-colors">
        Go back home
      </Link>
    </div>
  )
}
