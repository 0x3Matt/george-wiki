export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-slate-500">
          &copy; {new Date().getFullYear()} George's Wiki. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
