 "use client"

import { useInView } from "react-intersection-observer"
import { useAnimation, type AnimationControls } from "framer-motion"
import { useEffect, useRef } from "react"

export function useScrollAnimation(): [React.RefObject<HTMLDivElement>, AnimationControls] {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return [ref, controls]
}
