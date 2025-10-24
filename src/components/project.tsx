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
import Image9 from "../../images/ai-model.png"

import Image10 from "../../images/img10.png"
import Image11 from "../../images/img11.png"
import Image12 from "../../images/img12.png"
import Image13 from "../../images/img13.png"
import Image14 from "../../images/landingpage.png"



const projects = [
  {
    title: "AI-ChatBot",
    description:"This project appears to be an AI-powered chatbot web application built using Next.js (a React framework) — the name suggests “AI_CHATBOT_NEXT.JS”. The goal is likely to allow users to engage in a conversational interface backed by some AI (e.g., an LLM) with a modern web front-end.",
    image:  Image9,
    category: "Frontend",
    github: "https://github.com/Alishba56/AI_CHATBOT_NEXT.JS",
    live: "https://ai-chatbot-next-js-eta.vercel.app/",
  },
  {
    title: "business landing-page",
    description:"This repository appears to be a business landing-page website built to showcase a product/service, company, or startup via a clean and focused single (or few) page layout. The purpose is likely to serve as a promotional site that communicates value, features, call-to-action, and contact information.",   
    image: Image14,
    category: "Frontend",
    github: "https://github.com/Alishba56/Business_Landing_Page",
    live: "https://business-landing-page-liart.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    description:"The repository represents a Next.js marketplace project titled “Honest Bazar”, created for the Next.js Design Jam 2024.It’s an e-commerce web app that allows users to browse, view, and add products to the cart, aiming to combine clean design, responsive UI, and modern frontend technologies.",
    image: Image1,
    category: "Backend",
    github: "https://github.com/Alishba56/Next.js_Design_Jam_2024",
    live: "https://honest-bazar.vercel.app/",
  },
  {
    title: "Blog-Website",
    description: "This project appears to be a blog website developed as “Milestone Three” of a larger series of projects. Its aim is to build a web platform for publishing and viewing blog posts. The focus is on content creation, display of articles, and delivering a readable, user-friendly blog experience.",   
    image:  Image10,
    category: "Frontend",
    github: "https://github.com/Alishba56/milestone-three-blogs-web",
    live: "https://milestone-three-blogs-web-n4hc.vercel.app/ ",
  },
  {
    title: "Personal-Portfolio-Website",
    description:"This project is a personal portfolio website built using HTML and CSS (without a major JavaScript framework). The purpose is to create a personal web presence where your skills, background, projects, and contact information are showcased.",
    image: Image11,
    category: "Frontend",
    github: "https://github.com/Alishba56/project-personal-website-css",
    live: "https://project-personal-website-css.vercel.app/",
  },
  {
    title: "Website-E-commerce",
    description:"This repository appears to be the project or assignment number 06 for a course or module. It likely contains tasks or exercises focusing on a specific topic (e.g., a web‐development assignment, frontend project, programming challenge) and is structured as a learning assignment rather than a full application." ,   
    image: Image12,
    category: "Frontend",
    github: "https://github.com/Alishba56/06-assignment",
    live: "https://06-assignment-rho.vercel.app/",
  },
  {
    title: "blog-website",
    description:"This repository appears to be a combined piece (or two related parts) of coursework labelled “Assignment 4 & 5”. It likely covers the tasks specified in those assignments — probably focusing on frontend/web development fundamentals (such as HTML/CSS/JavaScript) or related topics. It shows your completion of those assignment requirements in code form.",   
    image: Image13,
    category: "Frontend",
    github: "https://github.com/Alishba56/assignment-4-5",
    live: "https://assignment-4-5-vert.vercel.app/",
  },
  {
    title: "Blog-in",
    description:"This project is a blog website built using the headless CMS Sanity and likely a modern front-end framework (e.g., Next.js or React). Its purpose is to provide a platform where blog posts can be created, managed via Sanity, and displayed on a web site. It’s a good portfolio project to demonstrate full-stack capability: content management + dynamic rendering.",
    image: Image7,
    category: "backend",
    github: "https://github.com/Alishba56/Blogs-website-InSanity",
    live: "https://blogs-website-in-sanity.vercel.app/  ",
  },
  {
    title: "Personal_Portfolio",
    description:"This repository is a personal portfolio website built using Tailwind CSS (and possibly some modern frontend tooling). The goal is to showcase your skills, projects and contact information in a clean, responsive design. It acts as your personal brand’s web presence.",
    image: Image2,
    category: "Frontend",
    github: "https://github.com/Alishba56/-project-personal-website-tailwind",
    live: "https://project-personal-website-git-01825f-alishbas-projects-e974bd90.vercel.app/",
  },
  {
    title: "Unit-converter",
    description:"This repository is a simple Python program that serves as a unit converter — it allows users to input a quantity in one unit and convert it into another unit. The goal is to build a basic command-line (or simple UI) tool for educational purposes: practicing Python, control flow, user input, and arithmetic conversions.",
    image: Image3,
    category: "Frontend",
    github: "https://github.com/Alishba56/unit-converter-in-python",
    live: "https://unit-converter-in-python-6mquzdanubii8sns9waspy.streamlit.app/",
  },
  {
    title: "Password-strength-meter",
    description:"This repository is a simple Python program designed as a password strength meter — it allows users to input a password and checks how strong or weak that password is. The goal is to build a small utility that analyses password quality, and gives feedback on how it could be improved.", 
    image: Image4,
    category: "Frontend",
    github: "https://github.com/Alishba56/password-strength-meter-in-python",
    live: "https://password-strength-meter-in-python-fny3zhsdkdncvdlp53n3zf.streamlit.app/",
  },
  {
    title: "Number-Guessing-Game",
    description:"This repository is a simple Python game where the user tries to guess a randomly generated unique number. The aim is to create an interactive console game that tests your guessing skills, gives feedback on each attempt, and tracks attempts until the correct number is found.",
        image: Image5,
    category: "Frontend",
    github: "https://github.com/Alishba56/Unique-Number-Guessing-Game-InPython",
    live: "https://unique-number-guessing-game-inpython-xtcemgfm7kah6fbtwbmbzk.streamlit.app/",
  },
  {
    title: "Analyzer-in",
    description:"This project is a Python script/application that analyses a given text. It allows the user to input or provide a block of text, and then computes basic metrics or insights about it — for example word counts, frequency of words, maybe readability, or other simple text-analytics features.",
    image: Image6,
    category: "Frontend",
    github: "https://github.com/Alishba56/Text-Analyzer-In-Python",
    live: "https://text-analyzer-in-python-00.streamlit.app/",
  },
  {
    title: "E-commerce ",
    description:"This project is an e-commerce website developed as “Milestone Three” of a larger series (likely a course or module). The goal is to deliver a functional online store where users can browse products, add them to a cart, and ultimately purchase (or simulate purchase) items.It demonstrates your understanding of full-stack web development in the context of a standard e-commerce workflow.",    
    image: Image8,
    category: "frontend",
    github: "https://github.com/Alishba56/milestone-three-e-commerce-web",
    live: "https://milestone-three-e-commerce-web.vercel.app/  ",
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

