"use client"

import { useState, useRef, useEffect } from "react"
import HeartIcon from "./heart-icon"

export default function LoveLetterContent() {
  const [letterText, setLetterText] = useState("")
  const [isPrinted, setIsPrinted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPrinted(true)
        }
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [letterText])

  return (
    <div
      ref={contentRef}
      className={`w-full max-w-2xl mx-auto px-3 sm:px-4 transition-all duration-1000 ${
        isPrinted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Decorative top element */}
      <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
        <div className="relative w-10 sm:w-12 h-10 sm:h-12">
          <HeartIcon className="w-full h-full text-accent animate-pulse-glow" />
        </div>
      </div>

      {/* Date */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
  <p className="font-serif text-sm sm:text-base md:text-lg text-muted-foreground tracking-wide">
    {new Date("2025-11-27").toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
</div>

      {/* Main Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-accent italic tracking-tight leading-tight text-balance">
          Happy First, Love 💛
        </h1>
      </div>

      {/* Parchment container */}
      <div className="relative">
        {/* Shadow effect for parchment */}
        <div className="absolute -inset-4 bg-gradient-to-b from-accent/10 to-transparent rounded-lg blur-xl pointer-events-none" />

        {/* Main letter content */}
        <div className="relative bg-card border-2 border-accent/20 rounded-lg p-6 sm:p-8 md:p-12 shadow-lg backdrop-blur-sm">
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-accent/30 rounded-tl" />
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-accent/30 rounded-tr" />
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-accent/30 rounded-bl" />
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-accent/30 rounded-br" />

          {/* Text area */}
          <textarea
            ref={textareaRef}
            value={letterText}
            onChange={(e) => setLetterText(e.target.value)}
            placeholder="Hello love, Happy 1st year of dating and more to come. Sana habang mas tumatagal mas magiging healthy and solid ang rel natin. Kahit na minsan nag aaway tayo pero ang mahalaga pa rin in the end iniintindi natin ang isa’t isa and na reresolve natin. Bawas bawasan nga natin yung pag aaway o para di tayo nagkakasamaan ng loob. Para sa 1st year of being together natin sana mas maging patient and understanding tayo both. 

Thank you love, kasi kahit may mga shortcomings tayo, pinipili pa rin natin ang isa’t isa araw-araw. Sobrang grateful ako na nandiyan ka to support me, to cheer me on, and to love me in ways na hindi ko inexpect. Mas magiging better partner para sayo mas mahinahon, mas open, mas maalaga. I’m so proud of what we have and what we’re becoming together. Happy 1st year, love. Cheers to more years of growing, loving, and choosing each other every single day.
"
            className="w-full min-h-64 sm:min-h-72 md:min-h-80 bg-transparent font-serif text-base sm:text-lg leading-relaxed text-foreground placeholder-muted-foreground resize-none outline-none border-none focus:ring-0 p-0 overflow-hidden"
          />

          {/* Decorative divider */}
          <div className="my-6 sm:my-8 flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <HeartIcon className="w-3 sm:w-4 h-3 sm:h-4 text-accent/50 flex-shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          {/* Signature area */}
          <div className="mt-6 sm:mt-8 md:mt-12">
            <p className="font-serif text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 italic">Forever yours,</p>
            <div className="border-b border-accent/40 w-40 sm:w-48 mb-2" />
            <p className="font-serif text-base sm:text-lg text-foreground font-light">Liam ❤️</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-accent/40"
            style={{
              animation: `pulse-glow ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
