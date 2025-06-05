"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface CaseStudyLightboxProps {
  image: string
  name: string
  title: string
  description: string
  details: string
}

export function CaseStudyLightbox({
  image,
  name,
  title,
  description,
  details,
}: CaseStudyLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105">
          <Image
            src={image}
            alt={name}
            width={224}
            height={288}
            className="w-full h-full object-cover"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] md:h-[80vh] p-0 gap-0">
        <div className="relative w-6 h-6 ml-auto mr-2 mt-2 md:hidden">
          <X className="absolute cursor-pointer text-white drop-shadow-lg" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 h-full max-h-[90vh] md:max-h-full">
          {/* Image section - Maintain aspect ratio on mobile */}
          <div className="relative w-full md:h-full">
            <div className="md:hidden aspect-[3/4] w-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden md:block h-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Content section - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-xl mb-4">{name}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{details}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 