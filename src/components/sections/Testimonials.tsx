import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Partnering with Necteq allowed us to scale our NOC operations overnight without the massive overhead of hiring in-house. Their engineers feel like a part of our core team.",
    author: "David Chen",
    role: "CEO, NexaTech Solutions",
    rating: 5
  },
  {
    quote: "The 24/7 service desk support has completely transformed our client satisfaction scores. Tickets are resolved faster, and our internal team can focus on strategic projects.",
    author: "Sarah Jenkins",
    role: "VP of Operations, CloudWorks",
    rating: 5
  },
  {
    quote: "We needed specialized project engineers for a massive Azure migration. Necteq provided top-tier talent within days. The project was delivered flawlessly.",
    author: "Marcus Thorne",
    role: "Director of IT, Sentinel Group",
    rating: 5
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center min-h-[600px] border-y border-slate-800/50 bg-[#0B1120]">
      <div className="absolute inset-0 bg-[#0D6EFD]/5" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        <Quote size={48} className="text-primary/20 mx-auto mb-8" />
        
        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-[#00E5FF]" />
                ))}
              </div>
              
              <p className="text-xl md:text-3xl font-sans font-medium leading-relaxed mb-8 text-white italic">
                "{testimonials[current].quote}"
              </p>
              
              <div>
                <div className="font-bold text-lg text-white">{testimonials[current].author}</div>
                <div className="text-[#0D6EFD] text-sm font-medium uppercase tracking-widest">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-[#0D6EFD]/20 hover:text-[#0D6EFD] transition-colors hover:border-[#0D6EFD]/50 bg-[#050816]">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-[#00E5FF]' : 'w-2 bg-slate-700'}`}
              />
            ))}
          </div>
          
          <button onClick={next} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-[#0D6EFD]/20 hover:text-[#0D6EFD] transition-colors hover:border-[#0D6EFD]/50 bg-[#050816]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
