"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// 成功事例数据
const caseStudies = [
    {
        id: 1,
        name: "陽葵ひまり",
        image: "/images/success/s1.jpg",
        title: "ライブ配信事例",
        description: "ゼロからスタートで短期間で上位進出",
        badge: "事例",
        badgeColor: "bg-green-100 text-green-800",
    },
    {
        id: 2,
        name: "ANTON",
        image: "/images/success/s3.jpg",
        title: "ブランドコラボレーション",
        description: "モデル×自社ブランドの認知度向上",
        badge: "ブランド連携",
        badgeColor: "bg-blue-100 text-blue-800",
    },
    {
        id: 3,
        name: "hinoenma",
        image: "/images/success/s2.jpg",
        title: "マルチプラットフォーム",
        description: "複数プラットフォームでの総合成長支援",
        badge: "総合支援",
        badgeColor: "bg-purple-100 text-purple-800",
    },
]


export default function CaseStudiesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [visibleCount, setVisibleCount] = useState(3)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const carouselRef = useRef<HTMLDivElement>(null)

    // 创建足够的重复项以支持无限滚动
    const createInfiniteItems = () => {
        // 至少重复2倍以确保无缝滚动
        const repeatCount = Math.max(2, Math.ceil(visibleCount / caseStudies.length) + 1)
        const repeatedItems = []

        for (let i = 0; i < repeatCount; i++) {
            repeatedItems.push(...caseStudies)
        }

        return repeatedItems
    }

    const infiniteItems = createInfiniteItems()

    // レスポンシブ表示数の設定
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(3) // デスクトップ: 3枚
            } else if (window.innerWidth >= 768) {
                setVisibleCount(2) // タブレット: 2枚
            } else {
                setVisibleCount(1) // モバイル: 1枚
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // 自动播放功能
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            goToNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    // 处理无限循环的逻辑
    useEffect(() => {
        if (!isTransitioning) return

        // 当到达接近末尾时，重置到开始位置
        if (currentIndex >= infiniteItems.length - visibleCount) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(0)
                setTimeout(() => setIsTransitioning(true), 50)
            }, 500)
        }
    }, [currentIndex, isTransitioning, visibleCount])

    const goToPrevious = () => {
        if (currentIndex <= 0) {
            setIsTransitioning(false)
            setCurrentIndex(infiniteItems.length - visibleCount - 1)
            setTimeout(() => {
                setIsTransitioning(true)
                setCurrentIndex(infiniteItems.length - visibleCount - 2)
            }, 50)
        } else {
            setCurrentIndex((prev) => prev - 1)
        }
        setIsAutoPlaying(false)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => prev + 1)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    // 获取当前实际的索引（用于指示器）
    const getRealIndex = () => {
        return currentIndex % caseStudies.length
    }

    return (
        <div className="relative max-w-6xl mx-auto">
            {/* メインカルーセル */}
            <div className="relative overflow-hidden">
                <div
                    ref={carouselRef}
                    className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
                    }}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {infiniteItems.map((caseStudy, index) => (
                        <div
                            key={`${caseStudy.id}-${index}`}
                            className="flex-shrink-0 px-4"
                            style={{ width: `${100 / visibleCount}%` }}
                        >
                            <Card className="hover:shadow-lg transition-shadow h-full">
                                <CardHeader className="text-center">
                                    <CardDescription className="text-lg font-medium">{caseStudy.title}</CardDescription>
                                    <CardTitle className="text-xl mb-4">{caseStudy.name}</CardTitle>
                                    {/* 修改图片为矩形，等比例缩放 */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 overflow-hidden rounded-xl shadow-md">
                                            <Image
                                                src={caseStudy.image}
                                                alt={caseStudy.name}
                                                width={224}
                                                height={288}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                                    <Badge className={caseStudy.badgeColor}>{caseStudy.badge}</Badge>
                                </CardContent>
                            </Card>
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
                {caseStudies.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === getRealIndex() ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}
