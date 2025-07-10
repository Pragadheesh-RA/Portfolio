import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'movie-vault',
    title: 'Movie Vault - Java-Driven Bookstore Management System',
    shortDescription: 'Developed with Java GUI and MySQL, using sophisticated tabulation for enhanced visuals.',
    description: `A comprehensive bookstore management system built with Java GUI and MySQL. Features include:
      • Sophisticated tabulation for enhanced visual presentation
      • Efficient movie details store operations with efficient movie list searching
      • Streamlined store operations management
      • User-friendly interface for smooth data handling and intuitive navigation
      • Advanced search and filtering capabilities`,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1600',
    technologies: ['Java', 'MySQL', 'GUI Programming', 'JDBC'],
    featured: true
  },
  {
    id: 'mal-sim',
    title: 'Mal-Sim - Malware Detection System - Machine Learning',
    shortDescription: 'Developed a lightweight, high-accuracy malware detection system using the CIC-MalMem-2022 dataset.',
    description: `A lightweight, high-accuracy malware detection system using advanced machine learning:
      • Achieved over 99% accuracy for 11 out of 15 malware subtypes
      • Built using CIC-MalMem-2022 dataset (58,596 samples)
      • Subtype-specific Random Forest models trained on top 5 features
      • Integrated SHAP for interpretability, enabling clear insights into model decisions
      • Optimized for speed and memory size, ensuring fast and scalable deployment`,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'SHAP', 'CIC-MalMem-2022'],
    demoUrl: 'https://malsim-predictor.netlify.app/',
    githubUrl: 'https://github.com/Pragadheesh-RA/MiniProject-MalSim',
    featured: true
  },
  {
    id: 'knotify',
    title: 'Knotify - Interactive Wedding Invitation Web App',
    shortDescription: 'Developed a full-stack, interactive wedding invitation website using React for the frontend.',
    description: `A full-stack wedding invitation platform built with modern technologies:
      • Developed using React for the frontend, Node.js with Express for the backend
      • Tailwind CSS for styling with responsive design
      • Allows couples to personalize there wedding invite with unique way of inviting and manage RSVP responses
      • Share event details such as venue, schedule, and gift registry with guests
      • Provides a seamless user experience with real-time updates and notifications
      • Features a user-friendly dashboard for managing guest lists and RSVPs
      • Includes a gallery for sharing photos and memories
      • Timeline for the wedding event with countdown timer     
      • Responsive design for mobile and desktop devices
      • Easy-to-use interface for both guests and hosts
      • Integrated with social media for easy sharing
      • Supports multiple languages and themes for customization
      • Real-time guest list updates and event management features`,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    demoUrl: 'https://rafinity-knotify.netlify.app/',
    githubUrl: 'https://github.com/Pragadheesh-RA/knotify',
    featured: true
  }
];