import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="container-lg">
          <div className="max-w-4xl">
            <h1 className="heading-xl mb-6">
              Stop losing leads.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Start closing them.
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              We build AI systems that answer your phone, book your appointments,
              and follow up with every lead—so you can focus on the work that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get More Customers
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="container-lg py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">Sound familiar?</h2>
            <div className="space-y-4 text-lg text-zinc-400">
              <p>→ You miss calls because you&apos;re busy actually doing the work</p>
              <p>→ Leads go cold because nobody followed up in time</p>
              <p>→ You&apos;re stuck doing the same admin tasks over and over</p>
              <p>→ You know you&apos;re leaving money on the table, but there&apos;s only one of you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - What We Do */}
      <section id="how-it-works" className="section-padding">
        <div className="container-lg">
          <div className="max-w-3xl mb-16">
            <h2 className="heading-lg mb-4">Here&apos;s what changes</h2>
            <p className="text-zinc-400 text-lg">
              We install AI systems that handle the busywork, so every lead
              gets a response and every opportunity gets captured.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Never miss a lead</h3>
              <p className="text-zinc-400">
                Every call, text, and message gets answered instantly—even at 2am.
                Your leads get help when they need it, not when you&apos;re available.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Book while you sleep</h3>
              <p className="text-zinc-400">
                Wake up to a calendar full of qualified appointments.
                The AI handles scheduling, confirmations, and reminders automatically.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Close more deals</h3>
              <p className="text-zinc-400">
                No lead falls through the cracks. Automated follow-ups keep
                prospects warm until they&apos;re ready to buy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-zinc-900/30 border-y border-zinc-800">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Built for service businesses</h2>
            <p className="text-zinc-400 text-lg">
              If your business runs on appointments, quotes, or bookings—this is for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Home Services",
              "Medical Offices",
              "Transportation",
              "Contractors",
              "Hospitality",
              "Local Services",
            ].map((industry) => (
              <div
                key={industry}
                className="px-4 py-6 rounded-xl bg-zinc-800/30 border border-zinc-800 text-center"
              >
                <span className="text-sm text-zinc-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-3xl mb-16">
            <div className="badge-primary mb-4">Our Products</div>
            <h2 className="heading-lg mb-4">AI apps for real problems</h2>
            <p className="text-zinc-400 text-lg">
              We also build consumer AI products. Here&apos;s what we&apos;ve shipped.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* BetterDatingAI */}
            <Link href="/products/betterdatingai" className="card-hover group overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">BetterDatingAI</h3>
                <p className="text-zinc-400">Get more matches and better dates with AI-powered photos and profile coaching.</p>
              </div>
            </Link>

            {/* DreamFluent */}
            <Link href="/products/dreamfluent" className="card-hover group overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">DreamFluent</h3>
                <p className="text-zinc-400">Understand what your dreams mean with AI-powered interpretation and journaling.</p>
              </div>
            </Link>

            {/* PhotoHut */}
            <Link href="/products/photohut" className="card-hover group overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">PhotoHut</h3>
                <p className="text-zinc-400">Make your photos look like they were shot on film. Classic aesthetics, zero effort.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-zinc-800">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Ready to stop losing leads?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Let&apos;s talk about what&apos;s costing you customers—and how to fix it.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
