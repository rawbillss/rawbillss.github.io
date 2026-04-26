import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 md:py-36" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Be Part of It</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Join the Movement
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10">Be part of the first drop.
No noise, just early access, real updates, and pieces that mean something.

          </p>

          {!submitted ?
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
            
              <button type="submit" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
                Join <ArrowRight size={16} />
              </button>
            </form> :

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 text-accent">
            
              <div className="w-10 h-10 border border-accent flex items-center justify-center">
                <Check size={20} />
              </div>
              <p className="font-body font-medium">You're in. Welcome to the movement.</p>
            </motion.div>
          }

          <p className="font-body text-xs text-muted-foreground mt-5">No spam. Ever.

          </p>
        </motion.div>
      </div>
    </section>);

}