import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'You Now! - TikTok配信者向けプロフェッショナル',
  description: 'Created with arjen',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
