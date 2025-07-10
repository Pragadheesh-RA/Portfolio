import React from 'react';
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

const categories = [
  { name: 'All', count: 12 },
  { name: 'React', count: 5 },
  { name: 'TypeScript', count: 3 },
  { name: 'Web Dev', count: 4 },
  { name: 'DevOps', count: 2 },
  { name: 'Career', count: 3 }
];

export function BlogCategories() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>{category.name}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {category.count}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}