"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Users, BookOpen, Play, BarChart3 } from "lucide-react"

export default function LiveCommerceFlow() {
  const flowSteps = [
    {
      icon: Users,
      title: "交流会",
      description: "業界関係者とのネットワーキング",
      color: "bg-purple-500",
    },
    {
      icon: BookOpen,
      title: "テクニック講習",
      description: "ライブコマースの手法を学習",
      color: "bg-blue-500",
    },
    {
      icon: Play,
      title: "配信実演",
      description: "実践的なライブ配信トレーニング",
      color: "bg-green-500",
    },
    {
      icon: BarChart3,
      title: "成果測定",
      description: "データ分析による効果検証",
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {flowSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-center space-x-6">
              {/* Icon Circle */}
              <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <Card className="flex-1 hover:shadow-lg transition-shadow h-20">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 whitespace-nowrap">{step.title}</h3>
                  <p className="text-gray-600 whitespace-nowrap">{step.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Arrow Down */}
            {index < flowSteps.length - 1 && (
              <div className="flex justify-center my-4">
                <ArrowDown className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
