// "use client"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import { X } from "lucide-react"
// import type { Project } from "../app/type"

// interface ProjectModalProps {
//   project: Project
//   onClose: () => void
// }
// export default function ProjectModal({ project, onClose }: ProjectModalProps) {
//   return (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full overflow-hidden"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 20, stiffness: 300 }} >
//         <div className="relative">
//           <Image
//             src={project.image || "/placeholder.svg"}
//             alt={project.title}
//             width={800}
//             height={600}
//             className="w-full h-64 object-cover" />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2"
//             aria-label="Close modal" >
//             <X size={24} />
//           </button>
//         </div>
//         <div className="p-6">
//           <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-4">{project.category}</p>
//           <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

