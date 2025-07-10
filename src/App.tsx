import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { NavBar } from './components/Navigation/NavBar';
import { Hero } from './components/Hero/Hero';
import { PageLoader } from './components/common/PageLoader';
import { Footer } from './components/Footer/Footer';
import { ChatBot } from './components/Chat/ChatBot';

// Lazy load components
const About = lazy(() => import('./components/About/About').then(mod => ({ default: mod.About })));
const Skills = lazy(() => import('./components/Skills/Skills').then(mod => ({ default: mod.Skills })));
const Certifications = lazy(() => import('./components/Certifications/Certifications').then(mod => ({ default: mod.Certifications })));
const Projects = lazy(() => import('./components/Projects/Projects').then(mod => ({ default: mod.Projects })));
const Contact = lazy(() => import('./components/Contact/Contact').then(mod => ({ default: mod.Contact })));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <NavBar />
        <ThemeToggle />
        <Hero />
        <Suspense fallback={<PageLoader />}>
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </Suspense>
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}

export default App;