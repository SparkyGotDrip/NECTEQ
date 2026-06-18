import { motion } from 'motion/react';
import { Search, Users, Rocket, Headset } from 'lucide-react';

const steps = [
  { icon: <Search />, title: 'Consultation & Discovery', desc: 'Analyzing your current capabilities, gaps, and growth objectives.' },
  { icon: <Users />, title: 'Resource Alignment', desc: 'Selecting and onboarding the perfect engineering talent for your stack.' },
  { icon: <Rocket />, title: 'Deployment & Integration', desc: 'Seamlessly integrating our team into your PSAs, RMMs, and workflows.' },
  { icon: <Headset />, title: '24/7 Operational Support', desc: 'Continuous service delivery, monitoring, and regular QBRs.' },
];

export function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="serif-title text-4xl md:text-5xl font-bold mb-4 text-white text-glow">How We Work</h2>
          <p className="text-lg text-slate-400">A streamlined onboarding process designed for zero disruption.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-800 z-0">
             <motion.div 
               className="h-full bg-gradient-to-r from-[#0D6EFD] to-[#00E5FF]"
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-[#050816] border border-[#0D6EFD]/50 rounded-full flex items-center justify-center text-[#0D6EFD] mb-6 shadow-[0_0_20px_rgba(13,110,253,0.15)] relative pulse">
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF2D55] text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-3 tracking-wide">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
