"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

export default function Sidebar() {
  return (
    <motion.nav
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ul className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <motion.li key={item.name} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link href={item.href} className="block bg-white dark:bg-gray-800 p-2 rounded-r-lg shadow-md">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

