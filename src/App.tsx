import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Flavors } from './pages/Flavors';
import { Perks } from './pages/Perks';
import { Locator } from './pages/Locator';
import { Shop } from './pages/Shop';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flavors" element={<Flavors />} />
              <Route path="/perks" element={<Perks />} />
              <Route path="/locator" element={<Locator />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
