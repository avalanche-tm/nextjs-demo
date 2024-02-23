import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Header from '@/components/header/header'
import './globals.css'

const font = localFont({
  variable: '--font-roobert',
  src: [
    {
      path: '../public/assets/fonts/roobert/RoobertRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/roobert/RoobertSemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../public/assets/fonts/roobert/RoobertBold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/assets/fonts/roobert/RoobertHeavy.ttf',
      weight: '900',
      style: 'black',
    },
  ],
})

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
      <body className={cn('container', font.variable, 'font-sans')}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
