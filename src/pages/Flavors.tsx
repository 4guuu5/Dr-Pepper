import React from 'react';
import { motion } from 'motion/react';
import { FLAVORS } from '@/src/constants';
import { ArrowRight } from 'lucide-react';

export const Flavors = () => {
  return (
    <div className="pt-20 min-h-screen bg-drpepper-cream">
      <section className="py-20 bg-drpepper-maroon text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black italic transform -skew-x-12 mb-6">
              THE <span className="text-drpepper-red">COLLECTION</span>
            </h1>
            <p className="text-xl text-white/70">
              From the original 23 flavors to our newest innovations, explore the unique world of Dr Pepper.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -rotate-12" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/10 rotate-6" />
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {FLAVORS.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 relative">
                  <div 
                    className="absolute inset-0 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: flavor.color }}
                  />
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-sm font-bold text-drpepper-red uppercase tracking-[0.3em] mb-4 block">
                    {flavor.tagline}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-drpepper-maroon italic transform -skew-x-12 mb-6 uppercase">
                    {flavor.name}
                  </h2>
                  <p className="text-lg text-drpepper-maroon/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {flavor.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button className="btn-primary">Find Near You</button>
                    <button className="btn-secondary">Nutrition Facts</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-drpepper-maroon text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black italic transform -skew-x-12 mb-8">
            STILL CRAVING MORE?
          </h2>
          <p className="text-white/60 mb-10">
            Check out our limited edition seasonal flavors and international favorites.
          </p>
          <button className="btn-primary !bg-white !text-drpepper-maroon hover:!bg-drpepper-red hover:!text-white">
            Explore Seasonal Flavors
          </button>
        </div>
      </section>
    </div>
  );
};
