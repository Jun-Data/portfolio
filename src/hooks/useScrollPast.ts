'use client'

import { useState, useEffect } from 'react'

export function useScrollPast(threshold: number = 100) {
  const [isPast, setIsPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsPast(window.scrollY > threshold)
    }

    handleScroll() // 초기값 설정

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])
  return isPast
}
