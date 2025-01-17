'use client'

import { useEffect, useRef } from 'react'

export function ConfettiAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Confetti particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      color: string
      rotation: number
      rotationSpeed: number
    }> = []

    // Create particles
    const colors = ['#FF4B6E', '#FFB6C1', '#FFF', '#FFE4E1']
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      })
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate((particle.rotation * Math.PI) / 180)

        ctx.fillStyle = particle.color
        ctx.fillRect(-5, -5, 10, 10)

        ctx.restore()

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed

        // Reset if out of bounds
        if (particle.y > canvas.height) {
          particle.y = -10
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  )
}

