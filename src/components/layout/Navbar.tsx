import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Why Necteq', href: '/why-necteq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-glass border-b border-slate-800/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#0D6EFD] via-[#00E5FF] to-[#FF2D55] p-[2px]">
            <div className="w-full h-full bg-[#050816] rounded flex items-center justify-center font-bold text-xl text-white">N</div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">NECTEQ</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium tracking-wide text-slate-400 uppercase">
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="flex items-center gap-1 cursor-pointer hover:text-[#00E5FF] transition-colors py-2">
                <span>Services</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-[320px] bg-[#0B1120] border border-slate-700/50 rounded-xl shadow-xl shadow-black/50 overflow-hidden flex flex-col p-2">
                  {Object.values(servicesData).map(service => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.id}`} 
                      className="px-4 py-3 hover:bg-[#050816] rounded-lg text-sm text-slate-300 hover:text-[#00E5FF] transition-colors text-left normal-case tracking-normal border border-transparent hover:border-slate-800/50"
                    >
                      <div className="font-bold mb-1 text-white">{service.title}</div>
                      <div className="text-[11px] text-slate-500 leading-tight">{service.shortDescription}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-[#00E5FF] transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full border border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-all text-xs font-bold"
          >
            BOOK A CONSULTATION
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-[#00E5FF] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-glass border-b border-slate-800/50"
      >
        <div className="p-6 flex flex-col gap-4">
          <div className="border-b border-slate-800/50 pb-2">
            <Link 
              to="/services"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between text-lg font-medium text-slate-300 hover:text-[#00E5FF] transition-colors py-2"
            >
              Services
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
                className="p-1"
              >
                <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-[#050816] rounded-xl mt-2 border border-slate-800/50"
                >
                  {Object.values(servicesData).map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-[#0B1120] border-b border-slate-800/50 last:border-0"
                    >
                      <div className="text-sm font-bold text-white mb-0.5">{service.title}</div>
                      <div className="text-xs text-slate-500">{service.shortDescription}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-[#00E5FF] transition-colors py-2 border-b border-slate-800/50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full border border-[#0D6EFD] text-[#0D6EFD] text-center font-bold transition-all hover:bg-[#0D6EFD] hover:text-white"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
