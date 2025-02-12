"use client"

import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/project"
import Sidebar from "@/components/sidebar"
import Skills from "@/components/skill"
import { useState, useEffect } from "react"
import { ThemeProvider } from "./context/themecontext"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const storedContactState = localStorage.getItem("contactOpen")
    if (storedContactState) {
      setIsContactOpen(JSON.parse(storedContactState))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contactOpen", JSON.stringify(isContactOpen))
  }, [isContactOpen])

  const toggleContact = () => {
    setIsContactOpen((prev) => !prev)
  }

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <button
        onClick={toggleContact}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 z-10"
      >
        Contact Me
      </button>
    </div>
    </ThemeProvider>
  )
}

