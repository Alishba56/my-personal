"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "../app/hooks/useScrollAnimation"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product listings, shopping cart, and Stripe integration for payments.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Full Stack",
    github: "https://github.com/johndoe/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Frontend",
    github: "https://github.com/johndoe/task-management-app",
    live: "https://task-management-app-demo.netlify.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard built with Vue.js, utilizing the OpenWeatherMap API and Chart.js for data visualization.",
    image: "/placeholder.svg?height=500&width=400",
    category: "Frontend",
    github: "https://github.com/johndoe/weather-dashboard",
    live: "https://weather-dashboard-demo.netlify.app",
  },
  {
    title: "Blog API",
    description:
      "A RESTful API for a blog application built with Node.js, Express, and MongoDB, featuring user authentication and CRUD operations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Backend",
    github: "https://github.com/johndoe/blog-api",
    live: "https://blog-api-demo.herokuapp.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Gatsby.js, featuring a custom design and animations using Framer Motion.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Frontend",
    github: "https://github.com/johndoe/portfolio-website",
    live: "https://johndoe-portfolio.netlify.app",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: "/placeholder.svg?height=450&width=600",
    category: "Full Stack",
    github: "https://github.com/johndoe/realtime-chat-app",
    live: "https://realtime-chat-app-demo.herokuapp.com",
  },
]

const categories = ["All", "Frontend", "Backend", "Full Stack"]

export default function Projects() {
  const [ref, controls] = useScrollAnimation()
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

