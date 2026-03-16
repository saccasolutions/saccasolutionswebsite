import Link from 'next/link';
import ChatTrigger from '@/components/ui/ChatTrigger';

export default function AIMessagingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-sm font-medium text-cyan-400">AI Messaging Agent</span>
            </div>
            <h1 className="heading-xl mb-6">
              Your AI Messaging Agent.
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Every Lead Gets a Response in Seconds.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mb-8">
              Leads go cold in minutes, not hours. While you&apos;re busy running your business, potential customers are messaging you on every channel—and expecting an instant reply. Our AI handles it all, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ChatTrigger mode="text" className="btn-primary">
                Try It Now — Chat With Our AI
              </ChatTrigger>
              <Link href="/contact" className="btn-secondary">
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
                Response Time Is <span className="text-red-400">Killing Your Conversions</span>
              </h2>
              <p className="text-xl text-muted">
                Your leads aren&apos;t waiting around. They&apos;re messaging the next business on the list.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">78%</div>
                <p className="text-muted">
                  of leads buy from whoever responds <span className="text-white font-medium">first</span>
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">47hrs</div>
                <p className="text-muted">
                  average business response time to a new lead
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">80%</div>
                <p className="text-muted">
                  drop in conversion if you don&apos;t respond within 5 minutes
                </p>
              </div>
            </div>

            <div className="card card-hover border-red-500/20 p-8">
              <p className="text-lg text-muted text-center">
                Web forms, Instagram DMs, Facebook messages, texts—they pile up. You see them hours later. By then, your lead already hired someone else. It&apos;s not that your service isn&apos;t good enough. <span className="text-white font-medium">You&apos;re just not fast enough.</span>
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
                An AI That Actually <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">Talks Like a Human</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Not canned responses. Not chatbot scripts. Real conversational AI that understands context, answers questions, and moves leads toward booking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                  <span className="text-2xl">&#9889;</span>
                </div>
                <h3 className="heading-md mb-3">Instant Responses</h3>
                <p className="text-muted">
                  Responds to webchat, SMS, Facebook, and Instagram DMs in seconds—not hours. Your leads never wait.
                </p>
              </div>

              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                  <span className="text-2xl">&#128172;</span>
                </div>
                <h3 className="heading-md mb-3">Natural Conversation</h3>
                <p className="text-muted">
                  No robotic scripts. Your AI sounds like your best employee—knowledgeable, helpful, and on-brand.
                </p>
              </div>

              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                  <span className="text-2xl">&#127919;</span>
                </div>
                <h3 className="heading-md mb-3">Lead Qualification</h3>
                <p className="text-muted">
                  Asks the right questions to qualify leads automatically. You only talk to people who are ready to buy.
                </p>
              </div>

              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <span className="text-2xl">&#128197;</span>
                </div>
                <h3 className="heading-md mb-3">Books Appointments</h3>
                <p className="text-muted">
                  Checks your calendar, offers available times, and books appointments—without you lifting a finger.
                </p>
              </div>

              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
                  <span className="text-2xl">&#128260;</span>
                </div>
                <h3 className="heading-md mb-3">Automated Follow-Up</h3>
                <p className="text-muted">
                  Leads go quiet? Your AI follows up at the right time with the right message. No lead slips through the cracks.
                </p>
              </div>

              <div className="card card-hover p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 mb-4">
                  <span className="text-2xl">&#129309;</span>
                </div>
                <h3 className="heading-md mb-3">Human Handoff</h3>
                <p className="text-muted">
                  Complex question? High-value deal? Your AI seamlessly hands off to your team with full conversation context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-success mb-4">Every Channel</span>
              <h2 className="heading-lg mb-6">
                One AI. <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">Every Conversation.</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Your customers reach out wherever it&apos;s convenient for them. Your AI is already there, ready to respond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="card card-hover p-6 text-center">
                <div className="text-4xl mb-4">&#128187;</div>
                <h3 className="font-semibold text-lg mb-1">Website Chat</h3>
                <p className="text-sm text-muted">Live on your site 24/7</p>
              </div>

              <div className="card card-hover p-6 text-center">
                <div className="text-4xl mb-4">&#128241;</div>
                <h3 className="font-semibold text-lg mb-1">SMS / Text</h3>
                <p className="text-sm text-muted">Meet leads on their phone</p>
              </div>

              <div className="card card-hover p-6 text-center">
                <div className="text-4xl mb-4">&#128266;</div>
                <h3 className="font-semibold text-lg mb-1">Facebook Messenger</h3>
                <p className="text-sm text-muted">Respond to every message</p>
              </div>

              <div className="card card-hover p-6 text-center">
                <div className="text-4xl mb-4">&#128247;</div>
                <h3 className="font-semibold text-lg mb-1">Instagram DMs</h3>
                <p className="text-sm text-muted">Turn DMs into deals</p>
              </div>

              <div className="card card-hover p-6 text-center">
                <div className="text-4xl mb-4">&#127758;</div>
                <h3 className="font-semibold text-lg mb-1">Google Business</h3>
                <p className="text-sm text-muted">Capture search traffic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-primary mb-4">How It Works</span>
              <h2 className="heading-lg mb-6">
                Up and Running in <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Days, Not Months</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="card card-hover p-8 border-cyan-500/30">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400">1</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">We Connect Your Channels &amp; Train the AI</h3>
                    <p className="text-lg text-muted">
                      We plug into your webchat, SMS, social media, and calendar. Then we train the AI on your business—your services, pricing, FAQs, and brand voice. It learns to talk like you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-8 border-indigo-500/30">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-400">2</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">It Engages Every Lead Instantly, 24/7</h3>
                    <p className="text-lg text-muted">
                      Someone messages you at 11 PM on a Saturday? Handled. Three leads come in at once during your busiest hour? All handled. Your AI never sleeps, never gets overwhelmed, and never forgets to follow up.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-8 border-purple-500/30">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">3</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-3">You Get Qualified Appointments on Your Calendar</h3>
                    <p className="text-lg text-muted">
                      Wake up to a calendar full of booked appointments with people who are actually ready to buy. No tire-kickers, no &quot;just browsing.&quot; Your AI already did the qualifying.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Right Now Section */}
      <section id="try-it" className="section-padding border-b border-zinc-800 bg-zinc-900/30">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-success mb-4">Live Demo</span>
            <h2 className="heading-lg mb-6">
              Try It <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">Right Now</span>
            </h2>
            <div className="card p-8 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5">
              <p className="text-xl text-zinc-300 mb-4">
                See the chat widget in the bottom corner?
              </p>
              <p className="text-lg text-muted mb-6">
                That&apos;s our AI messaging agent. Go ahead, ask it anything—about our services, pricing, how it works. This is <span className="text-white font-medium">exactly</span> what your customers will experience.
              </p>
              <ChatTrigger mode="text" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-medium">AI Agent is live — try it now</span>
              </ChatTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge-primary mb-4">Results</span>
              <h2 className="heading-lg mb-6">
                What Happens When You <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Never Miss a Lead</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Real numbers from businesses using our AI messaging agent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="card p-8 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text mb-2">100%</div>
                <p className="text-muted">lead response rate</p>
              </div>

              <div className="card p-8 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-2">3x</div>
                <p className="text-muted">increase in booked appointments</p>
              </div>

              <div className="card p-8 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">&lt;30s</div>
                <p className="text-muted">average response time</p>
              </div>

              <div className="card p-8 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text mb-2">24/7</div>
                <p className="text-muted">coverage, zero sick days</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-hover p-8">
                <span className="text-sm font-semibold text-emerald-400 mb-3 block">Transportation Company</span>
                <p className="text-lg text-zinc-300 mb-4">
                  Was missing 40% of inbound inquiries during peak hours. Now every message gets an instant response—nights, weekends, holidays.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">3x more booked jobs</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">Zero missed leads</span>
                </div>
              </div>

              <div className="card card-hover p-8">
                <span className="text-sm font-semibold text-emerald-400 mb-3 block">Home Services Business</span>
                <p className="text-lg text-zinc-300 mb-4">
                  Leads requesting quotes waited hours for a response. Now they get engaged within seconds and book on the spot.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">2.5x quote-to-booking rate</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">90% same-day contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="card border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 text-center p-12">
              <h2 className="heading-lg mb-4">
                Ready to Convert More Leads?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Every minute without an AI messaging agent is another lead going to your competitor. Let&apos;s change that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Book Your Free Demo
                </Link>
                <ChatTrigger mode="text" className="btn-secondary text-lg px-8 py-4">
                  Try the AI First
                </ChatTrigger>
              </div>
              <p className="text-sm text-muted mt-6">
                15-minute setup call. We&apos;ll show you exactly how it works for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
