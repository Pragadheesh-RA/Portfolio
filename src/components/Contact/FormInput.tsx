import React from 'react';
import { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-gray-100 placeholder-gray-400 transition-colors disabled:opacity-50 ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-rose-400 text-sm">{error}</p>
        )}
      </div>
    );
  }
);