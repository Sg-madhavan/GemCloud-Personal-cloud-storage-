import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Cloud, Zap } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-60 sm:w-72 h-60 sm:h-72 bg-purple-500/15 rounded-full blur-3xl animate-float-fast" />
        <div className="absolute bottom-1/3 right-1/3 w-48 sm:w-64 h-48 sm:w-64 bg-blue-600/10 rounded-full blur-3xl animate-float-slow" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-blue-300">Trusted by 50,000+ users worldwide</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Your Personal
              <span className="block gradient-text">Cloud. Secure.</span>
              <span className="block">Fast. Accessible</span>
              <span className="block gradient-text">Anywhere.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Store, sync and share your files with enterprise-grade security. 
              Your data, always available, always protected.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl hover:from-blue-500 hover:to-cyan-400 transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  setCurrentPage('landing');
                  setTimeout(() => {
                    document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white glass rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <Play className="h-5 w-5" />
                View Dashboard Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Shield className="h-4 w-4 text-green-400" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Cloud className="h-4 w-4 text-blue-400" />
                <span>99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glow behind mockup */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-purple-500/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Main mockup window */}
              <div className="relative glass rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-bg-light/50 border-b border-white/5">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-bg/60 rounded-lg text-[10px] sm:text-xs text-text-muted">
                      app.gemcloud.io/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Mockup content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { label: 'Storage', value: '764 GB', color: 'from-blue-500 to-blue-600' },
                      { label: 'Files', value: '1,258', color: 'from-cyan-500 to-cyan-600' },
                      { label: 'Shared', value: '124', color: 'from-purple-500 to-purple-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-bg/40 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-text-muted mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="bg-bg/40 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="flex justify-between text-xs text-text-muted mb-2">
                      <span>Storage Used</span>
                      <span>764 GB / 1 TB</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-bg-lighter rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full progress-animate" />
                    </div>
                  </div>
                  
                  {/* File list */}
                  <div className="bg-bg/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="text-xs sm:text-sm font-medium text-text-muted">Recent Files</div>
                    {['Project_Proposal.pdf', 'Design_System.fig', 'Meeting_Notes.docx'].map((file, i) => (
                      <div key={file} className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[8px] sm:text-[10px] font-bold ${
                          i === 0 ? 'bg-red-500/20 text-red-400' : i === 1 ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {i === 0 ? 'PDF' : i === 1 ? 'FIG' : 'DOC'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm truncate">{file}</div>
                          <div className="text-[9px] sm:text-[10px] text-text-muted">{2 - i} days ago</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[10px] sm:text-xs font-medium">Sync Complete</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                  <span className="text-[10px] sm:text-xs font-medium">Encrypted</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
