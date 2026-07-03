import { motion } from 'framer-motion';
import {
  Shield,
  HardDrive,
  RefreshCw,
  History,
  Play,
  Lock,
  Upload,
  MonitorSmartphone,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'Your files are protected with military-grade AES-256 encryption at rest and in transit.',
    gradient: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: HardDrive,
    title: 'Automatic Backup',
    description: 'Never lose a file. Automated backups run seamlessly in the background, keeping everything safe.',
    gradient: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: RefreshCw,
    title: 'File Synchronization',
    description: 'Changes sync instantly across all your devices. Pick up right where you left off, anywhere.',
    gradient: 'from-purple-500 to-purple-600',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: History,
    title: 'Version History',
    description: 'Access previous versions of any file. Restore, compare, and track changes with full history.',
    gradient: 'from-emerald-500 to-emerald-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Play,
    title: 'Media Streaming',
    description: 'Stream videos and music directly from your cloud without downloading them first.',
    gradient: 'from-rose-500 to-rose-600',
    glow: 'shadow-rose-500/20',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Only you can access your files. Zero-knowledge architecture means even we cannot see your data.',
    gradient: 'from-amber-500 to-amber-600',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: Upload,
    title: 'Fast Upload',
    description: 'Multi-threaded upload technology ensures your files are uploaded at maximum speed.',
    gradient: 'from-pink-500 to-pink-600',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: MonitorSmartphone,
    title: 'Multi Device Access',
    description: 'Access your files from any device — desktop, tablet, or phone. One account, everywhere.',
    gradient: 'from-indigo-500 to-indigo-600',
    glow: 'shadow-indigo-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4 sm:mb-6">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to{' '}
            <span className="gradient-text">manage your files</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features designed to keep your data safe, accessible, and organized across all your devices.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg ${feature.glow} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
