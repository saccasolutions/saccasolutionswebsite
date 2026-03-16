import Link from 'next/link';
import ChatTrigger from '@/components/ui/ChatTrigger';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="text-sm font-medium text-indigo-400">Conversational AI for Lead Generation</span>
            </div>
            <h1 className="heading-xl mb-6">
              AI That Answers, Engages, and
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
                Converts Your Leads 24/7.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mb-8">
              Two powerful AI systems that work together to make sure every lead gets an instant, human-like response&mdash;whether they call your business or message you online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Strategy Call
              </Link>
              <ChatTrigger mode="voice" className="btn-secondary">
                Try Our AI Now
              </ChatTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-primary mb-4">Our Solutions</span>
              <h2 className="heading-lg mb-6">
                Two AI Systems. <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 text-transparent bg-clip-text">Every Lead Covered.</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Your customers reach out by phone and by message. We built an AI agent for each&mdash;so no lead ever goes unanswered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Receptionist Card */}
              <Link href="/ai-receptionist" className="card card-hover border-emerald-500/30 p-8 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="heading-md mb-3 group-hover:text-emerald-400 transition-colors">AI Receptionist</h3>
                <span className="text-sm text-emerald-400 font-medium block mb-4">Voice AI for Inbound Calls</span>
                <p className="text-lg text-muted mb-6">
                  A conversational voice AI that answers your phone 24/7, qualifies callers, books appointments, and routes urgent calls&mdash;so you never miss another lead.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">24/7 call answering</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Lead qualification</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Appointment booking</span>
                </div>
                <div className="flex items-center text-emerald-400 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* AI Messaging Card */}
              <Link href="/ai-messaging" className="card card-hover border-indigo-500/30 p-8 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="heading-md mb-3 group-hover:text-indigo-400 transition-colors">AI Messaging Agent</h3>
                <span className="text-sm text-indigo-400 font-medium block mb-4">SMS, Webchat &amp; Social DMs</span>
                <p className="text-lg text-muted mb-6">
                  An AI agent that instantly responds to texts, website chats, and social media DMs&mdash;engaging leads in natural conversation, answering questions, and booking appointments.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Instant text responses</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Webchat &amp; social DMs</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Automated follow-up</span>
                </div>
                <div className="flex items-center text-indigo-400 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
                      You can&apos;t answer every call. By the time you call back, they&apos;ve already found someone else. That&apos;s $500, $1,000, $5,000+ gone&mdash;every single time.
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

      {/* Solution / Outcomes Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-success mb-4">The Solution</span>
              <h2 className="heading-lg mb-6">
                What Your Business Looks Like <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 text-transparent bg-clip-text">With Conversational AI</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Voice AI on the phones. Messaging AI on text, chat, and social. Together, they capture and convert every lead that comes your way.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card card-hover border-emerald-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                      <span className="text-3xl">💰</span>
                    </div>
                    <h3 className="heading-md mb-2">Every Call Answered</h3>
                    <span className="text-sm text-emerald-400 font-medium">AI Receptionist On Duty 24/7</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Someone calls at 2 AM? Your AI receptionist picks up, qualifies the caller, answers their questions, and books an appointment on your calendar. No voicemail. No missed opportunity. Every call handled like your best employee is always on the clock.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">24/7 live answering</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Caller qualification</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Instant appointment booking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-indigo-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                      <span className="text-3xl">💬</span>
                    </div>
                    <h3 className="heading-md mb-2">Every Message Replied</h3>
                    <span className="text-sm text-indigo-400 font-medium">AI Messaging Across All Channels</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Text, webchat, Instagram DM, Facebook Messenger&mdash;wherever your leads reach out, they get an instant, intelligent reply. The AI handles questions, shares pricing, and guides them to book. No more leads going cold because you were busy.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">SMS &amp; webchat</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Social media DMs</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Natural conversations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-purple-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                      <span className="text-3xl">🔥</span>
                    </div>
                    <h3 className="heading-md mb-2">Leads Don&apos;t Go Cold</h3>
                    <span className="text-sm text-purple-400 font-medium">Automated Follow-Up Sequences</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Every lead gets followed up with at exactly the right time via voice and text. Not too soon, not too late. They&apos;re nurtured, educated, and ready to buy by the time you talk to them. No more &quot;just checking in&quot; messages you never send.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Timely follow-ups</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Voice + text nurturing</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Higher conversion</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-emerald-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                      <span className="text-3xl">📅</span>
                    </div>
                    <h3 className="heading-md mb-2">Wake Up to a Full Calendar</h3>
                    <span className="text-sm text-emerald-400 font-medium">Appointments Book Themselves</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      No more phone tag. No more &quot;let me check my calendar and get back to you.&quot; Whether leads call or text, the AI books them directly into your schedule. Automatic confirmations and reminders reduce no-shows so your calendar stays full.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Self-service booking</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Auto confirmations</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Fewer no-shows</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-indigo-500/30">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="heading-md mb-2">Scale Without Hiring</h3>
                    <span className="text-sm text-indigo-400 font-medium">Growth Without Growing Pains</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted mb-4">
                      Handle 10x more leads without hiring a receptionist, sales team, or assistant. Your voice and messaging AI work 24/7/365 and never call in sick. More revenue, same overhead.
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
                Let&apos;s talk about how conversational AI can capture and convert more leads for your business. No pressure, no sales pitch&mdash;just a conversation about where you&apos;re losing money and how to fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Book Your Free Strategy Call
                </Link>
                <ChatTrigger mode="voice" className="btn-secondary text-lg px-8 py-4">
                  Try Our AI Now
                </ChatTrigger>
              </div>
              <p className="text-sm text-muted mt-6">
                30-minute call. We&apos;ll identify your biggest leak and give you a plan to fix it&mdash;whether you work with us or not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
