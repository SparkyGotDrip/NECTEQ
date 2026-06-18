import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Cta } from '../components/sections/Cta';
import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col flex-1 pt-24 bg-[#050816]">
      {/* Dynamic Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0D6EFD]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#00E5FF] transition-colors mb-10 text-sm font-medium uppercase tracking-wider">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#050816] border border-slate-700/50 flex items-center justify-center neon-border">
              {service.icon}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="serif-title text-4xl md:text-6xl text-white mb-6 leading-tight"
          >
            {service.heroHeadline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {service.heroSubheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#service-contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0D6EFD] to-[#2EA8FF] text-white font-bold inline-flex items-center gap-2 shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform uppercase text-sm tracking-wider">
              Get Strategic Advice
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="py-24 relative bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="serif-title text-3xl md:text-4xl text-white mb-6">Service Overview</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {service.overview}
              </p>
              
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Key Capabilities</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-glass border border-slate-800/50 p-4 rounded-xl">
                    <CheckCircle2 className="text-[#00E5FF] shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-slate-300 pointer-events-none">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="serif-title text-2xl text-white mb-6">Why It Matters</h3>
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-6 bg-glass border border-slate-700/50 rounded-2xl hover:neon-border transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#050816] border border-slate-800 flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-slate-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-y border-slate-800/50 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="serif-title text-4xl text-white mb-4">Our Streamlined Process</h2>
            <p className="text-slate-400 text-lg">How we implement {service.title.toLowerCase()} for your MSP.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-[40px] left-[60%] w-full h-[1px] bg-slate-800 z-0">
                     <div className="h-full bg-gradient-to-r from-[#0D6EFD] to-transparent w-1/2"></div>
                  </div>
                )}
                <div className="relative z-10 text-center">
                   <div className="w-20 h-20 mx-auto bg-[#0B1120] border border-slate-700 rounded-full flex flex-col items-center justify-center text-[#0D6EFD] mb-6 neon-border">
                     <span className="text-[10px] uppercase font-bold text-slate-500">Step</span>
                     <span className="text-xl font-mono text-white leading-none mt-1">{step.step}</span>
                   </div>
                   <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                   <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Details (Use Cases & Why Us) */}
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-glass border border-slate-700/50 p-8 rounded-2xl">
               <h3 className="serif-title text-3xl text-white mb-6">Ideal Use Cases</h3>
               <ul className="space-y-4">
                 {service.useCases.map((useCase, i) => (
                   <li key={i} className="flex gap-3 text-slate-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD] mt-2 shrink-0 p"></div>
                     <span className="leading-relaxed">{useCase}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="bg-glass border border-slate-700/50 p-8 rounded-2xl">
               <h3 className="serif-title text-3xl text-white mb-6">Why Choose Necteq</h3>
               <ul className="space-y-4">
                 {service.whyChooseUs.map((reason, i) => (
                   <li key={i} className="flex gap-3 text-slate-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0 pulse"></div>
                     <span className="leading-relaxed">{reason}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-t border-slate-800/50 bg-[#050816]">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="serif-title text-4xl text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
               {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-[#0B1120] border border-slate-700/50 p-6 rounded-xl">
                     <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                        <span className="text-[#0D6EFD] mt-1 shrink-0">Q.</span> {faq.q}
                     </h4>
                     <p className="text-slate-400 pl-6 border-l-2 border-slate-800/50">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action components from homepage, customized ID for linking */}
      <div id="service-contact">
         <Cta />
         <Contact />
      </div>
    </div>
  );
}
