"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
      <DialogContent className="sm:max-w-[900px] h-[80vh] p-0 gap-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left side - Image */}
          <div className="relative h-[300px] md:h-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Right side - Content */}
          <div className="p-6 overflow-y-auto">
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