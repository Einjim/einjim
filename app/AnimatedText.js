'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedText({ as: Tag = 'p', children, className = '' }) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const originalText = element.textContent

    const animateText = () => {
      if (animated.current) return
      animated.current = true
      element.textContent = ''
      let index = 0

      const typeNextCharacter = () => {
        if (index < originalText.length) {
          element.textContent += originalText[index]
          index++
          setTimeout(typeNextCharacter, 50)
        }
      }

      typeNextCharacter()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText()
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`animate-text ${className}`}>
      {children}
    </Tag>
  )
}
