import { useEffect, useRef } from 'react'

// Draw the spiral once. CSS handles the entrance without a continuous render loop.
export function Portal() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const ctx = ref.current?.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, 1000, 1000)
    for (let i = 0; i < 112; i++) {
      ctx.beginPath()
      for (let j = 0; j <= 480; j++) {
        const t = j * Math.PI / 240
        const ripple = Math.sin(t * 6 + i * .053) * 11 + Math.cos(t * 3 - i * .04) * 19
        const radius = 156 + i * 2.31 + ripple
        const x = 500 + Math.cos(t) * radius
        const y = 500 + Math.sin(t) * radius * .92
        if (j === 0) ctx.moveTo(x,y)
        else ctx.lineTo(x,y)
      }
      ctx.closePath()
      ctx.strokeStyle = 'hsla(' + (278 + i * .32) + ', 93%, ' + (57 + 14 * Math.sin(i * .12)) + '%, ' + (.22 + .23 * Math.sin(i * .08) ** 2) + ')'
      ctx.stroke()
    }
  }, [])
  return <canvas ref={ref} width="1000" height="1000" className="portal" aria-hidden="true" />
}

