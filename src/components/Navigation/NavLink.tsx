import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  href: string;
  children: React.ReactNode;
}

export function NavLink({ icon: Icon, href, children }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-colors"
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </motion.a>
  );
}