import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const collectionItems = [
{ name: 'The Foundation Tee', category: 'ESSENTIALS', price: '$68' },
{ name: 'Resilience Jacket', category: 'ESSENTIALS', price: '$195' },
{ name: 'Organic Roots Crew', category: 'ESSENTIALS', price: '$85' }];


export default function CollectionSection({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collection" className="py-24 md:py-36 bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          
          
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Debut Drop</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">From Darkness to Blossom Collection

          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">This collection is about becoming.
Not overnight. Not perfectly.
But slowly… like something learning how to live again. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collectionItems.map((item, i) =>
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="group">
            
              <div className="aspect-[3/4] bg-secondary flex items-center justify-center mb-5 overflow-hidden border border-border">
                <div className="text-center px-8">
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">{item.category}</p>
                  <p className="font-heading text-2xl italic text-foreground/30">Coming Soon</p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  
                  
                </div>
                
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-14">
          
          <a href="#newsletter" className="font-body text-sm font-medium tracking-widest uppercase border border-foreground/20 text-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-300 inline-block">
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>);

}