import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, TrendingUp, Handshake, DollarSign, Clock } from 'lucide-react';

const reasons = [
  { icon: <TrendingUp size={24} className="text-primary" />, title: 'Proven Expertise', desc: 'Industry-certified engineers.' },
  { icon: <Clock size={24} className="text-cyan-400" />, title: '24/7 Global Coverage', desc: 'Always-on enterprise operations.' },
  { icon: <DollarSign size={24} className="text-primary" />, title: 'Cost-Effective Scaling', desc: 'Grow without proportional overhead.' },
  { icon: <Handshake size={24} className="text-accent" />, title: 'Flexible Engagement Models', desc: 'Tailored to your business needs.' },
  { icon: <ShieldCheck size={24} className="text-cyan-400" />, title: 'Security & Compliance', desc: 'SOC2, ISO aligned practices.' },
  { icon: <CheckCircle2 size={24} className="text-primary" />, title: 'Client-Centric Approach', desc: 'Your success is our single KPI.' },
];

export function WhyNecteq() {
  return (
    <section id="why-necteq" className="py-24 border-y border-slate-800/50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#0D6EFD]/5 blur-[150px] pointer-events-none rounded-full transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-glass border-glass relative">
              {/* Abstract Visual replacing an image */}
              <div className="absolute inset-0 bg-[#0B1120] flex items-center justify-center overflow-hidden">
                <div className="absolute w-[200%] h-[200%] border-[2px] border-[#0D6EFD]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[150%] h-[150%] border-[1px] border-[#00E5FF]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Node Grid */}
                <div className="grid grid-cols-5 gap-8 opacity-40">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
                
                {/* Central Focus Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-[#0D6EFD]/50 flex items-center justify-center shadow-[0_0_50px_rgba(13,110,253,0.3)] backdrop-blur-md">
                     <ShieldCheck size={48} className="text-[#00E5FF] pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="absolute -bottom-8 -right-8 bg-glass p-6 rounded-xl hidden md:block border-glass neon-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0D6EFD]/20 flex items-center justify-center border border-[#0D6EFD]/50">
                  <CheckCircle2 className="text-[#0D6EFD]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold font-sans text-white text-glow-blue">99.998%</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#00E5FF]">Uptime Guarantee</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Text & Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-title text-5xl font-bold mb-6 text-white text-glow">
              Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">NECTEQ</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Partnering with Necteq means gaining access to a global team of experts dedicated to helping your business scale efficiently and profitably. We do not just provide staff; we provide integrated solutions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-glass p-5 rounded-xl border border-slate-700/50 hover:neon-border transition-all duration-300">
                  <div className="mb-3">{reason.icon}</div>
                  <h4 className="font-semibold text-white mb-1 tracking-wide">{reason.title}</h4>
                  <p className="text-sm text-slate-400">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
