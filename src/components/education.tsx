"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
     <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Education
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Generative AI Course Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Generative AI Course (GIAIC)
            </h3>
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                Key Modules:
              </h4>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>TypeScript (Completed)</li>
                <li>Next.js (Completed)</li>
                <li>Python (Ongoing)</li>
                <li>Generative AI (Upcoming)</li>
              </ul>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Status: In Progress</p>
          </div>

          {/* Bachelor's Degree Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Bachelor&apos;s Degree in Arts
            </h3>
            <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">
              University of Karachi
            </h4>
            <p className="text-gray-500 dark:text-gray-400">Status: In Progress (Undergraduate)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
