import { About } from '../components/sections/About';
import { Philosophy } from '../components/sections/Philosophy';
import { Process } from '../components/sections/Process';
import { Cta } from '../components/sections/Cta';
import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';

export function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-24 flex flex-col flex-1 bg-[#050816]">
      <div className="py-20 bg-[#0B1120] text-center border-b border-slate-800/50">
        <h1 className="serif-title text-5xl md:text-6xl text-white mb-6 text-glow">About Necteq</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Your trusted global IT operations partner.</p>
      </div>
      <About />
      <Philosophy />
      <Process />
      <Cta />
      <Contact />
    </div>
  );
}
