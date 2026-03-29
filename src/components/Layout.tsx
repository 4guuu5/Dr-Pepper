import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, MapPin, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Flavors', path: '/flavors' },
    { name: 'Shop', path: '/shop' },
    { name: 'Find Dr Pepper', path: '/locator' },
    { name: 'Pepper Perks', path: '/perks' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-drpepper-maroon text-white shadow-2xl" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2" aria-label="Dr Pepper Home">
                <span className="text-3xl font-black tracking-tighter italic transform -skew-x-12" aria-hidden="true">
                  Dr <span className="text-drpepper-red">Pepper</span>
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest hover:text-drpepper-red transition-colors focus-visible:outline-white",
                    location.pathname === link.path ? "text-drpepper-red" : "text-white"
                  )}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-4">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors focus-visible:outline-white" aria-label="Shopping Bag (0 items)">
                  <ShoppingBag size={20} />
                </button>
                <Link to="/perks" className="bg-drpepper-red px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-drpepper-maroon transition-all focus-visible:outline-white">
                  Join Perks
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-white/10 transition-colors focus-visible:outline-white"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-drpepper-maroon border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-bold uppercase tracking-widest hover:bg-white/10 focus-visible:bg-white/10"
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/perks"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-bold uppercase tracking-widest bg-drpepper-red focus-visible:bg-white focus-visible:text-drpepper-maroon"
                >
                  Join Perks
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-drpepper-maroon text-white pt-20 pb-10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-4xl font-black tracking-tighter italic transform -skew-x-12 mb-6 block" aria-hidden="true">
              Dr <span className="text-drpepper-red">Pepper</span>
            </span>
            <p className="text-white/60 max-w-md mb-8">
              Since 1885, we've been crafting the unique taste of Dr Pepper with 23 signature flavors. Join the legacy.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Twitter', 'Facebook', 'TikTok'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-drpepper-red transition-colors focus-visible:outline-white"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-5 h-5 bg-white/20 rounded-sm" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-widest mb-6 text-sm">Explore</h2>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/flavors" className="hover:text-white transition-colors focus-visible:text-white">All Flavors</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors focus-visible:text-white">Merch Shop</Link></li>
              <li><Link to="/locator" className="hover:text-white transition-colors focus-visible:text-white">Store Locator</Link></li>
              <li><Link to="/perks" className="hover:text-white transition-colors focus-visible:text-white">Pepper Perks</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-widest mb-6 text-sm">Support</h2>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors focus-visible:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus-visible:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus-visible:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus-visible:text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest">
          <p>© 2026 Dr Pepper/Seven Up, Inc. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Part of Keurig Dr Pepper</p>
        </div>
      </div>
    </footer>
  );
};
