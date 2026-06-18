import { Services } from '../components/sections/Services';
import { Cta } from '../components/sections/Cta';
import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';

export function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-24 flex flex-col flex-1 bg-[#050816]">
      <div className="py-20 bg-[#0B1120] text-center border-b border-slate-800/50">
        <h1 className="serif-title text-5xl md:text-6xl text-white mb-6 text-glow">Our Services</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Comprehensive technology solutions to help MSPs scale.</p>
      </div>
      <Services />
      <Cta />
      <Contact />
    </div>
  );
}
