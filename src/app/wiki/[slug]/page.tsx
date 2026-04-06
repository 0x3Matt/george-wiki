export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  const article = {
    title: 'The Future of Procurement: AI and Automation',
    content: `
      <p>The landscape of procurement is undergoing a seismic shift, driven by the rapid advancements in Artificial Intelligence (AI) and automation. These technologies are no longer theoretical concepts but practical tools that are reshaping how organizations source goods and services, manage suppliers, and mitigate risks.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">AI in Supplier Discovery and Vetting</h2>
      <p>One of the most significant impacts of AI is in the initial stages of the procurement process: supplier discovery and vetting. AI-powered platforms can analyze vast datasets to identify potential suppliers that meet specific criteria, from financial stability to ethical sourcing standards [1]. This not only accelerates the discovery process but also provides a more data-driven basis for decision-making.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Automation of Repetitive Tasks</h2>
      <p>Routine procurement tasks, such as purchase order creation, invoice processing, and payment reconciliation, are ripe for automation. Robotic Process Automation (RPA) can handle these high-volume, rules-based tasks with greater speed and accuracy than human counterparts, freeing up procurement professionals to focus on more strategic activities like negotiation and relationship management [2].</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Predictive Analytics for Risk Management</h2>
      <p>AI's predictive capabilities are a game-changer for supply chain risk management. By analyzing historical data and real-time market signals, AI models can forecast potential disruptions, such as price volatility, supplier delays, or geopolitical instability. This allows organizations to proactively develop contingency plans and build more resilient supply chains [3].</p>
    `,
    sources: [
      {
        name: 'Gartner, "AI in Procurement: The Future is Now"',
        url: 'https://www.gartner.com/en/articles/ai-in-procurement',
      },
      {
        name: 'Deloitte, "The Role of Automation in Procurement"',
        url: 'https://www2.deloitte.com/us/en/pages/operations/articles/role-of-automation-in-procurement.html',
      },
      {
        name: 'McKinsey, "Supply Chain Risk Management in a Volatile World"',
        url: 'https://www.mckinsey.com/capabilities/operations/our-insights/supply-chain-risk-management-in-a-volatile-world',
      }
    ]
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 border-b pb-8">
            <p className="text-indigo-600 font-semibold">Procurement</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
              {article.title}
            </h1>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <footer className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Sources</h2>
            <ul className="space-y-2">
              {article.sources.map((source, index) => (
                <li key={index} className="text-slate-600">
                  <strong className="mr-2">[{index + 1}]</strong>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {source.name}
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
