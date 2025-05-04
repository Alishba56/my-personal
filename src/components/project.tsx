"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "../app/hooks/useScrollAnimation"
import { Github, ExternalLink } from "lucide-react"
import Image1 from "../../images/imag1.png"
import Image2 from "../../images/protfolio 1.png"
import Image3 from "../../images/img3.png"
import Image4 from "../../images/img4.png"
import Image5 from "../../images/img5.png"
import Image6 from "../../images/img6.png"
import Image7 from "../../images/img7.png"
import Image8 from "../../images/img8.png"
import Image9 from "../../images/img9.png"

import Image10 from "../../images/img10.png"
import Image11 from "../../images/img11.png"
import Image12 from "../../images/img12.png"
import Image13 from "../../images/img13.png"



const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product listings, shopping cart, and Stripe integration for payments.",
    image: Image1,
    category: "Backend",
    github: "https://github.com/Alishba56/Next.js_Design_Jam_2024",
    live: "https://honest-bazar.vercel.app/",
  },
  {
    title: "Personal_Portfolio",
    description:
      "A React-based task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    image: Image2,
    category: "Frontend",
    github: "https://github.com/Alishba56/-project-personal-website-tailwind",
    live: "https://project-personal-website-git-01825f-alishbas-projects-e974bd90.vercel.app/",
  },
  {
    title: "Unit-converter",
    description:
      "A weather dashboard built with Vue.js, utilizing the OpenWeatherMap API and Chart.js for data visualization.",
    image: Image3,
    category: "Frontend",
    github: "https://github.com/Alishba56/unit-converter-in-python",
    live: "https://unit-converter-in-python-6mquzdanubii8sns9waspy.streamlit.app/",
  },
  {
    title: "Password-strength-meter",
    description:
      "A RESTful API for a blog application built with Node.js, Express, and MongoDB, featuring user authentication and CRUD operations.",
    image: Image4,
    category: "Backend",
    github: "https://github.com/Alishba56/password-strength-meter-in-python",
    live: "https://password-strength-meter-in-python-fny3zhsdkdncvdlp53n3zf.streamlit.app/",
  },
  {
    title: "Number-Guessing-Game",
    description:
      "A responsive portfolio website built with Gatsby.js, featuring a custom design and animations using Framer Motion.",
    image: Image5,
    category: "Frontend",
    github: "https://github.com/Alishba56/Unique-Number-Guessing-Game-InPython",
    live: "https://unique-number-guessing-game-inpython-xtcemgfm7kah6fbtwbmbzk.streamlit.app/",
  },
  {
    title: "Analyzer-in",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image6,
    category: "Full Stack",
    github: "https://github.com/Alishba56/Text-Analyzer-In-Python",
    live: "https://text-analyzer-in-python-00.streamlit.app/",
  },
  {
    title: "Blog-in",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image7,
    category: "backend",
    github: "https://github.com/Alishba56/Blogs-website-InSanity",
    live: "https://blogs-website-in-sanity.vercel.app/  ",
  },
  {
    title: "E-commerce ",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image8,
    category: "frontend",
    github: "https://github.com/Alishba56/milestone-three-e-commerce-web",
    live: "https://milestone-three-e-commerce-web.vercel.app/  ",
  },
  {
    title: "  E-commerce",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image:  Image9,
    category: "Frontend",
    github: "https://github.com/Alishba56/hackathon-5",
    live: "https://hackathon-5-delta.vercel.app/ ",
  },
  {
    title: "Blog",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image:  Image10,
    category: "Frontend",
    github: "https://github.com/Alishba56/milestone-three-blogs-web",
    live: "https://milestone-three-blogs-web-n4hc.vercel.app/ ",
  },
  {
    title: "personal-website",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image11,
    category: "Frontend",
    github: "https://github.com/Alishba56/project-personal-website-css",
    live: "https://project-personal-website-css.vercel.app/",
  },
  {
    title: "assignment-4-5",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image12,
    category: "Frontend",
    github: "https://github.com/Alishba56/06-assignment",
    live: "https://06-assignment-rho.vercel.app/",
  },
  {
    title: "blog-website",
    description:
      "A real-time chat application built with Socket.io, Express, and React, featuring private messaging and chat rooms.",
    image: Image13,
    category: "Frontend",
    github: "https://github.com/Alishba56/assignment-4-5",
    live: "https://assignment-4-5-vert.vercel.app/",
  },
]

const categories = ["All", "Frontend", "Backend"]

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

