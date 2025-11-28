"use client"

import type React from "react"

import { useEffect, useState } from "react"
import HeartIcon from "./heart-icon"

interface FloatingHeart {
  id: number
  left: number
  delay: number
  duration: number
}

interface BackgroundHeart {
  id: number
  left: number
  top: number
  delay: number
  size: "small" | "tiny"
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])
  const [backgroundHearts, setBackgroundHearts] = useState<BackgroundHeart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [...Array(6)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }))
      setHearts(newHearts)
    }

    generateHearts()

    const interval = setInterval(() => {
      generateHearts()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const bgHearts: BackgroundHeart[] = [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() > 0.6 ? "small" : "tiny",
    }))
    setBackgroundHearts(bgHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {backgroundHearts.map((heart) => (
          <div
            key={`bg-${heart.id}`}
            className="absolute animate-float-background-heart"
            style={
              {
                left: `${heart.left}%`,
                top: `${heart.top}%`,
                animation: `float-background-heart 8s linear infinite`,
                animationDelay: `${heart.delay}s`,
                opacity: 0.15,
              } as React.CSSProperties
            }
          >
            <HeartIcon className={`${heart.size === "small" ? "w-3 h-3" : "w-2 h-2"} text-accent`} />
          </div>
        ))}
      </div>

      {/* Original floating hearts from bottom */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={
            {
              left: `${heart.left}%`,
              bottom: "0",
              "--tx": `${(Math.random() - 0.5) * 100}px`,
              animation: `float-heart ${heart.duration}s ease-in forwards`,
              animationDelay: `${heart.delay}s`,
              opacity: 0.5,
            } as React.CSSProperties
          }
        >
          <HeartIcon className="w-6 h-6 text-accent/60" />
        </div>
      ))}
    </div>
  )
}
