import { motion } from 'motion/react';

const milestones = [
  { year: '2015', title: 'NECTEQ Founded', desc: 'Started with a vision to redefine IT outsourcing for small MSPs.' },
  { year: '2018', title: 'Global NOC Launch', desc: 'Opened our 24/7 dedicated Network Operations Center.' },
  { year: '2021', title: '100+ MSP Partners', desc: 'Reached a milestone of 100+ global partners trusting our services.' },
  { year: '2026', title: 'Enterprise Expansion', desc: 'Expanding cybersecurity and advanced infrastructure divisions.' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="serif-title text-5xl font-bold mb-6 text-white text-glow">
              Empowering MSP Growth Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">Smart Sourcing</span>
            </h2>
            <p className="text-lg text-slate-400">
              Necteq is a global IT services partner helping MSPs scale through dedicated resources, NOC services, service desk support, software development, and project delivery. Supporting over 100 MSPs worldwide with 500+ professionals across 12+ countries, we provide secure, reliable, and cost-effective solutions that drive business growth.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-[11px] md:left-1/2 w-[9px] h-[9px] bg-cyan-400 rounded-full md:-translate-x-1/2 shadow-[0_0_10px_rgba(0,229,255,0.8)] z-10" />
                
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-glass p-6 rounded-2xl border border-slate-700/50 group hover:neon-border transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <span className="text-6xl font-sans font-bold text-slate-500">{milestone.year}</span>
                    </div>
                    <div className="text-xl font-bold font-sans text-[#0D6EFD] mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{milestone.title}</h4>
                    <p className="text-slate-400">{milestone.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-5/12" /> {/* Empty space for alternating layout */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
