"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Star } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">You Now!</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              サービス
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              実例紹介
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-cyan-400 hover:bg-cyan-500 text-white">
              お問い合わせ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                実例紹介
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-cyan-400 hover:bg-cyan-500 text-white w-full"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
