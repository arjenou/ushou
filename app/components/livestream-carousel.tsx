"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// 直播截图数据 - 真实的直播场景
const liveStreams = [
  {
    id: 1,
    image: "/images/livestreams/stream1.jpg",
    title: "歌唱ライブ配信",
    viewers: "3.7万",
    platform: "TikTok Live",
    streamer: "陽葵ひまり",
  },
  {
    id: 2,
    image: "/images/livestreams/stream2.jpg",
    title: "エンタメライブ",
    viewers: "8.8万",
    platform: "TikTok Live",
    streamer: "タンタン",
  },
  {
    id: 3,
    image: "/images/livestreams/stream3.jpg",
    title: "トークライブ",
    viewers: "26.0万",
    platform: "TikTok Live",
    streamer: "あきせ",
  },
  {
    id: 4,
    image: "/images/livestreams/stream4.jpg",
    title: "インタラクティブ配信",
    viewers: "16.4万",
    platform: "TikTok Live",
    streamer: "タンタン",
  },
  {
    id: 5,
    image: "/images/livestreams/stream5.jpg",
    title: "ゲーム配信",
    viewers: "2.5万",
    platform: "TikTok Live",
    streamer: "東京9ちゃん",
  },
  {
    id: 6,
    image: "/images/livestreams/stream6.jpg",
    title: "クリエイティブ配信",
    viewers: "1.8万",
    platform: "TikTok Live",
    streamer: "アーティスト",
  },
  {
    id: 7,
    image: "/images/livestreams/stream7.jpg",
    title: "音楽ライブ",
    viewers: "362.3万",
    platform: "TikTok Live",
    streamer: "陽葵ひまり",
  },
  {
    id: 8,
    image: "/images/livestreams/stream8.jpg",
    title: "チャット配信",
    viewers: "3.3万",
    platform: "TikTok Live",
    streamer: "MS.佛朗西斯",
  },
  {
    id: 9,
    image: "/images/livestreams/stream9.jpg",
    title: "チャット配信",
    viewers: "3.3万",
    platform: "TikTok Live",
    streamer: "MS.佛朗西斯",
  },
]

export default function LiveStreamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleCount, setVisibleCount] = useState(4)

  // レスポンシブ表示数の設定 - より多く表示
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4) // デスクトップ: 4枚
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3) // タブレット: 3枚
      } else {
        setVisibleCount(2) // モバイル: 2枚
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 自動再生機能
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= liveStreams.length - visibleCount ? 0 : prevIndex + 1))
    }, 4000) // 少し速めに

    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleCount])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? liveStreams.length - visibleCount : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex >= liveStreams.length - visibleCount ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* メインカルーセル */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {liveStreams.map((stream, index) => (
            <div key={stream.id} className="flex-shrink-0 px-2" style={{ width: `${100 / visibleCount}%` }}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* 缩小的竖屏比例 */}
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={stream.image || "/placeholder.svg"}
                      alt={stream.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  ライブ配信らしい装飾
                  <div className="absolute top-2 left-2">
                    <div className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </div>
                  </div>

                  {/* 視聴者数表示
                  <div className="absolute top-2 right-2">
                    <div className="bg-black/60 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                      👥 {stream.viewers}
                    </div>
                  </div> */}

                  {/* 配信情報オーバーレイ
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="text-white font-bold text-sm mb-1">{stream.title}</h3>
                    <p className="text-white/80 text-xs">{stream.streamer}</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 rounded-full w-8 h-8"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-3 w-3" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 rounded-full w-8 h-8"
        onClick={goToNext}
      >
        <ChevronRight className="h-3 w-3" />
      </Button>

      {/* インジケーター */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: liveStreams.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
