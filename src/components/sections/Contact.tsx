import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#0B1120] border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="serif-title text-4xl font-bold mb-4 text-white text-glow">Start the Conversation</h2>
              <p className="text-slate-400 mb-12 max-w-md text-lg leading-relaxed">
                Ready to transform your MSP operations? Reach out to our global team to discuss custom solutions tailored to your growth.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-[#0D6EFD]/30 flex items-center justify-center text-[#0D6EFD] shrink-0 hover:neon-border transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg tracking-wide">Email Us</h4>
                  <a href="mailto:hello@necteq.com" className="text-[#00E5FF] hover:underline font-mono">hello@necteq.com</a>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-[#0D6EFD]/30 flex items-center justify-center text-[#0D6EFD] shrink-0 hover:neon-border transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg tracking-wide">Call Us</h4>
                  <p className="text-slate-400 font-mono">+1 (800) 555-0199</p>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-[#0D6EFD]/30 flex items-center justify-center text-[#0D6EFD] shrink-0 hover:neon-border transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg tracking-wide">Global Headquarters</h4>
                  <p className="text-slate-400">100 Innovation Drive, San Francisco<br/>CA 94105, United States</p>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-[#0D6EFD]/30 flex items-center justify-center text-[#0D6EFD] shrink-0 hover:neon-border transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg tracking-wide">Business Hours</h4>
                  <p className="text-slate-400">Operations: 24/7/365<br/>Corporate: Mon-Fri, 9am-6pm EST</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="bg-glass p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:neon-border transition-all duration-300">
              <h3 className="text-2xl font-sans font-bold mb-8 text-white tracking-wide">Request a Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-medium text-slate-500">Name</label>
                     <input type="text" className="w-full bg-[#050816] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-medium text-slate-500">Company</label>
                     <input type="text" className="w-full bg-[#050816] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono text-sm" placeholder="MSP Corp" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-medium text-slate-500">Email</label>
                     <input type="email" className="w-full bg-[#050816] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono text-sm" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-medium text-slate-500">Phone</label>
                     <input type="tel" className="w-full bg-[#050816] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono text-sm" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest font-medium text-slate-500">Message</label>
                   <textarea rows={4} className="w-full bg-[#050816] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono text-sm resize-none" placeholder="How can we help you scale?" />
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-[#0D6EFD] to-[#2EA8FF] text-white font-bold py-4 rounded hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.02] transition-all uppercase tracking-wider text-sm">
                  Request Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
