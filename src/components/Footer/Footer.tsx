import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { platform: 'github', url: 'https://github.com/Pragadheesh-RA' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/pragadheesh-r-a' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'pragadheesharumugam@gmail.com', href: 'mailto:pragadheesharumugam@gmail.com' },
    { icon: Phone, text: '+91 9360219797', href: 'tel:+919360219797' },
    { icon: MapPin, text: 'Thanjavur, Tamil Nadu, India', href: null }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Certifications', 'Projects', 'Contact'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-teal-400 cursor-pointer text-sm sm:text-base"
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-teal-400 transition-colors break-all">
                      {text}
                    </a>
                  ) : (
                    <span className="break-words">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.platform}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={social.url}
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 40, width: 40 }}
                />
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © {currentYear} Pragadheesh RA - Certified Full Stack Developer . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
