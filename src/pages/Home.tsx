import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FLAVORS, MERCH } from '@/src/constants';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-drpepper-maroon">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C8102E_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 italic transform -skew-x-12">
              23 FLAVORS.<br />
              <span className="text-drpepper-red">ONE UNIQUE</span><br />
              TASTE.
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-lg">
              There's nothing like a Dr Pepper. Bold, mysterious, and perfectly balanced. Join Pepper Perks today for exclusive rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/perks" className="btn-primary flex items-center justify-center">
                Join Pepper Perks <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/flavors" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-drpepper-maroon flex items-center justify-center">
                Explore Flavors
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000" 
              alt="Classic Dr Pepper aluminum can with condensation"
              className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-drpepper-red text-white p-8 rounded-full font-black italic transform -skew-x-12 shadow-2xl"
              aria-label="Established in 1885"
            >
              EST. 1885
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section className="py-24 bg-drpepper-cream" aria-labelledby="flavors-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 id="flavors-heading" className="text-4xl md:text-5xl font-black text-drpepper-maroon italic transform -skew-x-12 mb-4">
                THE LINEUP
              </h2>
              <p className="text-drpepper-maroon/60 font-bold uppercase tracking-widest">Find your perfect match</p>
            </div>
            <Link to="/flavors" className="text-drpepper-maroon font-bold uppercase tracking-widest hover:text-drpepper-red transition-colors flex items-center focus-visible:outline-drpepper-maroon">
              View All <ArrowRight className="ml-2" size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FLAVORS.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={flavor.image} 
                    alt={`${flavor.name} - ${flavor.tagline}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-white font-bold italic mb-2" aria-hidden="true">{flavor.tagline}</p>
                    <button className="text-white text-sm font-bold uppercase tracking-widest flex items-center focus-visible:outline-white" aria-label={`Learn more about ${flavor.name}`}>
                      Learn More <ArrowRight className="ml-2" size={14} aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-black text-drpepper-maroon uppercase italic transform -skew-x-6">{flavor.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pepper Perks CTA */}
      <section className="py-24 bg-white overflow-hidden relative" aria-labelledby="perks-heading">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-drpepper-maroon transform skew-x-12 translate-x-20 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-drpepper-red/10 text-drpepper-red px-4 py-2 rounded-full mb-6">
                <Star size={16} fill="currentColor" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest">Loyalty Program</span>
              </div>
              <h2 id="perks-heading" className="text-5xl md:text-6xl font-black text-drpepper-maroon italic transform -skew-x-12 mb-8 leading-tight">
                GET REWARDED FOR<br />
                <span className="text-drpepper-red">BEING UNIQUE.</span>
              </h2>
              <p className="text-lg text-drpepper-maroon/70 mb-10 max-w-md">
                Earn points on every purchase, unlock exclusive merch, and get early access to new flavors. It's the club for Dr Pepper fanatics.
              </p>
              <Link to="/perks" className="btn-primary inline-block focus-visible:outline-drpepper-maroon">
                Start Earning Now
              </Link>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-drpepper-cream p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                    <ShoppingBag size={40} className="text-drpepper-red mb-4" />
                    <h4 className="font-black text-drpepper-maroon uppercase">Exclusive Merch</h4>
                  </div>
                  <div className="bg-drpepper-maroon p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center text-white">
                    <Star size={40} className="text-drpepper-red mb-4" />
                    <h4 className="font-black uppercase">Points on Sips</h4>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-drpepper-red p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center text-white">
                    <MapPin size={40} className="text-white mb-4" />
                    <h4 className="font-black uppercase">Local Events</h4>
                  </div>
                  <div className="bg-drpepper-cream p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-black text-drpepper-maroon mb-2">23</div>
                    <h4 className="font-black text-drpepper-maroon uppercase">Secret Perks</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Preview */}
      <section className="py-24 bg-drpepper-cream" aria-labelledby="merch-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="merch-heading" className="text-4xl md:text-5xl font-black text-drpepper-maroon italic transform -skew-x-12 mb-4">
              WEAR THE FLAVOR
            </h2>
            <p className="text-drpepper-maroon/60 font-bold uppercase tracking-widest">Limited edition Dr Pepper gear</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {MERCH.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold text-drpepper-red uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-xl font-black text-drpepper-maroon mb-4">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-drpepper-maroon">${item.price.toFixed(2)}</span>
                    <button className="w-12 h-12 rounded-full bg-drpepper-maroon text-white flex items-center justify-center hover:bg-drpepper-red transition-colors focus-visible:outline-drpepper-maroon" aria-label={`Add ${item.name} to bag`}>
                      <ShoppingBag size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop" className="btn-secondary inline-block focus-visible:outline-drpepper-maroon">
              Shop All Merch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
