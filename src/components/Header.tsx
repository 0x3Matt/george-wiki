import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              George's Wiki
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/wiki" className="text-muted-foreground hover:text-foreground transition-colors">
              Wiki
            </Link>
            <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
