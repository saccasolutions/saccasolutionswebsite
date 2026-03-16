import Link from 'next/link';
import ChatTrigger from '@/components/ui/ChatTrigger';

export default function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-sm font-medium text-cyan-400">AI Voice Receptionist</span>
            </div>
            <h1 className="heading-xl mb-6">
              Your AI Receptionist.
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Always On. Never Misses a Call.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mb-8">
              Every missed call is a lost customer. Every voicemail is a lead that&apos;s already moving on. Your AI receptionist answers instantly, qualifies the lead, and books the appointment&mdash;so you don&apos;t have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ChatTrigger mode="voice" className="btn-primary text-lg px-8 py-4">
                Try Our AI Receptionist Now
              </ChatTrigger>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-warning mb-4">The Problem</span>
              <h2 className="heading-lg mb-6">
                You&apos;re Losing Money <span className="text-red-400">Every Time the Phone Rings</span>
              </h2>
              <p className="text-xl text-muted">
                If you can&apos;t answer, they&apos;re calling your competitor next.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-hover p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">80%</div>
                <p className="text-lg text-muted">
                  of callers won&apos;t leave a voicemail. They hang up and call someone else.
                </p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">62%</div>
                <p className="text-lg text-muted">
                  of calls to small businesses go unanswered. That&apos;s more than half your leads&mdash;gone.
                </p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">$36K+</div>
                <p className="text-lg text-muted">
                  per year to hire a receptionist. And they still can&apos;t work nights, weekends, or holidays.
                </p>
              </div>
            </div>

            <div className="mt-8 card p-6 border-red-500/20">
              <p className="text-lg text-center text-zinc-300">
                After hours, during lunch, on the other line&mdash;every unanswered call is revenue walking out the door. And hiring staff to cover every hour isn&apos;t realistic for most businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-primary mb-4">What It Does</span>
              <h2 className="heading-lg mb-6">
                A Receptionist That <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">Never Sleeps</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Not a phone tree. Not a voicemail box. A real conversation powered by AI that handles your calls exactly the way you would.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Answers Every Call Instantly</h3>
                <p className="text-muted">
                  24/7/365. No hold times, no voicemail, no missed opportunities. Every single call gets picked up on the first ring.
                </p>
              </div>

              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Natural Conversation</h3>
                <p className="text-muted">
                  No &quot;press 1 for sales.&quot; Your AI receptionist has a real conversation, answers questions about your business, and sounds natural doing it.
                </p>
              </div>

              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Qualifies Your Leads</h3>
                <p className="text-muted">
                  Asks your custom qualifying questions so you know exactly who&apos;s worth your time before you ever call them back.
                </p>
              </div>

              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Books Appointments</h3>
                <p className="text-muted">
                  Checks your calendar availability and books appointments on the spot. No back-and-forth. No phone tag.
                </p>
              </div>

              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Transfers Urgent Calls</h3>
                <p className="text-muted">
                  Knows when a call is urgent and transfers it directly to you or your team. You stay in control of the things that matter.
                </p>
              </div>

              <div className="card card-hover p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Sends You a Summary</h3>
                <p className="text-muted">
                  After every call, you get a full summary&mdash;who called, what they needed, whether they booked, and what to follow up on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-success mb-4">How It Works</span>
              <h2 className="heading-lg mb-6">
                Live in <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">48 Hours</span>
              </h2>
              <p className="text-xl text-muted">
                No complicated setup. No long onboarding. Three steps and you&apos;re up and running.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card card-hover p-8 border-cyan-500/20">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                    <span className="text-2xl font-bold text-cyan-400">1</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">We Configure Your AI Receptionist</h3>
                    <p className="text-lg text-muted">
                      Tell us about your business, your services, your qualifying questions, and how you want calls handled. We build your custom AI receptionist around exactly how you operate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-8 border-indigo-500/20">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <span className="text-2xl font-bold text-indigo-400">2</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">Forward Your Calls or Get a New Number</h3>
                    <p className="text-lg text-muted">
                      Forward your existing business line when you can&apos;t answer, or use a dedicated number. Works with any phone system. No hardware required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-8 border-purple-500/20">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <span className="text-2xl font-bold text-purple-400">3</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">Start Getting Qualified Leads and Booked Appointments</h3>
                    <p className="text-lg text-muted">
                      Your AI receptionist goes live. Every call is answered, every lead is qualified, and appointments land directly on your calendar. You just show up and do the work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Right Now Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card p-10 md:p-16 gradient-border bg-gradient-to-br from-cyan-500/5 via-indigo-500/5 to-purple-500/5">
              <span className="badge-primary mb-6">Try It Yourself</span>
              <h2 className="heading-lg mb-6">
                Hear It In Action. <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">Right Now.</span>
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Don&apos;t take our word for it. Pick up your phone and call. This is the same AI that will work for your business, 24/7.
              </p>
              <ChatTrigger mode="voice" className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 cursor-pointer">
                <svg className="w-10 h-10 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Talk to Our AI Now
              </ChatTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-success mb-4">Proven Results</span>
              <h2 className="heading-lg mb-6">
                What Happens When You <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">Stop Missing Calls</span>
              </h2>
              <p className="text-xl text-muted">
                Real numbers from real businesses using AI to answer their phones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-hover p-8 border-emerald-500/20">
                <span className="text-sm font-semibold text-emerald-400 mb-4 block">Transportation & Logistics</span>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">100% call answer rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">3x increase in booked jobs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">Zero after-hours missed opportunities</span>
                  </div>
                </div>
                <p className="text-muted">
                  Was missing 40% of calls during peak hours. Now every call is answered and customers get instant responses instead of voicemail.
                </p>
              </div>

              <div className="card card-hover p-8 border-indigo-500/20">
                <span className="text-sm font-semibold text-indigo-400 mb-4 block">Medical Practice</span>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">80% reduction in scheduling time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">60% fewer no-shows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300 text-lg">Appointments booked in under 2 minutes</span>
                  </div>
                </div>
                <p className="text-muted">
                  Front desk was spending 4-5 hours daily on scheduling. Now patients book, reschedule, and confirm on their own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="card border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 via-indigo-500/5 to-purple-500/5 text-center p-10 md:p-16">
              <h2 className="heading-lg mb-4">
                Ready to Never Miss a Lead Again?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Your competitors are answering calls you&apos;re not. Every hour you wait is another customer you lose. Let&apos;s fix that today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ChatTrigger mode="voice" className="btn-primary text-lg px-8 py-4">
                  Try Our AI Receptionist
                </ChatTrigger>
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Book a Demo
                </Link>
              </div>
              <p className="text-sm text-muted mt-6">
                Try the AI receptionist yourself, or book a call and we&apos;ll show you exactly how it works for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
