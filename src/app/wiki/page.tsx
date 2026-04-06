import Link from 'next/link';

const demoArticles = [
  {
    slug: 'ai-powered-peer-review',
    title: 'The Rise of AI-Powered Peer Review Systems',
    excerpt: 'Analyzing the potential for AI to reduce bias and increase efficiency in academic peer review.',
    category: 'Academic Publishing',
  },
  {
    slug: 'generative-models-for-research',
    title: 'Generative Models as a Tool for Academic Research',
    excerpt: 'Exploring how LLMs can be ethically used for hypothesis generation, literature synthesis, and data analysis.',
    category: 'Research Methodologies',
  },
  {
    slug: 'ai-and-the-future-of-the-humanities',
    title: 'AI and the Future of the Humanities',
    excerpt: 'A critical look at how artificial intelligence is challenging and augmenting traditional humanities scholarship.',
    category: 'Digital Humanities',
  },
];

export default function WikiIndexPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 border-b border-muted pb-8">
        <h1 className="text-4xl font-bold">The Wiki</h1>
        <p className="text-lg text-muted-foreground mt-2">All notes and articles on AI in Academics.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoArticles.map((article) => (
          <Link href={`/wiki/${article.slug}`} key={article.slug} className="block p-6 bg-card rounded-lg border border-muted shadow-sm hover:border-primary transition-colors">
            <span className="text-sm font-semibold text-primary">{article.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-2 text-card-foreground">{article.title}</h3>
            <p className="text-muted-foreground">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
