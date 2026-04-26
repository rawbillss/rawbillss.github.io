import { motion } from 'framer-motion';

export default function MarqueeStrip() {
  const words = ['Renewal', 'Truth', 'Survival', 'Depth', 'Rebirth', 'Becoming', 'Forged', 'Ascension'];
  const repeated = [...words, ...words, ...words];

  return (
    <div className="overflow-hidden py-6 bg-secondary/50 border-y border-border">
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {repeated.map((word, i) => (
          <span key={i} className="font-heading text-lg md:text-xl italic text-muted-foreground/50 mx-8">
            {word} <span className="text-accent/40 mx-4">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}