import { motion } from 'motion/react';
import { Users, Building2, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: <Users className="text-primary" size={24} />, value: '500+', label: 'Professionals' },
  { icon: <Building2 className="text-cyan-400" size={24} />, value: '100+', label: 'Global Clients' },
  { icon: <Clock className="text-primary" size={24} />, value: '24/7', label: 'Coverage' },
  { icon: <MapPin className="text-accent" size={24} />, value: '12+', label: 'Countries Served' },
];

export function Trust() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-medium text-white">
            Trusted by MSPs Around the Globe
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-700/50 hover:neon-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex w-12 h-12 rounded-full bg-[#050816] items-center justify-center mb-4 relative z-10 border border-slate-800/50 group-hover:border-[#0D6EFD]/50 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold font-sans text-white mb-2 relative z-10">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 relative z-10 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
