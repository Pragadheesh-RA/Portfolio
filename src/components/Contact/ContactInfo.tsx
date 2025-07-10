import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    { Icon: Mail, title: 'Email', value: 'pragadheesharumugam@gmail.com' },
    { Icon: Phone, title: 'Phone', value: '+91 9360219797' },
    { Icon: MapPin, title: 'Location', value: 'Thanjavur, Tamilnadu, India' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8 p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700"
    >
      {contactDetails.map(({ Icon, title, value }) => (
        <div key={title} className="flex items-start gap-4 group">
          <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br from-rose-500/20 to-indigo-500/20 transition-colors">
            <Icon className="w-6 h-6 text-rose-400 group-hover:text-rose-300 transition-colors" />
          </div>
          <div>
            <h3 className="font-medium text-gray-100 mb-1">{title}</h3>
            <p className="text-gray-400">{value}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}