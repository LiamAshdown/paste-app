import './globals.css'
import { Providers } from '@/app/providers'
import Footer from '@/components/Footer'
import Modal from '@/components/modal/Modal'
import Nav from '@/components/nav/Nav'
import classNames from 'classnames'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '123 Pastebin - A Pastebin Clone',
  description: 'A pastebin clone built with Next.js, MongoDB and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(inter.className, 'bg-gray-100 dark:bg-zinc-900')}>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <Modal />
        </Providers>
      </body>
    </html>
  )
}
