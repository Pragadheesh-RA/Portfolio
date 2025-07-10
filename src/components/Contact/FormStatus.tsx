import React from 'react';
import { motion } from 'framer-motion';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
}

export function FormStatus({ status }: FormStatusProps) {
  if (status === 'idle') return null;

  const config = {
    success: {
      className: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      message: 'Message sent successfully! I\'ll get back to you soon.'
    },
    error: {
      className: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      message: 'Failed to send message. Please try again.'
    }
  };

  const { className, message } = config[status as keyof typeof config];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`p-4 rounded-lg border ${className}`}
    >
      {message}
    </motion.div>
  );
}