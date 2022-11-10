import gsap, { Back } from 'gsap'
import { useEffect, useRef } from 'react'

function useAnimate() {
  const logoRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const logoQ = gsap.utils.selector(logoRef)
  const cardQ = gsap.utils.selector(cardRef)

  useEffect(() => {
    if (logoRef.current) {
      gsap
        .timeline()
        .set(logoQ('line'), { opacity: 0 })
        .set(logoQ('.text'), { opacity: 0 })
        .fromTo(
          logoQ('.plane'),
          { x: -100, y: 100 },
          { opacity: 1, x: 0, y: 0, duration: 1, ease: Back.easeOut }
        )
        .fromTo(
          logoQ('.plane-left line'),
          {
            scaleX: 0,
            transformOrigin: 'right'
          },
          { opacity: 1, scaleX: 1, duration: 0.5 }
        )
        .fromTo(
          logoQ('.plane-right line'),
          {
            scaleX: 0,
            transformOrigin: 'left'
          },
          { opacity: 1, scaleX: 1, delay: -0.5, duration: 0.5 }
        )
        .to(logoQ('.text'), { opacity: 1, scale: 1, delay: -0.8 })
    }
    if (cardRef.current) {
      gsap
        .timeline()
        .set(cardQ('.card'), { opacity: 0 })
        .set(cardQ('.sticker'), { opacity: 0 })
        .set(cardQ('.title'), { opacity: 0, y: 10 })
        .to(cardQ('.card'), {
          opacity: 1,
          keyframes: { scale: [1.2, 0.9, 1] },
          stagger: 0.08,
          delay: 1
        })
        .to(cardQ('.sticker'), {
          opacity: 1,
          keyframes: { scale: [1.4, 0.9, 1] },
          stagger: 0.08,
          delay: -0.8
        })
        .to(cardQ('.title'), { opacity: 1, y: 0 })
    }
  }, [])

  return [cardRef, logoRef]
}

export default useAnimate
