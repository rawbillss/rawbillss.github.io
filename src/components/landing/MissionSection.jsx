import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MissionSection({ aboutImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission" className="py-24 md:py-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            
            <div className="relative">
              <img src="https://media.base44.com/images/public/69d28540199400fc6b22bfb1/3d70d6f81_1775403430136-cde0ec45-929c-4319-a999-a27bb29c7331_1.jpg" alt="Humbled Hearts Logo" className="w-full aspect-[4/5] object-contain bg-secondary/30" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/30" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            
            
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">What We Stand For</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-8 text-foreground">
              Born from<br />
              <span className="italic">Adversity</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Humbled Hearts was created for those who know what it means to fall — and get back up. 
                We believe clothing is more than fabric; it's armor for the soul, a daily 
                reminder of your inner strength.
              </p>
              <p>
                Every piece we create is sustainably sourced and thoughtfully designed. 
                Our collections draw from the raw beauty of nature's resilience — roots 
                that break through concrete, wildflowers that bloom in barren fields.
              </p>
              <p>
                We're building a community of survivors, healers, and warriors. When you 
                wear Humbled Hearts, you carry a promise: <span className="text-foreground font-medium">you are stronger than anything that tried to break you.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}