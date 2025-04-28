"use client";

import React from "react";
import { BrainCircuit, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Interests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="interests" className="py-20 bg-white dark:bg-gray-900">
       <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Interests
                </h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Technical Interests Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <BrainCircuit className="mr-2 w-6 h-6" />
              Technical Interests
            </h3>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
              <li>Exploring Generative AI Technologies</li>
              <li>Enhancing User Experiences through Design and Animation</li>
              <li>Open-source Contribution and Learning New Frameworks</li>
              <li>Latest Technology Advancements in Front-end Web Development</li>
            </ul>
          </div>

          {/* Project Interests Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <LayoutDashboard className="mr-2 w-6 h-6" />
              Project Interests
            </h3>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
              <li>Virtual Assistant Applications</li>
              <li>E-Commerce Websites</li>
              <li>Blog Websites</li>
              <li>Interactive and Responsive Designs & Prototypes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
