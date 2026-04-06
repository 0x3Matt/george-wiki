export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  const article = {
    title: 'The Rise of AI-Powered Peer Review Systems',
    content: `
      <p>The landscape of academic publishing is undergoing a seismic shift, driven by the rapid advancements in Artificial Intelligence (AI). These technologies are no longer theoretical concepts but practical tools that are reshaping how scholarly work is evaluated.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">AI in Reviewer Selection</h2>
      <p>One of the most significant impacts of AI is in the initial stages of the peer review process: reviewer selection. AI-powered platforms can analyze vast datasets of publications to identify potential reviewers with the most relevant expertise, helping to reduce reviewer fatigue and selection bias (Smith, 2023). This not only accelerates the process but also provides a more data-driven basis for a robust review.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Automated Manuscript Screening</h2>
      <p>Routine checks for plagiarism, statistical reporting errors, and adherence to journal guidelines are ripe for automation. AI tools can perform these screenings with greater speed and accuracy than human counterparts, freeing up editors to focus on the scientific merit of the work (Johnson & Lee, 2022).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Question of Bias</h2>
      <p>While AI can help mitigate human bias, it's crucial to acknowledge that AI models can also inherit and amplify biases present in their training data. Ensuring fairness and transparency in these systems is a paramount challenge that the academic community must address (Chen, 2024).</p>
    `,
    sources: [
      {
        author: 'Smith, J.',
        year: '2023',
        title: 'AI in Peer Review: A New Era',
        url: 'https://example.com/smith-2023-ai-peer-review',
      },
      {
        author: 'Johnson, A. & Lee, B.',
        year: '2022',
        title: 'Automation in Scholarly Publishing',
        url: 'https://example.com/johnson-lee-2022-automation',
      },
      {
        author: 'Chen, X.',
        year: '2024',
        title: 'Algorithmic Bias in Academic AI',
        url: 'https://example.com/chen-2024-algorithmic-bias',
      }
    ]
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 border-b border-muted pb-8">
            <p className="text-primary font-semibold">Academic Publishing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">
              {article.title}
            </h1>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <footer className="mt-12 pt-8 border-t border-muted">
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <ul className="space-y-4">
              {article.sources.map((source, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  <p className="font-semibold text-foreground">{source.author} ({source.year}). <em>{source.title}</em>.</p>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {source.url}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </article>
      </div>
    </div>
  );
}
