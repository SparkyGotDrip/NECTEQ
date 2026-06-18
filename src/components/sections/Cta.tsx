import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cta() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">
      {/* Decorative Network Grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="serif-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Scale Your MSP Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Gain access to world-class IT talent, 24/7 support, and scalable solutions that help your MSP grow faster.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#050816] text-white px-10 py-5 rounded-lg font-bold text-lg border border-slate-700/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:scale-105 group">
            Schedule a Consultation
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
