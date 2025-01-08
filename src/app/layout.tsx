import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Header from '@/components/header'
import QueryProvider from '@/providers/query-provider'
import ThemeProvider from '@/providers/theme-provider'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Expense tracker application.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="min-h-screen flex flex-col">
              <Header />

              <div className="flex flex-1">
                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-50">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
