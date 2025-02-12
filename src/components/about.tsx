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
            With over 5 years of experience in web development, Ive had the opportunity to work on a diverse range of
            projects, from small business websites to large-scale enterprise applications. My passion lies in creating
            efficient, scalable, and user-friendly web solutions that solve real-world problems.
          </p>
          <p className="mb-4 text-purple-900 dark:text-purple-200">
            My expertise spans both frontend and backend technologies, including React, Node.js, Python, and various
            database systems. Im a strong advocate for clean code, test-driven development, and continuous
            integration/continuous deployment (CI/CD) practices.
          </p>
          <p className="text-purple-900 dark:text-purple-200">
            When Im not coding, you can find me contributing to open-source projects, writing technical blog posts, or
            exploring the latest web technologies to stay at the forefront of this ever-evolving field.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

