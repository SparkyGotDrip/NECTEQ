import { motion } from 'motion/react';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#0D6EFD]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-0 overflow-hidden bg-[#050816]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0D6EFD]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[100px] rounded-full pointer-events-none" />
      
      {mounted && <Particles />}
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-md mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-[#00E5FF] pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">Enterprise NOC Active</span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="serif-title text-5xl sm:text-7xl md:text-[84px] leading-[1.05] tracking-tight mb-8 text-white"
        >
          Global IT Operations.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">Delivered 24/7.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Scale your MSP with dedicated engineers, NOC services, service desk support, software development, and project specialists trusted by businesses worldwide.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a href="/contact" className="px-8 py-4 rounded-full bg-white text-[#050816] font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Book a Consultation
            <ArrowRight size={20} />
          </a>
          <a href="/services" className="px-8 py-4 rounded-full border border-slate-700 bg-slate-800/50 text-white font-bold hover:bg-slate-800 transition-colors">
            Explore Services
          </a>
        </motion.div>

        {/* Abstract Visual / Stats Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full relative max-w-4xl mx-auto"
        >
          {/* Top glow line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0D6EFD] to-transparent opacity-50"></div>
          
          <div className="h-[250px] border-t border-l border-r border-slate-800/50 bg-gradient-to-b from-[#0B1120]/80 to-transparent rounded-t-3xl overflow-hidden relative p-8">
            <div className="absolute inset-0 grid-bg opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            
            {/* Minimalist Data Highlights inside the frame */}
            <div className="relative z-10 flex flex-wrap justify-between items-start pt-4 px-4 sm:px-12">
               
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] flex items-center justify-center mb-4 border border-[#0D6EFD]/20">
                     <Activity size={18} />
                  </div>
                  <div className="text-3xl font-sans font-bold text-white mb-1 text-glow-blue">500+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#00E5FF]">Professionals</div>
               </div>
               
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] flex items-center justify-center mb-4 border border-[#0D6EFD]/20">
                     <ShieldCheck size={18} />
                  </div>
                  <div className="text-3xl font-sans font-bold text-white mb-1">100+</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">MSP Partners</div>
               </div>
               
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] flex items-center justify-center mb-4 border border-[#0D6EFD]/20">
                     <Zap size={18} />
                  </div>
                  <div className="text-3xl font-sans font-bold text-white mb-1">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Operations</div>
               </div>

            </div>

             {/* Faint UI line details */}
            <div className="absolute bottom-10 left-12 right-12 h-[1px] bg-slate-800/60 hidden sm:block">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-[#00E5FF]/40 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
