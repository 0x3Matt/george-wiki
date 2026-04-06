export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 border-b border-muted pb-8 text-center">
        <h1 className="text-4xl font-bold">Community</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Engage with the research, join the discussion, and stay updated.
        </p>
      </header>
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Receive monthly updates with the latest notes, research highlights, and upcoming event notifications. No spam, just curated insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-md bg-muted border border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-bold">Upcoming Community Forum</h3>
          <p className="text-muted-foreground mt-2">
            A dedicated space for in-depth discussions is coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
