import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'

const font = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voicify',
  description:
    'Create AI covers using AI in seconds with Voicify, with hundreds of community uploaded AI voice models available for creative use now!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('container', font.className)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
