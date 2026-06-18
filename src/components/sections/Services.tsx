import { motion } from 'motion/react';
import { Network, Server, Code2, HeadphonesIcon, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'dedicated-engineers',
    title: 'Dedicated Engineers',
    description: 'Highly skilled L1, L2, and L3 engineers integrated directly into your existing MSP team.',
    icon: <Users size={32} className="text-primary" />,
    features: ['Seamless team integration', 'Vetted technical talent', 'Scalable resourcing']
  },
  {
    id: 'noc',
    title: '24/7 NOC Services',
    description: 'Proactive network monitoring and remediation to ensure zero downtime for your clients.',
    icon: <Network size={32} className="text-cyan-400" />,
    features: ['Proactive monitoring', 'Incident management', 'Performance optimization']
  },
  {
    id: 'service-desk',
    title: '24/7 Service Desk',
    description: 'White-labeled end-user support resolving tickets efficiently around the clock.',
    icon: <HeadphonesIcon size={32} className="text-primary" />,
    features: ['White-labeled support', 'Omnichannel operations', 'First-call resolution focus']
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom applications, API integrations, and automation scripts to optimize your operations.',
    icon: <Code2 size={32} className="text-accent" />,
    features: ['Custom integrations', 'Workflow automation', 'Modern architectures']
  },
  {
    id: 'projects',
    title: 'Projects & Infrastructure',
    description: 'Specialized project engineers for cloud migrations, deployments, and infrastructure upgrades.',
    icon: <Server size={32} className="text-cyan-400" />,
    features: ['Cloud migrations (AWS/Azure)', 'Infrastructure design', 'Security implementations']
  },
  {
    id: 'administrative',
    title: 'Administrative Services',
    description: 'Back-office support for dispatching, billing, and general MSP administrative tasks.',
    icon: <Briefcase size={32} className="text-primary" />,
    features: ['Ticket dispatching', 'Billing & invoicing', 'Operations support']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="serif-title text-5xl font-bold mb-6 text-white text-glow">
              Comprehensive Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] via-[#00E5FF] to-[#2EA8FF]">Services</span>
            </h2>
            <p className="text-lg text-slate-400">
              End-to-end solutions that help MSPs scale, optimize operations, and deliver exceptional client experiences without the overhead.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass border border-slate-700/50 rounded-2xl p-8 group relative overflow-hidden flex flex-col h-full hover:neon-border transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-xl bg-[#050816] border border-slate-800 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(13,110,253,0.3)]">
                {service.icon}
              </div>
              
              <h3 className="text-2xl serif-title text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-400 mb-8 relative z-10 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 shrink-0 pulse" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={`/services/${service.id}`} className="text-[#0D6EFD] font-bold flex items-center gap-2 group/btn mt-auto relative z-10 text-glow-blue uppercase tracking-wider text-sm transition-all hover:text-[#00E5FF]">
                Learn More 
                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
