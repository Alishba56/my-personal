"use client"

import { useEffect } from "react"

const useScrollAnimation = () => {
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get all elements with the class 'scroll-animated'
      const elements = document.querySelectorAll(".scroll-animated")

      // Loop through each element
      elements.forEach((element) => {
        // Check if the element is in the viewport
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const windowHeight = window.innerHeight

        // Adjust the threshold as needed (e.g., 0.75 for 75% visibility)
        const threshold = 0.75

        if (elementTop < windowHeight * threshold && elementBottom >= 0) {
          // Add the 'active' class to trigger the animation
          element.classList.add("active")
        } else {
          // Remove the 'active' class if the element is not in the viewport
          element.classList.remove("active")
        }
      })
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check on component mount
    handleScroll()

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {}
}

export default useScrollAnimation

