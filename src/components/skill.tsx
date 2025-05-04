"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Paintbrush2,
  Code2,
  Braces,
  Feather,
  Github,
  Palette,
  MonitorSmartphone,
  Shuffle,
  Server,
  Rocket,
  BrainCircuit ,
} from "lucide-react"

const skills = [
  { name: "HTML", level: 95, icon: Code2 },
  { name: "CSS", level: 95, icon: Paintbrush2 },
  { name: "JavaScript", level: 80, icon: Braces },
  { name: "TypeScript", level: 85, icon: Code },
  { name: "Next.js", level: 80, icon: Rocket },
  { name: "Tailwind CSS", level: 90, icon: Feather },
  { name: "GSAP", level: 50, icon: Shuffle },
  { name: "Framer Motion", level: 55, icon: Shuffle },
  { name: "Sanity CMS", level: 75, icon: Server },
  { name: "Vercel", level: 80, icon: Rocket },
  { name: "GitHub", level: 90, icon: Github },
  { name: "Responsive Design", level: 90, icon: MonitorSmartphone },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Python", level: 40, icon: BrainCircuit }, // ✅ Newly added

]

const SkillCircle = ({ skill, inView }: { skill: (typeof skills)[0]; inView: boolean }) => {
  const circumference = 2 * Math.PI * 40

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-purple-200 stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          />
          <motion.circle
            className="text-pink-500 stroke-current"
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: inView
                ? circumference - (skill.level / 100) * circumference
                : circumference,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <skill.icon size={32} className="text-purple-600 dark:text-purple-400" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center text-purple-800 dark:text-purple-300">
        {skill.name}
      </h3>
      <p className="text-purple-600 dark:text-purple-400 font-bold">{skill.level}%</p>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-purple-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Skills
        </h2>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCircle skill={skill} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
