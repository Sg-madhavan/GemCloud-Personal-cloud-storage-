import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import DashboardPage from './components/DashboardPage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('landing');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-bg text-white font-sans">
      <AnimatePresence mode="wait">
        {currentPage === 'dashboard' ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DashboardPage setCurrentPage={setCurrentPage} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar setCurrentPage={setCurrentPage} />
            <main>
              <Hero setCurrentPage={setCurrentPage} />
              <TrustedBy />
              <Features />
              <WhyChoose />
              <HowItWorks />
              <Pricing />

              {/* Dashboard Preview CTA Section */}
              <section id="dashboard" className="relative py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Ready to take{' '}
                        <span className="gradient-text">control</span>?
                      </h2>
                      <p className="text-base sm:text-lg text-text-secondary mb-8 sm:mb-10">
                        Explore our powerful dashboard with real-time analytics, file management, and storage controls. See everything at a glance.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={() => setCurrentPage('dashboard')}
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
                        >
                          Open Dashboard Demo
                        </button>
                        <button
                          onClick={() => {
                            const el = document.querySelector('#pricing');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-8 py-4 glass rounded-2xl font-semibold text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
                        >
                          View Pricing
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <Testimonials />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
