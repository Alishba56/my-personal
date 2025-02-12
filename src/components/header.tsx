// "use client"

// import { useTheme } from "@/app/context/themecontext"
// import { motion } from "framer-motion"
// import { Sun, Moon } from "lucide-react"

// export default function Header() {
//   const { theme, toggleTheme } = useTheme()

//   return (
//     <motion.header
//       className="fixed w-full z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     >
//       <div className="py-4 flex justify-around items-center">
//         <motion.div
//           className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           My Portfolio
//         </motion.div>
//         <motion.button
//           onClick={toggleTheme}
//           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           aria-label="Toggle theme"
//         >
//           {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//         </motion.button>
//       </div>
//     </motion.header>
//   )
// }

import { useTheme } from "../app/context/themecontext";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="py-4 flex justify-around items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          My Portfolio
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 active:scale-95 transition-transform"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}