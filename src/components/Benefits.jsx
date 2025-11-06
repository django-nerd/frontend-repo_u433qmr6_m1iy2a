export function BenefitsCompanies() {
  const items = [
    {
      title: 'Curated talent network',
      desc: 'Vetted engineers, product managers, and designers with proven track records at top startups and tech firms.',
    },
    {
      title: 'Speed without noise',
      desc: 'Shortlists in under 48 hours. Every profile is hand‑screened to your exact role requirements.',
    },
    {
      title: 'Market intelligence',
      desc: 'Compensation insights, talent heatmaps, and interview scorecards to hire with confidence.',
    },
    {
      title: 'Guaranteed placement',
      desc: 'Replacement guarantee and pay‑on‑hire billing aligned to outcomes, not resumes.',
    },
  ];

  return (
    <section id="companies" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900">For Companies</h2>
            <p className="mt-3 text-slate-600">Scale faster with a partner that understands startups and technology. We act as an extension of your team.</p>
            <a href="#contact" className="mt-6 inline-flex rounded-md bg-blue-900 text-white px-5 py-3 hover:bg-blue-800">Request Shortlist</a>
          </div>
          <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 hover:shadow-sm transition-shadow">
                <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-semibold text-blue-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function BenefitsJobseekers() {
  const items = [
    {
      title: 'Access hidden roles',
      desc: 'Get introduced to stealth and unlisted positions across product, engineering and design.',
    },
    {
      title: 'Personal brand coaching',
      desc: 'Resume and portfolio polish, LinkedIn strategy, and interview prep tailored to the role.',
    },
    {
      title: 'Fair offers, faster',
      desc: 'We negotiate on your behalf with transparent comp bands and data‑driven benchmarks.',
    },
    {
      title: 'Long‑term advocacy',
      desc: 'We stay in your corner beyond the offer to help you ramp and grow.',
    },
  ];

  return (
    <section id="jobseekers" className="py-20 bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900">For Jobseekers</h2>
            <p className="mt-3 text-slate-600">We help top candidates position their story, showcase impact, and win offers that reflect their value.</p>
            <a href="#contact" className="mt-6 inline-flex rounded-md bg-blue-900 text-white px-5 py-3 hover:bg-blue-800">Get Matched</a>
          </div>
          <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-blue-100 bg-white p-6 hover:shadow-sm transition-shadow">
                <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-semibold text-blue-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
