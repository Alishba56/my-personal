"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Download } from "lucide-react"
import profile from "./alisha.png"
// import cv from "@/Public/Alishba_Shahzad.pdf"

const jobTitles = [
  "Frontend Developer",
  "TypeScript",
  "Framer Motion",
  "React",
  "Next.js",
  "JavaScript",
  "Sanity CMS",
  "Python",
  "Agentic AI",
  "Tailwind CSS",

]

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex  my-20 flex-col-reverse md:flex-row items-center justify-center max-w-6xl w-full">
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Alishba Shahzad
          </motion.h1>
          <div className="h-16 sm:h-20 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-800 dark:text-purple-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                {jobTitles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <motion.p
            className="mb-8 text-sm sm:text-base md:text-lg text-purple-900 dark:text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I&apos;m a passionate web developer with a strong focus on front-end
          technologies. Currently pursuing a Bachelor&apos;s degree in Arts,
          I&apos;m always eager to learn and grow while working on innovative
          projects.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              className="inline-block bg-purple-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
<motion.a
  href={"/Alishba_Shahzad.pdf"}
  download="Alishba_Shahzad_CV.pdf"
  className="inline-flex items-center justify-center bg-pink-100 text-purple-800 dark:bg-purple-800 dark:text-pink-100 py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-200 dark:hover:bg-purple-700 transition-colors duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
  Download CV
</motion.a>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={profile}
            alt="Alishba Shahzad"
            width={400}
            height={400}
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-600 shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

