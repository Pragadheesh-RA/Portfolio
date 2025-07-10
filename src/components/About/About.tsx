import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Zap } from 'lucide-react';

export function About() {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Development',
      description: 'Building intelligent systems using machine learning algorithms and artificial intelligence technologies for real-world applications.'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Creating robust applications and systems using modern programming languages like Java, Python, and web technologies.'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Analyzing complex challenges and developing innovative solutions with efficient algorithms and data structures.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A passionate and dedicated Computer Science and Engineering undergraduate with a solid foundation in 
            programming languages, algorithms, and software development. Proficient in Java, Python, and C++, with 
            hands-on experience in using various development tools and frameworks. Particularly interested in web 
            development as a Full Stack Developer, with a keen eye for detail and a drive to build scalable, efficient, 
            and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-rose-500/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}