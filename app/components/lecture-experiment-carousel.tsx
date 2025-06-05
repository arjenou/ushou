"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// 講義＆実験の事例データ
const lectureExamples = [
  {
    id: 1,
    image: "/images/lecture/lecture1.jpg",
    title: "ライブコマース講座",
    description: "実践的なライブコマーステクニック指導",
  },
  {
    id: 2,
    image: "/images/lecture/lecture2.jpg",
    title: "商品PR実験",
    description: "効果的な商品プレゼンテーション実践",
  },
  {
    id: 3,
    image: "/images/lecture/lecture3.jpg",
    title: "配信実技指導",
    description: "ライブ配信の基本からテクニックまで",
  },
  {
    id: 4,
    image: "/images/lecture/lecture4.jpg",
    title: "マーケティング講座",
    description: "データ分析とターゲティング戦略",
  },
  {
    id: 5,
    image: "/images/lecture/lecture5.jpg",
    title: "コミュニケーション実践",
    description: "視聴者との効果的な対話方法",
  },
  // {
  //   id: 6,
  //   image: "/images/lecture/lecture6.jpg",
  //   title: "セールストーク演習",
  //   description: "説得力のある商品説明テクニック",
  // }
]

export default function LectureExperimentCarousel() {
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
      setCurrentIndex((prevIndex) => (prevIndex >= lectureExamples.length - visibleCount ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleCount])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? lectureExamples.length - visibleCount : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex >= lectureExamples.length - visibleCount ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
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
          {lectureExamples.map((example, index) => (
            <div key={example.id} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative w-full h-64">
                    <Image
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* オーバーレイ情報 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* <h3 className="text-white font-bold text-lg mb-1">{example.title}</h3> */}
                    {/* <p className="text-white/80 text-sm">{example.description}</p> */}
                  </div>
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
        {Array.from({ length: lectureExamples.length - visibleCount + 1 }).map((_, index) => (
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