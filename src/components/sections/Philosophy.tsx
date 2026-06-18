import { motion } from 'motion/react';
import { Target, Award, Zap, HeartHandshake } from 'lucide-react';

const philosophies = [
  { icon: <Target />, title: 'ROI Focused', desc: 'Every engagement is designed to increase your margins and operational efficiency.' },
  { icon: <Award />, title: 'Best Practices Driven', desc: 'Operating strictly on ITIL standards and industry best practices.' },
  { icon: <Zap />, title: 'Operational Efficiency', desc: 'Streamlining your processes through automation and integrated teams.' },
  { icon: <HeartHandshake />, title: 'Long-Term Partnership', desc: 'We invest in your success. We scale when you scale.' },
];

export function Philosophy() {
  return (
    <section className="py-24 relative border-y border-slate-800/50 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="serif-title text-5xl font-bold text-white text-glow">
            Built Around Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">Success</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass p-8 rounded-2xl text-center group border border-slate-700/50 hover:neon-border transition-all duration-300 relative overflow-hidden"
            >
               {/* Neon Glow Hover Effect */}
               <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 bg-[#0D6EFD]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               
               <div className="inline-flex w-16 h-16 rounded-full bg-[#050816] border border-slate-800 items-center justify-center text-[#0D6EFD] mb-6 group-hover:text-[#00E5FF] group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] relative z-10">
                 {item.icon}
               </div>
               <h3 className="text-xl font-bold font-sans text-white mb-3 relative z-10">{item.title}</h3>
               <p className="text-sm text-slate-400 leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
