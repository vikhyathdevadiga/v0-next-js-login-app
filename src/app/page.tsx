import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome</h1>
      <nav style={{ marginTop: '20px' }}>
        <Link href="/auth/login" style={{ marginRight: '20px' }}>
          Login
        </Link>
        <a href="/api/test">Test API</a>
      </nav>
    </div>
  )
}
