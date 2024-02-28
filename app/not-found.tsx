'use client'

import Link from 'next/link'
import Spline from '@splinetool/react-spline'

const NotFound: React.FC = () => {
  return (
    <Link href="/" style={{ cursor: 'pointer' }}>
      <Spline
        scene="https://prod.spline.design/0-eSt6X6XkAemQO9/scene.splinecode"
        style={{ width: '100%', height: '100vh' }}
      />
    </Link>
  )
}

export default NotFound
