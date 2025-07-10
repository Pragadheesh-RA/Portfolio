import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden dark:bg-gray-900">
      <HeroBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}