import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ExternalLink } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Creative Developer & Problem Solver
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Building exceptional digital experiences with modern web technologies
            </p>
            
            <div className="flex gap-4 mb-8">
              <SocialIcon url="https://github.com/Pragadheesh-RA" className="hover:scale-110 transition-transform" />
              <SocialIcon url="https://linkedin.com/in/pragadheesh-r-a" className="hover:scale-110 transition-transform" />
              <SocialIcon url="https://www.instagram.com/pragadheesh_arumugam?igsh=MTYwYnV5cDZiODdkaA== " className="hover:scale-110 transition-transform" />
            </div>

            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Terminal className="w-5 h-5" />
              View Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="rounded-2xl bg-gray-900 w-full h-full p-8 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
    </motion.section>
  );
}