"use client"

import { useEffect, useState } from "react"
import FloatingHearts from "@/components/floating-hearts"
import LoveLetterContent from "@/components/love-letter-content"

export default function LoveLetterPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null
  }

  return (
    <main className="relative bg-gradient-to-b from-background via-background to-secondary">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating animated hearts background */}
      <FloatingHearts />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <LoveLetterContent />
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </main>
  )
}
