import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className='bg-black/90  px-8 md:w-2/5 mx-auto text-white text-lg'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}