import Link from 'next/link'

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center text-center">
    <h1 className="mb-4 font-bold text-6xl">
      <span className="text-stroke">404</span>
    </h1>
    <p className="mb-8 text-xl">
      Oops! The page you&apos;re looking for doesn&apos;t exist.
    </p>
    <Link
      className="font-semibold text-lg transition-colors hover:text-[#ff4500]"
      href="/"
    >
      Go back home
    </Link>
  </div>
)

export default NotFound
