"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// 实际艺人数据
const talents = [
  // {
  //   id: 1,
  //   name: "陽葵ひまり",
  //   image: "/images/artists/artist1.jpg",
  //   category: "ライバー",
  // },
  {
    id: 1,
    name: "ANTON",
    image: "/images/artists/artist2.jpg",
    category: "ポッドキャスター",
  },
  {
    id: 2,
    name: "hinoenma",
    image: "/images/artists/artist3.jpg",
    category: "モデル",
  },
  {
    id: 3,
    name: "Kento",
    image: "/images/artists/artist4.jpg",
    category: "インフルエンサー",
  },
  {
    id: 4,
    name: "Yuki",
    image: "/images/artists/artist5.jpg",
    category: "ライバー",
  },
  // {
  //   id: 6,
  //   name: "Ryo",
  //   image: "/images/artists/artist6.jpg",
  //   category: "モデル",
  // },
  {
    id: 5,
    name: "Mika",
    image: "/images/artists/artist7.jpg",
    category: "ダンサー",
  },
  {
    id: 6,
    name: "Mika",
    image: "/images/artists/artist8.jpg",
    category: "ダンサー",
  },
  {
    id: 7,
    name: "himari",
    image: "/images/artists/artist9.jpg",
    category: "モデル",
  },
]

export default function TalentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleCount, setVisibleCount] = useState(4)

  // レスポンシブ表示数の設定
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
      setCurrentIndex((prevIndex) => (prevIndex >= talents.length - visibleCount ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleCount])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? talents.length - visibleCount : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex >= talents.length - visibleCount ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-7xl mx-auto">
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
          {talents.map((talent, index) => (
            <div key={talent.id} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src={talent.image || "/placeholder.svg"}
                    alt={talent.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* オーバーレイ情報 */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{talent.name}</h3>
                    <p className="text-white/80 text-sm">{talent.category}</p>
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* インジケーター */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: talents.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
