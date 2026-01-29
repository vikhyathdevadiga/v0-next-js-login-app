import React from "react"

export const metadata = {
  title: 'Auth App',
  description: 'Minimal Next.js auth app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
