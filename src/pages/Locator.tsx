import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, Phone, Clock } from 'lucide-react';

export const Locator = () => {
  const [search, setSearch] = React.useState('');
  
  const mockStores = [
    { name: "Target Supercenter", address: "123 Retail Way, Austin, TX", distance: "0.8 miles", status: "In Stock" },
    { name: "Walmart Neighborhood Market", address: "456 Commerce St, Austin, TX", distance: "1.2 miles", status: "In Stock" },
    { name: "H-E-B Grocery", address: "789 Local Blvd, Austin, TX", distance: "2.5 miles", status: "Limited Stock" },
    { name: "7-Eleven", address: "101 Corner Ave, Austin, TX", distance: "3.1 miles", status: "In Stock" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-drpepper-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="p-8 bg-drpepper-maroon text-white">
              <h1 id="locator-title" className="text-3xl font-black italic transform -skew-x-12 mb-6 uppercase">Find Dr Pepper</h1>
              <div className="relative">
                <label htmlFor="store-search" className="sr-only">Search by Zip Code or City</label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} aria-hidden="true" />
                <input 
                  id="store-search"
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter Zip Code or City"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4" role="list" aria-labelledby="locator-title">
              {mockStores.map((store, i) => (
                <motion.div 
                  key={i}
                  role="listitem"
                  tabIndex={0}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-drpepper-cream hover:border-drpepper-red hover:shadow-md transition-all cursor-pointer group focus-visible:border-drpepper-red"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-drpepper-maroon uppercase">{store.name}</h3>
                    <span className="text-xs font-bold text-drpepper-maroon/40">{store.distance}</span>
                  </div>
                  <p className="text-sm text-drpepper-maroon/60 mb-4">{store.address}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${store.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {store.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-drpepper-cream text-drpepper-maroon hover:bg-drpepper-maroon hover:text-white transition-colors focus-visible:outline-drpepper-maroon" aria-label={`Call ${store.name}`}>
                        <Phone size={16} aria-hidden="true" />
                      </button>
                      <button className="p-2 rounded-full bg-drpepper-cream text-drpepper-maroon hover:bg-drpepper-maroon hover:text-white transition-colors focus-visible:outline-drpepper-maroon" aria-label={`Get directions to ${store.name}`}>
                        <Navigation size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden relative" role="application" aria-label="Store Location Map">
            <div className="absolute inset-0 bg-[#e5e3df]">
              {/* Mock Map UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-drpepper-maroon/20 font-black text-8xl italic transform -skew-x-12 select-none" aria-hidden="true">MAP VIEW</div>
              </div>
              
              {/* Mock Pins */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/3 left-1/4"
                aria-label="Store location pin"
              >
                <div className="w-8 h-8 bg-drpepper-red rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white">
                  <MapPin size={14} fill="currentColor" aria-hidden="true" />
                </div>
              </motion.div>
              <div className="absolute top-1/2 left-1/2" aria-label="Store location pin">
                <div className="w-8 h-8 bg-drpepper-maroon rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white">
                  <MapPin size={14} fill="currentColor" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/3" aria-label="Store location pin">
                <div className="w-8 h-8 bg-drpepper-red rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white">
                  <MapPin size={14} fill="currentColor" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
              <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-drpepper-maroon hover:bg-drpepper-cream transition-colors font-bold text-xl focus-visible:outline-drpepper-maroon" aria-label="Zoom in">+</button>
              <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-drpepper-maroon hover:bg-drpepper-cream transition-colors font-bold text-xl focus-visible:outline-drpepper-maroon" aria-label="Zoom out">-</button>
            </div>
            
            <div className="absolute top-8 right-8">
              <button className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 text-drpepper-maroon font-bold uppercase tracking-widest text-xs hover:bg-drpepper-cream transition-colors focus-visible:outline-drpepper-maroon">
                <Navigation size={16} aria-hidden="true" />
                <span>Use My Location</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
