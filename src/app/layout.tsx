/* eslint-disable camelcase */
import './globals.css'

import type { Metadata } from 'next'
import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Quizzit',
    default: 'Quizzit',
  },
  description:
    "Quizzit is the only app you'll need to be an outstanding student.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${sora.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
