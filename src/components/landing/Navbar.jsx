import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Mission', href: '#mission' },
    { label: 'Collection', href: '#collection' },
    { label: 'Values', href: '#values' },
    { label: 'Stories', href: '#stories' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex flex-1 justify-center">
            <a href="#" className="font-heading text-2xl font-semibold text-foreground">Humbled <span className="italic text-accent">Hearts</span></a>
          </div>

          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center w-10 h-10 border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              {dropdownOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-background border border-border shadow-lg z-50"
                >
                  {links.map(l => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                  <div className="border-t border-border">
                    <a
                      href="#newsletter"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 font-body text-xs tracking-widest uppercase text-accent font-medium hover:bg-secondary transition-colors"
                    >
                      Newsletter
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#newsletter" onClick={() => setMobileOpen(false)} className="block text-center font-body text-sm font-medium tracking-widest uppercase bg-primary text-primary-foreground px-6 py-3 mt-4">
                Join the Movement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}