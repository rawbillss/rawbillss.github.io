export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <img src="https://media.base44.com/images/public/69d28540199400fc6b22bfb1/3d70d6f81_1775403430136-cde0ec45-929c-4319-a999-a27bb29c7331_1.jpg" alt="Humbled Hearts Logo" className="h-20 w-auto mb-3 mix-blend-multiply" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Sustainable apparel rooted in resilience, healing, and empowerment. 
              Wear your heart.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-foreground font-medium mb-4">Navigate</p>
            <div className="space-y-3">
              {['Mission', 'Collection', 'Values', 'Stories'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-foreground font-medium mb-4">Connect</p>
            <div className="space-y-3">
              {['Instagram', 'Twitter / X', 'TikTok'].map(link => (
                <a key={link} href="#" className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Humbled Hearts. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Made with purpose. Worn with pride.
          </p>
        </div>
      </div>
    </footer>
  );
}