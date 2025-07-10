import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleInitialGreeting();
    }
  }, [isOpen]);

  const handleInitialGreeting = async () => {
    setIsTyping(true);
    const greetings = [
      { text: "Hi there! 👋 I'm Pragadheesh's AI assistant.", delay: 500 },
      { text: "I'm a Computer Science & Engineering student from SASTRA University.", delay: 1000 },
      { text: "I can help you learn about:", delay: 1500 },
      { text: "• My AI/ML projects (Mal-Sim malware detection)", delay: 2000 },
      { text: "• Java & Python development skills", delay: 2500 },
      { text: "• Web development projects (Movie Vault, Knotify)", delay: 3000 },
      { text: "• My education and certifications", delay: 3500 },
      { text: "What would you like to know about my work?", delay: 4000 }
    ];

    for (const greeting of greetings) {
      await new Promise(resolve => setTimeout(resolve, greeting.delay));
      setMessages(prev => [...prev, {
        text: greeting.text,
        isBot: true,
        timestamp: new Date()
      }]);
    }
    setIsTyping(false);
  };

  const generateResponse = async (input: string) => {
    const lowerInput = input.toLowerCase();
    let responses: { text: string, delay: number }[] = [];

    if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
      responses = [
        { text: "I've completed several exciting projects! Here are my key ones:", delay: 500 },
        { text: "🎬 Movie Vault - Java-driven bookstore management system", delay: 1000 },
        { text: "   • Built with Java GUI and MySQL with sophisticated tabulation", delay: 1300 },
        { text: "🛡️ Mal-Sim - AI/ML malware detection system", delay: 1600 },
        { text: "   • 99% accuracy using CIC-MalMem-2022 dataset (58,596 samples)", delay: 1900 },
        { text: "💍 Knotify - Interactive wedding invitation web app", delay: 2200 },
        { text: "   • Full-stack React app with Node.js backend", delay: 2500 },
        { text: "Which project would you like to know more about?", delay: 2800 }
      ];
    } else if (lowerInput.includes('mal-sim') || lowerInput.includes('malware') || lowerInput.includes('ai') || lowerInput.includes('ml')) {
      responses = [
        { text: "Mal-Sim is my AI/ML masterpiece! 🤖", delay: 500 },
        { text: "🎯 Achieved 99% accuracy for 11 out of 15 malware subtypes", delay: 1000 },
        { text: "📊 Used CIC-MalMem-2022 dataset with 58,596 samples", delay: 1500 },
        { text: "🌲 Implemented subtype-specific Random Forest models", delay: 2000 },
        { text: "🔍 Integrated SHAP for model interpretability", delay: 2500 },
        { text: "⚡ Optimized for speed and memory efficiency", delay: 3000 },
        { text: "This project showcases my expertise in machine learning!", delay: 3500 }
      ];
    } else if (lowerInput.includes('movie vault') || lowerInput.includes('java') || lowerInput.includes('bookstore')) {
      responses = [
        { text: "Movie Vault is my Java GUI masterpiece! ☕", delay: 500 },
        { text: "🏪 Comprehensive bookstore management system", delay: 1000 },
        { text: "🎨 Sophisticated tabulation for enhanced visuals", delay: 1500 },
        { text: "🔍 Efficient movie list searching and filtering", delay: 2000 },
        { text: "💾 MySQL database integration with JDBC", delay: 2500 },
        { text: "🖱️ User-friendly interface with intuitive navigation", delay: 3000 },
        { text: "This project demonstrates my Java programming skills!", delay: 3500 }
      ];
    } else if (lowerInput.includes('knotify') || lowerInput.includes('wedding') || lowerInput.includes('react')) {
      responses = [
        { text: "Knotify is my full-stack web development project! 💍", delay: 500 },
        { text: "⚛️ Built with React for the frontend", delay: 1000 },
        { text: "🚀 Node.js with Express for the backend", delay: 1500 },
        { text: "🎨 Styled with Tailwind CSS for responsive design", delay: 2000 },
        { text: "💌 Personalized digital invitation cards", delay: 2500 },
        { text: "📝 RSVP management and event details sharing", delay: 3000 },
        { text: "This showcases my modern web development skills!", delay: 3500 }
      ];
    } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('programming')) {
      responses = [
        { text: "I have expertise in multiple technologies! 💻", delay: 500 },
        { text: "🔥 Languages: Java (90%), Python (85%), C/C++ (80%)", delay: 1000 },
        { text: "⚛️ Web: React.js, Node.js, Express.js, HTML/CSS", delay: 1500 },
        { text: "🛠️ Tools: GitHub, SQL/JDBC, FreeCAD", delay: 2000 },
        { text: "🧠 Specialties: AI/ML, Problem Solving, Data Structures", delay: 2500 },
        { text: "📱 Mobile: Flutter/Dart development", delay: 3000 },
        { text: "Which technology area interests you most?", delay: 3500 }
      ];
    } else if (lowerInput.includes('education') || lowerInput.includes('university') || lowerInput.includes('sastra')) {
      responses = [
        { text: "I'm currently pursuing my education! 🎓", delay: 500 },
        { text: "🏫 B.Tech in Computer Science and Engineering", delay: 1000 },
        { text: "🏛️ SASTRA Deemed University, Thanjavur", delay: 1500 },
        { text: "📅 Expected graduation: 2026", delay: 2000 },
        { text: "📚 Strong foundation in programming and algorithms", delay: 2500 },
        { text: "🎯 Focused on practical application of theoretical knowledge", delay: 3000 }
      ];
    } else if (lowerInput.includes('certificate') || lowerInput.includes('certification')) {
      responses = [
        { text: "I have several professional certifications! 🏆", delay: 500 },
        { text: "🎓 Full Stack Web Development - Udemy (Dec 2024)", delay: 1000 },
        { text: "🎮 Electronic Arts Software Engineering - Forage", delay: 1500 },
        { text: "🛒 Walmart Advanced Software Engineering - Forage", delay: 2000 },
        { text: "These validate my practical development skills!", delay: 2500 }
      ];
    } else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('collaborate')) {
      responses = [
        { text: "I'd love to collaborate on exciting projects! 🤝", delay: 500 },
        { text: "📧 Email: pragadheesharumugam@gmail.com", delay: 1000 },
        { text: "📱 Phone: +91 9360219797", delay: 1500 },
        { text: "💼 LinkedIn: linkedin.com/in/pragadheesh-ra", delay: 2000 },
        { text: "🐙 GitHub: github.com/Pragadheesh-RA", delay: 2500 },
        { text: "🌍 Location: Thanjavur, Tamil Nadu, India", delay: 3000 },
        { text: "Let's build something amazing together! 🚀", delay: 3500 }
      ];
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      responses = [
        { text: "Hello! Great to meet you! 😊", delay: 500 },
        { text: "I'm here to tell you about Pragadheesh's work and skills.", delay: 1000 },
        { text: "Feel free to ask about projects, skills, education, or anything else!", delay: 1500 }
      ];
    } else if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      responses = [
        { text: "Here's my background and experience! 📋", delay: 500 },
        { text: "🎓 CS Engineering student with strong programming foundation", delay: 1000 },
        { text: "💻 Hands-on experience in Java, Python, and web development", delay: 1500 },
        { text: "🤖 Specialized in AI/ML with practical project experience", delay: 2000 },
        { text: "🏆 Multiple professional certifications completed", delay: 2500 },
        { text: "🎯 Passionate about building scalable, user-friendly applications", delay: 3000 }
      ];
    } else {
      responses = [
        { text: "I'd be happy to help! You can ask me about:", delay: 500 },
        { text: "• My projects (Mal-Sim, Movie Vault, Knotify)", delay: 1000 },
        { text: "• Programming skills (Java, Python, React)", delay: 1500 },
        { text: "• AI/ML expertise and certifications", delay: 2000 },
        { text: "• Education and background", delay: 2500 },
        { text: "• Contact information for collaboration", delay: 3000 },
        { text: "What would you like to know more about?", delay: 3500 }
      ];
    }

    setIsTyping(true);
    for (const response of responses) {
      await new Promise(resolve => setTimeout(resolve, response.delay));
      setMessages(prev => [...prev, {
        text: response.text,
        isBot: true,
        timestamp: new Date()
      }]);
    }
    setIsTyping(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, {
      text: userMessage,
      isBot: false,
      timestamp: new Date()
    }]);
    setInput('');
    await generateResponse(userMessage);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 sm:p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-600 transition-all z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed bottom-16 sm:bottom-20 right-2 sm:right-4 w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] md:w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-800 z-50 max-h-[80vh] flex flex-col"
          >
            <div className="p-3 sm:p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-t-lg">
              <h3 className="text-base sm:text-lg font-semibold text-white">Chat with Pragadheesh's AI</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0" style={{ maxHeight: 'calc(80vh - 120px)' }}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                      message.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                    }`}
                  >
                    {message.text}
                    <div className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <LoadingSpinner size="sm" color="text-gray-400" />
                  <span className="text-sm">Typing...</span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 sm:p-4 border-t border-gray-800 rounded-b-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills, or anything..."
                  className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-500 text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all"
                  type="submit"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}