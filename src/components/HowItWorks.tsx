import { motion } from 'framer-motion';
import { UserPlus, CreditCard, UploadCloud, Globe } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up in seconds with your email. No credit card required to get started.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Choose Plan',
    description: 'Pick the plan that fits your needs. Upgrade or downgrade anytime.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: UploadCloud,
    title: 'Upload Files',
    description: 'Drag and drop your files or use our desktop app for automatic syncing.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Globe,
    title: 'Access Anywhere',
    description: 'Your files are available on any device, anywhere in the world.',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4 sm:mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Get started in{' '}
            <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            From sign-up to accessing your files worldwide, we've made the process as smooth as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-xl`} />
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Step number badge */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 sm:relative sm:top-0 sm:left-0 sm:translate-x-0 sm:-mt-1 sm:-ml-1">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-bg text-xs font-bold text-text-muted border border-white/10 sm:hidden">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xs mx-auto">{step.description}</p>

                {/* Arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 text-text-muted">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
