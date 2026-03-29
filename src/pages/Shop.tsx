import React from 'react';
import { motion } from 'motion/react';
import { MERCH } from '@/src/constants';
import { ShoppingBag, Filter, ChevronDown, Star } from 'lucide-react';

export const Shop = () => {
  const categories = ["All", "Apparel", "Accessories", "Lifestyle", "Collectibles"];

  return (
    <div className="pt-20 min-h-screen bg-drpepper-cream">
      {/* Header */}
      <section className="py-16 bg-drpepper-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black italic transform -skew-x-12 mb-4 uppercase">
            THE <span className="text-drpepper-red">MERCH</span> SHOP
          </h1>
          <p className="text-white/60 font-bold uppercase tracking-[0.3em]">Exclusive Dr Pepper Gear</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${cat === 'All' ? 'bg-drpepper-maroon text-white' : 'bg-white text-drpepper-maroon hover:bg-drpepper-cream'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-drpepper-maroon font-bold uppercase tracking-widest text-xs">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-drpepper-maroon font-bold uppercase tracking-widest text-xs">
              <span>Sort By</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="list" aria-label="Products">
          {[...MERCH, ...MERCH].map((item, i) => (
            <motion.article 
              key={`${item.id}-${i}`}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 4) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-drpepper-maroon flex items-center justify-center hover:bg-drpepper-red hover:text-white transition-colors shadow-lg focus-visible:outline-drpepper-maroon" aria-label={`Add ${item.name} to favorites`}>
                    <Star size={18} aria-hidden="true" />
                  </button>
                </div>
                {i === 0 && (
                  <div className="absolute top-4 left-4 bg-drpepper-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full italic transform -skew-x-12">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-drpepper-red uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="text-lg font-black text-drpepper-maroon mb-4 group-hover:text-drpepper-red transition-colors">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-drpepper-maroon">${item.price.toFixed(2)}</span>
                  <button className="btn-primary !px-4 !py-3 !text-[10px] flex items-center space-x-2 focus-visible:outline-drpepper-maroon">
                    <ShoppingBag size={14} aria-hidden="true" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="btn-secondary">Load More Items</button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-24 bg-drpepper-maroon text-white mt-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black italic transform -skew-x-12 mb-6 uppercase">Don't Miss a Drop</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Get notified about limited edition merch drops and exclusive collaborations before they sell out.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 outline-none focus:bg-white/20 transition-all"
            />
            <button className="btn-primary !bg-drpepper-red">Subscribe</button>
          </form>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-drpepper-red blur-[100px] opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-drpepper-red blur-[100px] opacity-20" />
      </section>
    </div>
  );
};
