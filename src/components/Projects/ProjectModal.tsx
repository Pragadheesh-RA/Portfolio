import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              {project.title}
            </h2>
            
            <div className="prose prose-invert max-w-none mb-6 sm:mb-8">
              <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors text-sm sm:text-base"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}