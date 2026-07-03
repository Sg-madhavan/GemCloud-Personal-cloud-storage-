import { motion } from 'framer-motion';

const companies = [
  { name: 'TechFlow', color: 'from-blue-400 to-blue-600' },
  { name: 'NovaByte', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Quantum Labs', color: 'from-purple-400 to-purple-600' },
  { name: 'DataSync', color: 'from-emerald-400 to-emerald-600' },
  { name: 'CloudPeak', color: 'from-orange-400 to-orange-600' },
  { name: 'PixelForge', color: 'from-pink-400 to-pink-600' },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-text-muted uppercase tracking-widest mb-8 sm:mb-12"
        >
          Trusted by forward-thinking companies worldwide
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl glass-light hover:bg-white/5 transition-all cursor-default"
            >
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                <span className="text-[8px] sm:text-xs font-bold text-white">{company.name[0]}</span>
              </div>
              <span className="text-sm sm:text-base font-semibold text-text-secondary group-hover:text-white transition-colors">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
