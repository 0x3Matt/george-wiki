import Link from 'next/link';

const demoArticles = [
  {
    slug: 'the-future-of-procurement',
    title: 'The Future of Procurement: AI and Automation',
    excerpt: 'Exploring the impact of artificial intelligence and automation on modern supply chain and procurement strategies.',
    category: 'Procurement',
  },
  {
    slug: 'sustainable-sourcing-strategies',
    title: 'Sustainable Sourcing Strategies for Modern Businesses',
    excerpt: 'A deep dive into creating ethical and environmentally friendly supply chains without sacrificing the bottom line.',
    category: 'Business Ethics',
  },
  {
    slug: 'risk-management-in-supply-chains',
    title: 'Advanced Risk Management in Global Supply Chains',
    excerpt: 'Identifying, assessing, and mitigating risks in an increasingly volatile global market.',
    category: 'Supply Chain',
  },
];

export default function WikiIndexPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl font-bold">The Wiki</h1>
        <p className="text-lg text-slate-600 mt-2">All notes and articles.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoArticles.map((article) => (
          <Link href={`/wiki/${article.slug}`} key={article.slug} className="block p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <span className="text-sm font-semibold text-indigo-600">{article.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-2">{article.title}</h3>
            <p className="text-slate-600">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
