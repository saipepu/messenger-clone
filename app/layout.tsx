import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone with Next js 13 and Pusher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
