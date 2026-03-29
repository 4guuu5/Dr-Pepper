import React from 'react';
import { motion } from 'motion/react';
import { Star, Gift, Zap, Trophy, ArrowRight } from 'lucide-react';

export const Perks = () => {
  const benefits = [
    {
      icon: <Star className="text-drpepper-red" size={32} />,
      title: "Earn Points",
      description: "Get points for every Dr Pepper purchase. Scan receipts or buy online."
    },
    {
      icon: <Gift className="text-drpepper-red" size={32} />,
      title: "Exclusive Merch",
      description: "Redeem points for limited edition gear you can't get anywhere else."
    },
    {
      icon: <Zap className="text-drpepper-red" size={32} />,
      title: "Early Access",
      description: "Be the first to try new flavors and seasonal releases."
    },
    {
      icon: <Trophy className="text-drpepper-red" size={32} />,
      title: "Fansville Perks",
      description: "Special rewards for college football season and major events."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-drpepper-maroon text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-4 rotate-12 scale-150">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="text-4xl font-black italic">23</div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black italic transform -skew-x-12 mb-8 leading-none">
                PEPPER<br />
                <span className="text-drpepper-red">PERKS</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-md">
                The ultimate loyalty program for Dr Pepper fans. Join now and start earning rewards for every sip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary !bg-drpepper-red">Sign Up Free</button>
                <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-drpepper-maroon">Log In</button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 rounded-[40px] text-drpepper-maroon"
            >
              <h3 className="text-2xl font-black italic transform -skew-x-6 mb-6">CREATE ACCOUNT</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full bg-drpepper-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-drpepper-red outline-none" placeholder="John Pepper" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full bg-drpepper-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-drpepper-red outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Password</label>
                  <input type="password" className="w-full bg-drpepper-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-drpepper-red outline-none" placeholder="••••••••" />
                </div>
                <button className="w-full btn-primary mt-4">Join Now</button>
              </form>
              <p className="text-center text-xs text-drpepper-maroon/50 mt-6">
                By joining, you agree to our Terms and Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-drpepper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-drpepper-maroon italic transform -skew-x-12 mb-4 uppercase">Why Join?</h2>
            <p className="text-drpepper-maroon/60 font-bold uppercase tracking-widest">More than just a loyalty program</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-black text-drpepper-maroon mb-4 uppercase">{benefit.title}</h3>
                <p className="text-drpepper-maroon/70 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-drpepper-maroon rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-drpepper-red blur-[120px] opacity-30" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black italic transform -skew-x-12 mb-8 uppercase">
                  LEVEL UP YOUR<br />
                  <span className="text-drpepper-red">FAN STATUS</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl italic">01</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest mb-2">Rookie</h4>
                      <p className="text-white/60 text-sm">Start your journey. Earn 10 points per $1 spent.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-drpepper-red flex items-center justify-center font-black text-xl italic">02</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest mb-2 text-drpepper-red">All-Star</h4>
                      <p className="text-white/60 text-sm">Unlock after 500 points. Earn 15 points per $1 spent + free shipping.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl italic">03</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest mb-2">Legend</h4>
                      <p className="text-white/60 text-sm">Unlock after 2000 points. VIP events, custom merch, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-10 border-2 border-dashed border-drpepper-red/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-black italic transform -skew-x-12 text-drpepper-red drop-shadow-2xl">23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
