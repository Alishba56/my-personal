"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "../app/hooks/useScrollAnimation"
import type { Project } from "../app/type"

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Refresh: TechCorp",
    description:
      "A complete brand overhaul for a leading tech company, including logo redesign, color palette update, and new brand guidelines.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Branding",
  },
  {
    id: 2,
    title: "UI/UX: HealthTrack App",
    description:
      "Designed an intuitive and engaging user interface for a health tracking mobile application, focusing on user experience and accessibility.",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "Print: EcoLife Magazine",
    description:
      "Created a visually striking layout design for an eco-lifestyle magazine, balancing beautiful imagery with informative content.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Print",
  },
  {
    id: 4,
    title: "Digital Campaign: FreshBite",
    description:
      "Developed a cohesive digital campaign for a new food delivery service, including social media assets and web banners.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Digital",
  },
]

interface ProjectGalleryProps {
  setSelectedProject: (project: Project) => void
}

export default function ProjectGallery({ setSelectedProject }: ProjectGalleryProps) {
  const [ref, controls] = useScrollAnimation()

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

