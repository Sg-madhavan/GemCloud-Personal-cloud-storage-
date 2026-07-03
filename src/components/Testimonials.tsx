import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Designer at TechFlow',
    avatar: 'PS',
    rating: 5,
    text: 'GemCloud has completely transformed how I manage my design files. The sync is instantaneous and the version history has saved me countless hours. Absolutely love the clean interface.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Rahul Verma',
    role: 'CTO at NovaByte',
    avatar: 'RV',
    rating: 5,
    text: 'We migrated our entire team to GemCloud last year. The admin controls, activity logs, and team collaboration features are enterprise-grade. Best decision we\'ve made for our infrastructure.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Ananya Patel',
    role: 'Freelance Photographer',
    avatar: 'AP',
    rating: 5,
    text: 'As a photographer, storage and speed are everything. GemCloud handles my RAW files effortlessly, and the media streaming feature means I can preview photos without downloading them first.',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function Testimonials() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4 sm:mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Loved by{' '}
            <span className="gradient-text">thousands of users</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with GemCloud.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
