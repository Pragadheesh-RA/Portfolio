import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Download, Mail, Laptop } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

const codeAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const codeLine = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 }
};

const codeSnippet = [
  { text: 'const developer = {', className: 'text-teal-400' },
  { text: '  name: "Pragadheesh RA",', className: 'text-cyan-300' },
  { text: '  role: "Certified Full Stack Developer",', className: 'text-cyan-300' },
  { text: '  skills: ["AI/ML", "Java", "Python", "React"],', className: 'text-cyan-300' },
  { text: '  specialization: "AI/ML Development",', className: 'text-cyan-300' },
  { text: '  university: "SASTRA Deemed University",', className: 'text-cyan-300' },
  { text: '  graduation: 2026,', className: 'text-cyan-300' },
  { text: '  location: "Thanjavur, Tamil Nadu"', className: 'text-cyan-300' },
  { text: '};', className: 'text-teal-400' }
];

export function HeroContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Column - Text Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center lg:text-left order-2 lg:order-1"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-500" />
          </span>
          Available for work
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 block"
          >
            Pragadheesh RA
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-800 dark:text-gray-100 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2"
          >
            Certified Full Stack Developer
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto lg:mx-0"
        >
          Crafting intelligent solutions with AI/ML and modern technologies.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm sm:text-base"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-colors text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact Me
          </motion.a>
          <motion.a
            href="/Resume_RA.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Resume
          </motion.a>
        </div>

        <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
          <SocialIcon url="https://github.com/Pragadheesh-RA" className="hover:scale-110 transition-transform" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://linkedin.com/in/pragadheesh-r-a" className="hover:scale-110 transition-transform" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://www.instagram.com/pragadheesh_arumugam?igsh=MTYwYnV5cDZiODdkaA== " className="hover:scale-110 transition-transform" style={{ height: 40, width: 40 }} />
        </div>
      </motion.div>

      {/* Right Column - Code Animation */}
      <motion.div
        variants={codeAnimation}
        initial="initial"
        animate="animate"
        className="relative order-1 lg:order-2"
      >
        <div className="relative max-w-lg mx-auto lg:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
          <div className="relative bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm lg:text-base overflow-x-auto">
              {codeSnippet.map((line, index) => (
                <motion.div
                  key={index}
                  variants={codeLine}
                  className={`${line.className} whitespace-nowrap`}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
            <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 text-teal-400">
              <Laptop className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}