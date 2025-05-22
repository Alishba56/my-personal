"use client"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import type { AnimationControls } from "framer-motion"

export function useScrollAnimation(): [React.RefCallback<HTMLElement>, AnimationControls] {
const controls = useAnimation()
const { ref, inView } = useInView({
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