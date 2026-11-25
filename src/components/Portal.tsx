import { useEffect, useRef } from 'react'

// Fine latitude lines give the backlit disc the texture of an engraved record.
export function Portal() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = ref.current?.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, 900, 900)
    ctx.strokeStyle = 'rgba(92, 57, 40, .24)'
    ctx.lineWidth = 1.25

    for (let latitude = -140; latitude < 1050; latitude += 5) {
      ctx.beginPath()
      for (let x = 0; x <= 900; x += 6) {
        const y = latitude + 48 * Math.sin(x / 230 + latitude / 210)
          + 22 * Math.sin(x / 105 - latitude / 240)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }, [])

  return <div className="celestial" aria-hidden="true">
    <div className="disc"><canvas width="900" height="900" ref={ref} /></div>
    <i className="orbit orbit-wide" /><i className="orbit orbit-tilted" />
    <i className="star star-high" /><i className="star star-low" />
  </div>
}
