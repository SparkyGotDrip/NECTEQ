import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';

export function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-24 flex flex-col flex-1 bg-[#050816]">
      <div className="py-20 bg-[#0B1120] text-center border-b border-slate-800/50">
        <h1 className="serif-title text-5xl md:text-6xl text-white mb-6 text-glow">Contact Us</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Get in touch with our global team for custom solutions.</p>
      </div>
      <Contact />
    </div>
  );
}
