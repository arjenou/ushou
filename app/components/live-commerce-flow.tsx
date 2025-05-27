"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowDown,
  Users,
  Package,
  Settings,
  Play,
  HeadphonesIcon,
  BarChart3,
} from "lucide-react"

export default function LiveCommerceFlow() {
  const flowSteps = [
    {
      icon: Users,
      title: "ライバー分析",
      description: "配信者の特性と強みを詳細分析",
      color: "bg-purple-500",
    },
    {
      icon: Package,
      title: "商品分析",
      description: "市場動向と商品特性の徹底調査",
      color: "bg-blue-500",
    },
    {
      icon: Settings,
      title: "販売準備",
      description: "配信環境とセールス戦略の構築",
      color: "bg-green-500",
    },
    {
      icon: Play,
      title: "ライブ運営",
      description: "リアルタイム配信サポートと運営",
      color: "bg-orange-500",
    },
    {
      icon: HeadphonesIcon,
      title: "アフターフォロー",
      description: "顧客満足度向上とリピート促進",
      color: "bg-pink-500",
    },
    {
      icon: BarChart3,
      title: "データ分析",
      description: "成果測定と次回配信への改善提案",
      color: "bg-cyan-500",
    },
  ]

  const secondRowOrderClasses = ["md:order-3", "md:order-2", "md:order-1"]

  return (
    <div className="max-w-6xl mx-auto">
      {/* 2行3列のグリッドレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* 第1行 */}
        {flowSteps.slice(0, 3).map((step, index) => (
          <div key={index} className="relative">
            <Card className="h-48 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="text-sm text-gray-500 mb-2">STEP {index + 1}</div>
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 flex items-center">{step.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* 第2行（使用 md:order-* 控制大屏顺序） */}
        {flowSteps.slice(3, 6).map((step, index) => (
          <div key={index + 3} className={`relative ${secondRowOrderClasses[index]}`}>
            <Card className="h-48 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="text-sm text-gray-500 mb-2">STEP {index + 4}</div>
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 flex items-center">{step.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
