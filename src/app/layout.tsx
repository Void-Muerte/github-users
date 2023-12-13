import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Users',
  description: 'Inspired by yours truly',
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
