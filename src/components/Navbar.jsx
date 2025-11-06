import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold text-blue-900 tracking-tight text-lg">
          TalentNavy
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#companies" className="text-slate-700 hover:text-blue-900">For Companies</a></li>
          <li><a href="#jobseekers" className="text-slate-700 hover:text-blue-900">For Jobseekers</a></li>
          <li><a href="#process" className="text-slate-700 hover:text-blue-900">Process</a></li>
          <li><a href="#contact" className="text-slate-700 hover:text-blue-900">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors">Book a Call</a>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 text-slate-600"
            onClick={() => {
              const el = document.getElementById('mobile-nav');
              if (el) el.classList.toggle('hidden');
            }}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
      <div id="mobile-nav" className="md:hidden hidden border-t border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 grid gap-3">
          <a href="#companies" className="text-slate-700 hover:text-blue-900">For Companies</a>
          <a href="#jobseekers" className="text-slate-700 hover:text-blue-900">For Jobseekers</a>
          <a href="#process" className="text-slate-700 hover:text-blue-900">Process</a>
          <a href="#contact" className="text-slate-700 hover:text-blue-900">Contact</a>
          <a href="#contact" className="inline-flex justify-center px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors">Book a Call</a>
        </div>
      </div>
    </header>
  );
}
