import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
{
  text: "RISE isn't just clothing — it's a feeling. Every time I put on my jacket, I remember what I've overcome. It's my daily armor.",
  author: 'Maya R.',
  role: 'Survivor & Advocate'
},
{
  text: "Finally, a brand that understands that style and substance aren't mutually exclusive. The quality is unreal, and the mission is everything.",
  author: 'Jordan K.',
  role: 'Community Leader'
},
{
  text: "I wore my RISE hoodie to my first therapy session. It sounds small, but it gave me courage. That's the power of intentional design.",
  author: 'Alex T.',
  role: 'Healing Journey'
}];


export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stories" className="py-24 md:py-36 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Community</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">Stories of Strength</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {testimonials.map((t, i) =>
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 * i }}
            className="relative">
            
              <Quote size={32} className="text-accent/40 mb-6" />
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-8 text-[15px]">
                "{t.text}"
              </p>
              <div>
                <p className="text-base font-medium opacity-100">{t.author}</p>
                <p className="text-primary-foreground/50 mt-1 text-xs font-body uppercase tracking-widest opacity-100">{t.role}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}