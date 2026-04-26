import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Eye, Users } from 'lucide-react';

const values = [
{
  icon: Heart,
  title: 'Resilience',
  description: 'Every design embodies the unbreakable spirit within us. Our garments are built to last, just like you.'
},
{
  icon: Shield,
  title: 'Healing',
  description: 'Clothing that feels like a warm embrace. Soft, intentional fabrics that comfort and restore.'
},
{
  icon: Eye,
  title: 'Empowerment',
  description: 'Wear your power. Each piece is a declaration that you define your own narrative.'
},
{
  icon: Users,
  title: 'Sustainability',
  description: 'Organic materials, ethical production, zero-waste goals. Healing the planet while healing ourselves.'
}];


export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="values" className="py-24 md:py-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">what we stand for</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Our Pillars</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {values.map((v, i) =>
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 * i }}
            className="text-center group">
            
              <div className="w-16 h-16 mx-auto mb-6 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <v.icon size={24} className="text-accent group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-3 text-foreground">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}