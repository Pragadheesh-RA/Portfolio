import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 cursor-pointer group h-full flex flex-col"
        onClick={() => setShowModal(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={e => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="p-2 sm:p-3 bg-white rounded-full hover:bg-teal-100 transition-colors"
            >
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            </motion.button>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              onClick={e => e.stopPropagation()}
              className="p-2 sm:p-3 bg-white rounded-full hover:bg-teal-100 transition-colors"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            </motion.a>
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              onClick={e => e.stopPropagation()}
              className="p-2 sm:p-3 bg-white rounded-full hover:bg-teal-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            </motion.a>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 flex-1 text-sm sm:text-base line-clamp-3">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-700 text-gray-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}