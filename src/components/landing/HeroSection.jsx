import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <img src="https://media.base44.com/images/public/69d28540199400fc6b22bfb1/a2ab2b99f_LogoPnkBluHrt2.jpg" alt="Humbled Hearts Logo" className="w-full h-full object-contain opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          






          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8 text-foreground">
            
            <span className="italic text-accent">Welcome</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
            
            Humbled Hearts exists for the ones who had to heal in silence. We turn pain into pieces you can wear, proof that growth is real, even when it's ugly first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a href="#collection" className="font-body text-sm font-medium tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity text-center">COMING SOON...

            </a>
            <a href="#mission" className="font-body text-sm font-medium tracking-widest uppercase border border-foreground/20 text-foreground px-8 py-4 hover:bg-foreground/5 transition-colors text-center">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#mission"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors">
        
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>);

}