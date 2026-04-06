export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 border-b border-muted pb-8">
        <h1 className="text-4xl font-bold">About George</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A brief introduction to the scholar behind this digital garden.
        </p>
      </header>
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none prose-invert">
          <p>
            George is a leading scholar and consultant at the intersection of Artificial Intelligence, business strategy, and modern procurement. With over 15 years of experience in both academia and the private sector, his work focuses on the ethical and practical implementation of AI in complex organizations.
          </p>
          <p>
            He holds a Ph.D. in Information Systems from [University Name] and has published extensively in top-tier academic journals. His research explores topics such as algorithmic bias in automated decision-making, the future of work in an AI-driven economy, and the development of resilient, intelligent supply chains.
          </p>
          <p>
            This website serves as his "digital garden"—a public-facing collection of evolving notes, research, and thoughts. Unlike a traditional blog, the content here is interconnected and constantly updated, reflecting the dynamic nature of his work.
          </p>
        </div>
      </div>
    </div>
  );
}
