"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
    <div className="flex justify-center space-x-6 mb-4">
  {[
    { Icon: Github, link: "https://github.com/Alishba56" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/alishba-shahzad-3367092ba/" }, 
    { Icon: Twitter, link: "https://x.com/Alishbah0723" },
  ].map(({ Icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={24} />
    </motion.a>
  ))}
</div>

        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Alishba Shazad. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

