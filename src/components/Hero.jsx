import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-900">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
            Elite Tech Headhunting
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-blue-900">
            Hire exceptional talent. Land your dream role.
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            We connect high-growth companies with world‑class engineers, product leaders, and designers. Candidates get bespoke coaching and access to hidden opportunities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#companies" className="inline-flex justify-center rounded-md bg-blue-900 text-white px-5 py-3 hover:bg-blue-800 transition-colors">For Companies</a>
            <a href="#jobseekers" className="inline-flex justify-center rounded-md border border-blue-200 bg-white text-blue-900 px-5 py-3 hover:border-blue-300">For Jobseekers</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>48h shortlist</div>
            <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Faster hires</div>
          </div>
        </div>
      </div>
    </section>
  );
}
