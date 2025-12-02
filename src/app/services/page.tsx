import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="text-sm font-medium text-indigo-400">Stop Losing Money</span>
            </div>
            <h1 className="heading-xl mb-6">
              You&apos;re Losing Leads While You Sleep.
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
                We&apos;ll Capture Them All.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mb-8">
              Every missed call is money walking out the door. Every delayed response is a customer choosing your competitor. Every manual task is time you&apos;re not spending growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Strategy Call
              </Link>
              <Link href="#problem" className="btn-secondary">
                See What You&apos;re Losing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-primary mb-4">The Real Cost</span>
              <h2 className="heading-lg mb-6">
                What&apos;s Actually <span className="text-red-400">Costing You Money</span> Right Now
              </h2>
              <p className="text-xl text-muted">
                Most businesses don&apos;t realize how much revenue they&apos;re leaving on the table every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-hover border-red-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="heading-md mb-2 text-red-400">Missed Calls = Missed Money</h3>
                    <p className="text-muted">
                      You can&apos;t answer every call. By the time you call back, they&apos;ve already found someone else. That&apos;s $500, $1,000, $5,000+ gone—every single time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-red-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="heading-md mb-2 text-red-400">Slow Response = Lost Deals</h3>
                    <p className="text-muted">
                      Research shows if you don&apos;t respond within 5 minutes, your chance of converting drops by 80%. Your competitors aren&apos;t waiting. Why should your customers?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-red-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🔄</div>
                  <div>
                    <h3 className="heading-md mb-2 text-red-400">Manual Follow-Ups That Never Happen</h3>
                    <p className="text-muted">
                      You meant to follow up with that lead. But you got busy. Now it&apos;s been 3 days and they went cold. Multiply that by every lead you&apos;ve ever gotten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-red-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">📋</div>
                  <div>
                    <h3 className="heading-md mb-2 text-red-400">Admin Work Stealing Your Day</h3>
                    <p className="text-muted">
                      You&apos;re spending hours on quotes, booking appointments, answering the same questions. That&apos;s not billable work. That&apos;s you trading dollars for pennies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-success mb-4">The Solution</span>
              <h2 className="heading-lg mb-6">
                What Your Life Looks Like <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 text-transparent bg-clip-text">After</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Imagine waking up to a calendar full of qualified appointments, leads that are already nurtured, and all the busy work handled. That&apos;s what we build for you.
              </p>
            </div>

            <div className="space-y-8">
              {/* Outcome 1 */}
              <div className="card card-hover border-emerald-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                      <span className="text-3xl">💰</span>
                    </div>
                    <h3 className="heading-md mb-2">Never Miss Another Lead</h3>
                    <span className="text-sm text-emerald-400 font-medium">Capture Every Opportunity</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Someone calls at 2 AM? They get an instant text with your info and a booking link. DM on Instagram? Answered immediately. Website inquiry? Responded to in seconds. You&apos;re not losing leads anymore—you&apos;re capturing ALL of them.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">24/7 instant response</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Every channel covered</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Zero manual work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 2 */}
              <div className="card card-hover border-indigo-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                      <span className="text-3xl">📅</span>
                    </div>
                    <h3 className="heading-md mb-2">Wake Up to a Full Calendar</h3>
                    <span className="text-sm text-indigo-400 font-medium">Appointments Book Themselves</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      No more phone tag. No more &quot;let me check my calendar and get back to you.&quot; Leads book themselves, get automatic confirmations, and reminders are sent so they actually show up. Your calendar stays full without you lifting a finger.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Self-service booking</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Auto confirmations</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Fewer no-shows</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 3 */}
              <div className="card card-hover border-purple-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                      <span className="text-3xl">🔥</span>
                    </div>
                    <h3 className="heading-md mb-2">Leads Don&apos;t Go Cold</h3>
                    <span className="text-sm text-purple-400 font-medium">Automatic Follow-Up System</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Every lead gets followed up with at exactly the right time. Not too soon, not too late. They&apos;re nurtured, educated, and ready to buy by the time you talk to them. No more &quot;just checking in&quot; messages you never send.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Timely follow-ups</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Lead nurturing</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Higher conversion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 4 */}
              <div className="card card-hover border-emerald-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h3 className="heading-md mb-2">Quotes Sent in Minutes, Not Days</h3>
                    <span className="text-sm text-emerald-400 font-medium">Speed Wins Deals</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      While your competitors are still &quot;working on the estimate,&quot; your prospect already has their quote, pricing options, and a link to get started. Speed matters. You&apos;re not making customers wait anymore.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Instant quotes</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Faster close rates</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Beat competition</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 5 */}
              <div className="card card-hover border-indigo-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="heading-md mb-2">Stop Doing Repetitive Work</h3>
                    <span className="text-sm text-indigo-400 font-medium">Focus on What Makes Money</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      The same questions answered automatically. Intake forms filled out before you even talk. Data entered into your CRM without you touching it. You&apos;re finally spending time on revenue-generating work, not admin tasks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">More billable hours</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Less admin work</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Better work-life balance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome 6 */}
              <div className="card card-hover border-purple-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="heading-md mb-2">Scale Without Hiring</h3>
                    <span className="text-sm text-purple-400 font-medium">Growth Without Growing Pains</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Handle 10x more leads without hiring a receptionist, sales team, or assistant. Your automation works 24/7/365 and never calls in sick. More revenue, same overhead.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">No hiring costs</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Unlimited capacity</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Consistent experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-primary mb-4">Who This Is For</span>
              <h2 className="heading-lg mb-6">
                Built for Service Businesses That Are <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Tired of Leaving Money on the Table</span>
              </h2>
              <p className="text-xl text-muted">
                If you&apos;re getting leads but struggling to convert them all, we can help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card card-hover text-center">
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="font-semibold text-lg mb-2">Home Services</h3>
                <p className="text-sm text-muted">Contractors, HVAC, plumbing, electrical, roofing, landscaping</p>
              </div>

              <div className="card card-hover text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm text-muted">Medical practices, dental offices, mental health providers, clinics</p>
              </div>

              <div className="card card-hover text-center">
                <div className="text-4xl mb-4">💇</div>
                <h3 className="font-semibold text-lg mb-2">Beauty & Wellness</h3>
                <p className="text-sm text-muted">Salons, spas, fitness studios, wellness centers</p>
              </div>

              <div className="card card-hover text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="font-semibold text-lg mb-2">Professional Services</h3>
                <p className="text-sm text-muted">Legal, accounting, consulting, real estate</p>
              </div>

              <div className="card card-hover text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                <p className="text-sm text-muted">Auto repair, detailing, towing, car rentals</p>
              </div>

              <div className="card card-hover text-center border-indigo-500/50">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold text-lg mb-2">Your Industry</h3>
                <p className="text-sm text-indigo-400">If you get leads, we can help you convert more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="card border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 text-center">
              <h2 className="heading-lg mb-4">
                Ready to Stop Losing Leads?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Let&apos;s talk about what automation could do for your business. No pressure, no sales pitch. Just a conversation about where you&apos;re losing money and how to fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Book Your Free Strategy Call
                </Link>
              </div>
              <p className="text-sm text-muted mt-6">
                30-minute call. We&apos;ll identify your biggest leak and give you a plan to fix it—whether you work with us or not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
