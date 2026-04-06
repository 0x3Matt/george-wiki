const demoEvents = [
  {
    title: 'Webinar: The Ethics of AI in Academic Research',
    date: 'May 15, 2026',
    time: '2:00 PM EST',
    description: 'A deep dive into the ethical considerations and frameworks required for using AI tools in scholarly research, from data collection to publication.',
    type: 'Online Webinar',
  },
  {
    title: 'Conference Talk: AI for Supply Chain Resilience',
    date: 'June 5, 2026',
    time: '10:00 AM PST',
    description: 'Presenting a new model for using predictive AI to build more resilient and adaptive global supply chains at the Global Tech Summit.',
    type: 'In-Person Conference',
  },
  {
    title: 'Workshop: Generative AI for Literature Reviews',
    date: 'June 20, 2026',
    time: '11:00 AM EST',
    description: 'A hands-on workshop for graduate students and researchers on leveraging LLMs to accelerate and enhance the literature review process.',
    type: 'Online Workshop',
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 border-b border-muted pb-8">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Join the conversation at these upcoming talks, webinars, and workshops.
        </p>
      </header>
      <div className="max-w-3xl mx-auto space-y-8">
        {demoEvents.map((event, index) => (
          <div key={index} className="p-6 bg-card rounded-lg border border-muted">
            <span className="text-sm font-semibold text-primary">{event.type}</span>
            <h2 className="text-2xl font-bold mt-2 mb-2">{event.title}</h2>
            <p className="text-muted-foreground font-medium">{event.date} @ {event.time}</p>
            <p className="text-muted-foreground mt-4">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
