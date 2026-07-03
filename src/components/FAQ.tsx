import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How secure is my data on GemCloud?',
    answer: 'Your data is protected with AES-256 encryption both at rest and in transit. We use zero-knowledge architecture, which means only you hold the decryption keys. Even our engineers cannot access your files. We also undergo regular third-party security audits and are SOC 2 Type II compliant.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. When upgrading, you\'ll be charged a prorated amount for the remaining billing cycle. When downgrading, the change takes effect at the start of your next billing period.',
  },
  {
    question: 'What happens if I exceed my storage limit?',
    answer: 'If you reach your storage limit, you will still be able to access and download your files, but you won\'t be able to upload new files. We\'ll send you notifications before you hit the limit so you have time to upgrade or manage your storage.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial on all our plans with no credit card required. You get full access to all features during the trial period. At the end of the trial, you can choose a plan or your account will be downgraded to our free tier with 5 GB storage.',
  },
  {
    question: 'How does file synchronization work?',
    answer: 'GemCloud uses real-time synchronization powered by our proprietary delta-sync engine. When you make changes to a file on any device, only the changed portions are uploaded and synced to all your other devices. This makes sync incredibly fast and bandwidth-efficient.',
  },
  {
    question: 'Can I share files with people who don\'t have GemCloud?',
    answer: 'Yes. You can create shareable links for any file or folder, even with people who don\'t have a GemCloud account. You can set passwords, expiration dates, and download limits on shared links for added security.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4 sm:mb-6">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about GemCloud. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
