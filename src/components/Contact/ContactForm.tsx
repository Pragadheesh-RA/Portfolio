import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContactForm, type ContactFormData } from '../../services/contact';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormStatus } from './FormStatus';
import { LoadingSpinner } from '../common/LoadingSpinner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      await submitContactForm(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 sm:space-y-6"
    >
      <FormInput
        {...register('name')}
        type="text"
        placeholder="Your Name"
        error={errors.name?.message}
        disabled={isSubmitting}
      />
      
      <FormInput
        {...register('email')}
        type="email"
        placeholder="Your Email"
        error={errors.email?.message}
        disabled={isSubmitting}
      />

      <FormTextarea
        {...register('message')}
        placeholder="Your Message"
        error={errors.message?.message}
        disabled={isSubmitting}
      />

      <AnimatePresence>
        {submitStatus !== 'idle' && <FormStatus status={submitStatus} />}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" color="text-white" />
            <span>Sending...</span>
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  );
}