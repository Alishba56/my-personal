"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Me
        </h2>
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-purple-900 dark:text-purple-200">
          I&apos;m an enthusiastic front-end developer with a passion for building clean, responsive, and user-friendly web applications. Currently pursuing a Bachelor&apos;s degree in Arts, I am committed to expanding my knowledge and exploring new technologies to create modern digital experiences.

          </p>
          <p className="mb-4 text-purple-900 dark:text-purple-200">
          My technical skill set includes HTML, CSS, JavaScript, React, and Next.js. I enjoy crafting intuitive user interfaces, optimizing performance, and ensuring accessibility for all users. I believe that good design and efficient code go hand-in-hand to deliver impactful solutions.

          </p>
          <p className="text-purple-900 dark:text-purple-200">
          Beyond coding, I am a strong believer in continuous learning and personal growth. I thrive in collaborative environments, embrace new challenges with enthusiasm, and am always ready to contribute fresh ideas to exciting projects. Let&apos;s create something amazing together!

          </p>
        </motion.div>
      </div>
    </section>
  )
}

