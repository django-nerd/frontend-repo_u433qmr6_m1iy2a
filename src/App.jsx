import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BenefitsCompanies, BenefitsJobseekers } from './components/Benefits';
import Process from './components/Process';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} TalentNavy — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-500 hover:text-blue-900">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-blue-900">Terms</a>
          <a href="#" className="text-slate-500 hover:text-blue-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter antialiased text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <BenefitsCompanies />
        <BenefitsJobseekers />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
