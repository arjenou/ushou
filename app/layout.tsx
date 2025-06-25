import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'U尚合同会社 | You Now! - TikTok配信者向けプロフェッショナルサービス',
  description: 'U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。代表：孫 綺若',
  keywords: 'U尚合同会社, YouNow, ライブコマース, ライバ事務所, TikTok Live, ライバー育成, TikTokショップパートナー, TSP, ライブ配信, インフルエンサー, 孫 綺若, 新宿区, 東京都',
  authors: [{ name: '孫 綺若' }],
  creator: 'U尚合同会社',
  publisher: 'You Now!',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: 'U尚合同会社 | You Now! - TikTok配信者向けプロフェッショナルサービス',
    description: 'U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。ライブコマース支援、ライバー育成、TikTokショップパートナー（TSP）として、効果的なビジネス展開をサポートいたします。',
    url: 'https://younow.co.jp',
    siteName: 'You Now!',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://younow.co.jp/images/ceo.jpg',
        width: 1200,
        height: 630,
        alt: 'U尚合同会社 代表取締役 孫 綺若',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U尚合同会社 | You Now! - TikTok配信者向けプロフェッショナルサービス',
    description: 'U尚合同会社のYou Now!は、TikTok Liveの配信者向けに専門的な運営管理サービスを提供。',
    images: ['https://younow.co.jp/images/ceo.jpg'],
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
  category: 'business',
  classification: 'TikTok配信者向けプロフェッショナルサービス',
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
              "name": "U尚合同会社",
              "alternateName": "You Now!",
              "url": "https://younow.co.jp",
              "logo": "https://younow.co.jp/placeholder-logo.png",
              "description": "TikTok Liveの配信者向けに専門的な運営管理サービスを提供する会社",
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
                "name": "孫 綺若",
                "jobTitle": "代表取締役"
              },
              "foundingDate": "2021",
              "numberOfEmployees": "10",
              "serviceType": [
                "ライブコマース支援",
                "ライバー育成",
                "TikTokショップパートナーサービス",
                "KOLネットワークPR"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
