import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'You Now! - TikTok配信者向けプロフェッショナル | U尚合同会社',
  description: 'U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。',
  keywords: 'U尚合同会社, YouNow, ライブコマース, ライバ事務所, TikTok Live, ライバー育成, TikTokショップパートナー, TSP, ライブ配信, インフルエンサー',
  authors: [{ name: '孫 綺若' }],
  creator: 'U尚合同会社',
  publisher: 'You Now!',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: 'You Now! - TikTok配信者向けプロフェッショナル | U尚合同会社',
    description: 'U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。',
    url: 'https://younow.jp',
    siteName: 'You Now!',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'google4bc874927d189853', // Google Search Consoleで取得したコードを入れてください
  },
  alternates: {
    canonical: 'https://younow.jp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
          media="all"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
