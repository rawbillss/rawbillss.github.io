import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import MarqueeStrip from '../components/landing/MarqueeStrip';
import MissionSection from '../components/landing/MissionSection';
import CollectionSection from '../components/landing/CollectionSection';
import ValuesSection from '../components/landing/ValuesSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import NewsletterSection from '../components/landing/NewsletterSection';
import Footer from '../components/landing/Footer';

const HERO_IMAGE = 'https://media.base44.com/images/public/69d28540199400fc6b22bfb1/ae324202a_generated_6aa7ac65.png';
const ABOUT_IMAGE = 'https://media.base44.com/images/public/69d28540199400fc6b22bfb1/b4d3f8c08_generated_89cc5d7d.png';
const COLLECTION_IMAGES = [
  'https://media.base44.com/images/public/69d28540199400fc6b22bfb1/f934ad238_generated_47dde917.png',
  'https://media.base44.com/images/public/69d28540199400fc6b22bfb1/72b963be5_generated_f65303b5.png',
  'https://media.base44.com/images/public/69d28540199400fc6b22bfb1/9d857f5d5_generated_8b4515ed.png',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <MarqueeStrip />
      <MissionSection aboutImage={ABOUT_IMAGE} />
      <CollectionSection images={COLLECTION_IMAGES} />
      <ValuesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}