import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jun.Dev',
  description: 'Challenge and Explore',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${fredoka.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
