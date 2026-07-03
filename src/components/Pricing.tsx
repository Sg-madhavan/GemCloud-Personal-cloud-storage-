import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹199',
    period: '/month',
    description: 'Perfect for individuals getting started with cloud storage.',
    storage: '100 GB Storage',
    features: [
      'File Sharing',
      'Mobile Access',
      'Email Support',
      'Basic Security',
      '2 Device Sync',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-slate-500 to-slate-600',
  },
  {
    name: 'Personal',
    price: '₹499',
    period: '/month',
    description: 'Best value for power users who need more storage and features.',
    storage: '1 TB Storage',
    features: [
      'Automatic Backup',
      'Version History (30 days)',
      'File Sync (5 devices)',
      'Priority Support',
      'Media Streaming',
      'Advanced Sharing Controls',
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Business',
    price: '₹1499',
    period: '/month',
    description: 'Enterprise-grade storage with team collaboration tools.',
    storage: '10 TB Storage',
    features: [
      'Team Collaboration',
      'Admin Controls & Roles',
      'Activity Logs & Audit',
      'Dedicated Support',
      'Unlimited Devices',
      'API Access',
      'Custom Branding',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-purple-600',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-4 sm:mb-6">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose the plan that works best for you.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative group rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-500/20 to-cyan-500/10 border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10'
                  : 'glass border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30">
                    <Star className="h-3.5 w-3.5 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-text-secondary mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-text-secondary text-base">{plan.period}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-xs sm:text-sm text-text-muted mb-6">
                  <Zap className="h-3.5 w-3.5 text-yellow-400" />
                  {plan.storage}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
