export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build your dream team — or your dream career</h2>
          <p className="mt-3 text-blue-100 max-w-xl">Share what you’re hiring for or the role you want. We’ll reply within one business day with next steps.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="mailto:hello@talentnavy.com" className="inline-flex justify-center rounded-md bg-white text-blue-900 px-5 py-3 hover:bg-blue-50">Email Us</a>
            <a href="#" className="inline-flex justify-center rounded-md border border-white/30 px-5 py-3 hover:bg-white/10">Book a 20‑min Call</a>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl p-6 text-blue-900 shadow-lg">
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Alex Johnson" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="alex@company.com" />
            </div>
            <div>
              <label className="text-sm text-slate-600">I’m a</label>
              <select className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Company hiring</option>
                <option>Jobseeker</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Tell us about the role or your goals" />
            </div>
            <button className="mt-2 inline-flex justify-center rounded-md bg-blue-900 text-white px-5 py-3 hover:bg-blue-800">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
