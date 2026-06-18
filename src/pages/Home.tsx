import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Trust } from '../components/sections/Trust';
import { Services } from '../components/sections/Services';
import { WhyNecteq } from '../components/sections/WhyNecteq';
import { About } from '../components/sections/About';
import { Philosophy } from '../components/sections/Philosophy';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Cta } from '../components/sections/Cta';
import { Contact } from '../components/sections/Contact';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WhyNecteq />
      <About />
      <Philosophy />
      <Process />
      <Testimonials />
      <Cta />
      <Contact />
    </>
  );
}
