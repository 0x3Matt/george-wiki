import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/75 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              George's Wiki
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/wiki" className="text-slate-600 hover:text-slate-800">
              Wiki
            </Link>
            <Link href="/events" className="text-slate-600 hover:text-slate-800">
              Events
            </Link>
            <Link href="/community" className="text-slate-600 hover:text-slate-800">
              Community
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-800">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
