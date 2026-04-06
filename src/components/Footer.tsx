export default function Footer() {
  return (
    <footer className="bg-card border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} George's Wiki. A scholar's digital garden on AI in Academics.
        </p>
      </div>
    </footer>
  );
}
