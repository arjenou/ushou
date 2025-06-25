import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'U尚合作会社・U尚合同会社 | You Now! - TikTok配信者向けプロフェッショナル',
  description: 'U尚合作会社・U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。',
  keywords: 'U尚合作会社, U尚合同会社, YouNow, ライブコマース, ライバ事務所, TikTok Live, ライバー育成, TikTokショップパートナー, TSP, ライブ配信, インフルエンサー, 東京都新宿区, 孫綺若',
  authors: [{ name: '孫 綺若' }],
  creator: 'U尚合作会社・U尚合同会社',
  publisher: 'You Now!',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: 'U尚合作会社・U尚合同会社 | You Now! - TikTok配信者向けプロフェッショナル',
    description: 'U尚合作会社・U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。',
    url: 'https://younow.co.jp',
    siteName: 'You Now!',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'google4bc874927d189853', 
  },
  alternates: {
    canonical: 'https://younow.co.jp',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "U尚合作会社・U尚合同会社",
              "alternateName": "You Now!",
              "url": "https://younow.co.jp",
              "logo": "https://younow.co.jp/placeholder-logo.png",
              "description": "TikTok Live配信者向けのプロフェッショナルサービスを提供する企業。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）サービスを専門としています。",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "百人町3-15-8",
                "addressLocality": "新宿区",
                "addressRegion": "東京都",
                "addressCountry": "JP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+8107047481030",
                "contactType": "customer service",
                "email": "younow20210422@gmail.com"
              },
              "founder": {
                "@type": "Person",
                "name": "孫 綺若"
              },
              "foundingDate": "2021",
              "numberOfEmployees": "10",
              "serviceType": [
                "ライブコマース支援",
                "ライバー育成", 
                "TikTokショップパートナーサービス",
                "TikTok Live配信管理"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
