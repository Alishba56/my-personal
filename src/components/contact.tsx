"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ContactProps {
  isOpen: boolean
  onClose: () => void
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({ name: '', email: '', message: '' });
        onClose()
      } else {
        const data = await res.json()
        alert("Failed: " + data.error)
      }
    
  }  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission logic here
  //   console.log({ name, email, message })
  //   // Reset form fields
  //   setName("")
  //   setEmail("")
  //   setMessage("")
  //   onClose()
  // }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Contact Me
            </h2>
            <form onSubmit={handleChange}className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-purple-800 dark:text-purple-200">
                  Name
                </label>
                <input
                name="name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-purple-800 dark:text-purple-200">
                  Email
                </label>
                <input
                name="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-purple-800 dark:text-purple-200">
                  Message
                </label>
                <textarea
                name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

