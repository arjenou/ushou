"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Network, DollarSign, Lightbulb } from "lucide-react"

export default function StrengthsVisual() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Three Equal Cards Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Central Know How */}
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none shadow-lg hover:shadow-xl transition-shadow h-80">
          <CardContent className="p-8 text-center h-full flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 mx-auto">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">運営Know How</h3>
            <p className="text-gray-600 leading-relaxed">企画・コンテンツ作成・情報拡散・ブランドPR</p>
          </CardContent>
        </Card>

        {/* KOL Network */}
        <Card className="bg-gradient-to-br from-teal-50 to-cyan-100 border-none shadow-lg hover:shadow-xl transition-shadow h-80">
          <CardContent className="p-8 text-center h-full flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mb-6 mx-auto">
              <Network className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">KOLネットワーク</h4>
            <p className="text-gray-600 leading-relaxed">日本各SNSでの豊富なKOLネットワーク</p>
          </CardContent>
        </Card>

        {/* Monetization Power */}
        <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-none shadow-lg hover:shadow-xl transition-shadow h-80">
          <CardContent className="p-8 text-center h-full flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-6 mx-auto">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">マネータイズ力</h4>
            <p className="text-gray-600 leading-relaxed">他社にはない独自の収益化ノウハウ</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
