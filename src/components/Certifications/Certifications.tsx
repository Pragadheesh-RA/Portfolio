import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">
            Certifications and Internship
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Professional certifications and achievements that demonstrate my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/20 space-y-8 sm:space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[33px] sm:-left-[41px] bg-gray-900 p-2 rounded-full border-2 border-teal-500">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                </div>
                
                <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{cert.organization}</p>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                      <motion.span whileHover={{ x: 4 }}>→</motion.span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}