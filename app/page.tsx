"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LiveStreamCarousel from "./components/livestream-carousel"
import TalentCarousel from "./components/talent-carousel"
import CaseStudiesCarousel from "./components/case-studies-carousel"
import Navigation from "./components/navigation"
import ServiceProcess from "./components/service-process"
import LiveCommerceFlow from "./components/live-commerce-flow"
import StrengthsVisual from "./components/strengths-visual"
import LectureExperimentCarousel from "./components/lecture-experiment-carousel"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-cyan-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-cyan-400">You Now!</span>
            </h1>
            <h2 className="font-bold mb-8 text-gray-800">
              <span className="block text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                ライブ配信の<span className="text-pink-500">プロフェッショナル</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl">
              私たちは、TikTok Liveの配信者向けに専門的な運営管理サービスを<span className="whitespace-nowrap">提供し、</span>配信者の人気や収益の向上をサポートいたします。<br />
              または、新規サービスコンテンツにて、TikTokショップパートナー（TSP）として、運営指導、ムービーや配信コンテンツ企画·制作、ショップ管理など、出店様向けにサービスを提供しており、TikTokショップでのビジネスを効果的に拡大できるよう支援しています。
            </p>
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-white text-lg px-8 py-4 rounded-full"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* You Now! Japan Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">You Now! Japan</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Company Information */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">U尚合同会社 | You Now!</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        <strong>設立:</strong> 2021年
                      </span>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        <strong>所在地:</strong> 東京都新宿区百人町3-15-8
                      </span>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        <strong>代表:</strong> 孫 綺若
                      </span>
                    </div>
                  </div>

                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      孫は、自媒体業界において4年間の実務経験を有しており、その経験を活かし2021年に当社を設立いたしました。設立当初は、エンターテイメント系のライブ配信に特化し、プロフェッショナルなマネジメントサービスを提供することで、プラットフォームにおいて優質なライバーを数多く輩出してまいりました。
                    </p>
                    <p>
                      長年の実績と豊富な経験を活かし、近年では、事業領域を拡大し、ライブコマース、広告宣伝、ショート動画制作など、メディア関連事業を多角的に展開しております。
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* CEO Photo */}
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/images/ceo.jpg"
                      alt="代表取締役 孫 綺若"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Strengths - Visual */}
      <section id="strengths" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">You Now!の強み</h2>
          </div>
          <StrengthsVisual />
        </div>
      </section>

      {/* Service Process - Visual */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">サービスプロセス</h2>
            <p className="text-xl text-gray-600">4つのステップで成功をサポート</p>
          </div>
          <ServiceProcess />
        </div>
      </section>

      {/* Creator Network */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">クリエイターネットワーク</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "モデル",
              "デザイナー",
              "歌手",
              "アイドル",
              "俳優",
              "インフルエンサー",
              "アーティスト",
              "クリエイター",
              "ダンサー",
              "ミュージシャン",
              "タレント",
              "ディレクター",
            ].map((talent, index) => (
              <Badge key={index} variant="secondary" className="p-3 text-center justify-center">
                {talent}
              </Badge>
            ))}
          </div>
        </div>
      </section> */}

      {/* Talent Showcase Carousel */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">所属アーティスト</h2>
          </div>
          <TalentCarousel />
        </div>
      </section>

      {/* Live Stream Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ライブ配信の様子</h2>
          </div>
          <LiveStreamCarousel />
        </div>
      </section>

      {/* Case Studies - Carousel */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">事例紹介</h2>
          </div>
          <CaseStudiesCarousel />
        </div>
      </section>

      {/* Lecture & Experiment Examples */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ライブコマース事業過去活動事例<br />
              <span className="text-3xl">講義＆実験</span>
            </h2>
          </div>
          <LectureExperimentCarousel />
        </div>
      </section>

      {/* TikTok Live Commerce Support - Visual Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ライブコマース<span className="whitespace-nowrap">支援フロー</span>
            </h2>
          </div>
          <LiveCommerceFlow />
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="scroll-offset py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact US!</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid gap-8">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-lg font-semibold w-24">住所</span>
                <span className="text-lg">新宿区百人町3-15-8</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-lg font-semibold w-24">電話</span>
                <span className="text-lg">+8107047481030</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-lg font-semibold w-24">Email</span>
                <a href="mailto:contact@younow.jp" className="text-lg text-cyan-300 hover:text-cyan-200">
                  sqr1030@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">You Now!</h3>
              <p className="text-gray-400">TikTok Live配信のプロフェッショナル</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li>KOLネットワークPR</li>
                <li>ライブコマース支援</li>
                <li>TikTokコンサルティング</li>
                <li>ライバー育成</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li>設立: 2021年</li>
                <li>所在地: 東京都新宿区</li>
                <li>代表: 孫 綺若</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 U尚合同会社 You Now! All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
