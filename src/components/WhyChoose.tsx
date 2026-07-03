import { motion } from 'framer-motion';
import { Server, ShieldCheck, Database, Headphones, HardDrive, Clock } from 'lucide-react';

const stats = [
  { icon: Server, value: '99.99%', label: 'Uptime Guarantee', color: 'from-blue-400 to-blue-600' },
  { icon: ShieldCheck, value: '256-bit', label: 'AES Encryption', color: 'from-cyan-400 to-cyan-600' },
  { icon: Database, value: '1M+', label: 'Files Stored Daily', color: 'from-purple-400 to-purple-600' },
  { icon: Headphones, value: '24/7', label: 'Support Available', color: 'from-emerald-400 to-emerald-600' },
  { icon: HardDrive, value: '10 TB', label: 'Maximum Storage', color: 'from-amber-400 to-amber-600' },
  { icon: Clock, value: '<50ms', label: 'Average Latency', color: 'from-rose-400 to-rose-600' },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 sm:mb-6">
            Why GemCloud
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for{' '}
            <span className="gradient-text">reliability and trust</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Numbers speak louder than words. Here's why thousands of users trust GemCloud with their most important data.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
