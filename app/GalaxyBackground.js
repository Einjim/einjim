'use client'

import { useEffect } from 'react'

export default function GalaxyBackground() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.id = 'galaxy'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    let width, height

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const stars = []
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      })
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.5) + ')'
        ctx.fill()
      }
    }

    const updateStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.x += star.vx / 30
        star.y += star.vy / 30
        if (star.x < 0 || star.x > width) star.vx = -star.vx
        if (star.y < 0 || star.y > height) star.vy = -star.vy
      }
    }

    let animFrameId
    const animate = () => {
      drawStars()
      updateStars()
      animFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resizeCanvas)
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
    }
  }, [])

  return null
}
