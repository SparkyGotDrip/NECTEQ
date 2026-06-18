import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { WhyNecteqPage } from './pages/WhyNecteqPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-slate-200 font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white relative flex flex-col">
        {/* Background Elements */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0D6EFD] opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#00E5FF] opacity-5 blur-[100px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-necteq" element={<WhyNecteqPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

