import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#050816] pt-20 pb-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#0D6EFD] via-[#00E5FF] to-[#FF2D55] p-[2px]">
                 <div className="w-full h-full bg-[#050816] rounded flex items-center justify-center font-bold text-sm text-white">N</div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">NECTEQ</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering MSPs globally with dedicated 24/7 engineering teams, NOC services, and intelligent IT operations.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded border border-slate-700/50 bg-glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-slate-700/50 bg-glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-slate-700/50 bg-glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-slate-700/50 bg-glass flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> About Us</Link></li>
              <li><Link to="/why-necteq" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Why Necteq</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Careers</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/dedicated-engineers" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Dedicated Engineers</Link></li>
              <li><Link to="/services/noc" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> 24/7 NOC Services</Link></li>
              <li><Link to="/services/software" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Software Development</Link></li>
              <li><Link to="/services/projects" className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-[#0D6EFD]" /> Projects & Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 tracking-wide">Global Offices</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">
                <span className="block text-white font-medium mb-1 tracking-wide">North America HQ</span>
                100 Innovation Drive,<br />San Francisco, CA 94105
              </li>
              <li className="text-slate-400 text-sm mt-4">
                <span className="block text-white font-medium mb-1 tracking-wide">EMEA Operations</span>
                Cyber Security Hub,<br />London, UK EC2A 4BX
              </li>
              <li className="mt-6">
                <a href="mailto:hello@necteq.com" className="text-[#00E5FF] hover:text-[#00E5FF] font-medium transition-colors font-mono tracking-wider">hello@necteq.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Necteq. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
