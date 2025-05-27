"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Zap, TrendingUp } from "lucide-react"

export default function ServiceProcess() {
  const steps = [
    {
      id: 1,
      icon: Users,
      title: "KOL選定",
      description: "ターゲットに最適なKOLを選定",
      color: "bg-purple-100 text-purple-600",
      iconBg: "bg-purple-200",
    },
    {
      id: 2,
      icon: Target,
      title: "戦略策定",
      description: "効果的なプロモーション戦略を立案",
      color: "bg-blue-100 text-blue-600",
      iconBg: "bg-blue-200",
    },
    {
      id: 3,
      icon: Zap,
      title: "コンテンツ制作",
      description: "魅力的なライブコンテンツを制作",
      color: "bg-green-100 text-green-600",
      iconBg: "bg-green-200",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "成果分析",
      description: "データ分析で継続的に改善",
      color: "bg-orange-100 text-orange-600",
      iconBg: "bg-orange-200",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex items-center">
            <Card className="h-64 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 w-full">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.iconBg}`}>
                  <step.icon className={`h-8 w-8 ${step.color.split(" ")[1]}`} />
                </div>

                {/* Step Number */}
                <div className="text-sm text-gray-500 mb-2 whitespace-nowrap">STEP {step.id}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 whitespace-nowrap">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 flex items-center whitespace-nowrap">
                  {step.description}
                </p>
              </CardContent>
            </Card>

            {/* Arrow between steps - 修正定位 */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex absolute left-full top-1/2 transform -translate-y-1/2 z-10 w-8 justify-center">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
