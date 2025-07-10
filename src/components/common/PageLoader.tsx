import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function PageLoader() {
  const [loadingSteps, setLoadingSteps] = useState<string[]>([]);
  const steps = [
    'Initializing system...',
    'Loading skills from database...',
    'Java, Python, React, Node.js loaded',
    'Importing project experience...',
    'Movie Vault, Mal-Sim, Knotify loaded',
    'Loading certifications...',
    'Full Stack Development ✓',
    'Software Engineering ✓',
    'AI/ML expertise loaded ✓',
    'System ready for deployment'
  ];

  useEffect(() => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        setLoadingSteps(prev => [...prev, step]);
      }, (index + 1) * 1000); // Increased delay for better visibility
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 p-4"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-teal-500/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          <div className="font-mono text-xs sm:text-sm">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-teal-400 mb-1"
              >
                <span className="text-gray-500">{'>'}</span> {step}
              </motion.div>
            ))}
            {loadingSteps.length < steps.length && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-teal-400"
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}