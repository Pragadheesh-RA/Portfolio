import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 pl-2"
    >
      <Code2 className="w-6 h-6 text-teal-500" />
      <span className="font-mono text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
        RA
      </span>
    </motion.div>
  );
}