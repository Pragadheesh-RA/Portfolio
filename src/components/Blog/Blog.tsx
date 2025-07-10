import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from './BlogPost';
import { BlogCategories } from './BlogCategories';

const posts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with modern tools and techniques.',
    date: '2024-03-15',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: '2024-03-10',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Mastering TypeScript',
    excerpt: 'A comprehensive guide to using TypeScript effectively in your projects.',
    date: '2024-03-05',
    category: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing my thoughts and experiences in web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <BlogCategories />
          </div>
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}