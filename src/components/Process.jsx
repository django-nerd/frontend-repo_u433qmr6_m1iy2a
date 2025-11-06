export default function Process() {
  const steps = [
    {
      k: '01',
      t: 'Discover',
      d: 'Deep role intake or career mapping. We define must‑haves, impact, and success signals.'
    },
    {
      k: '02',
      t: 'Source',
      d: 'Targeted outreach across our private network and data‑driven sourcing. No spray‑and‑pray.'
    },
    {
      k: '03',
      t: 'Select',
      d: 'Structured interviews, work samples, and scorecards to surface true signal quickly.'
    },
    {
      k: '04',
      t: 'Close',
      d: 'Offer strategy, references, and onboarding support so both sides win.'
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900">How it works</h2>
          <p className="mt-3 text-slate-600">A transparent, data‑driven process designed to reduce time‑to‑hire and increase quality.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="relative rounded-2xl border border-blue-100 p-6 bg-gradient-to-br from-white to-blue-50/60">
              <span className="absolute -top-3 left-6 inline-flex h-8 items-center rounded-full bg-blue-900 px-3 text-xs font-medium text-white shadow">{s.k}</span>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
