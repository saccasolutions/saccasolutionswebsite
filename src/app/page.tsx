import Link from "next/link";
import ChatTrigger from "@/components/ui/ChatTrigger";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="container-lg">
          <div className="max-w-4xl">
            <div className="badge-primary mb-6">Conversational AI for Lead Generation</div>
            <h1 className="heading-xl mb-6">
              Never miss another lead.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                Your AI answers every call.
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              24/7 voice and messaging AI that captures, qualifies, and books
              leads while you focus on running your business. No more missed
              calls. No more cold leads. No more money left on the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ChatTrigger mode="voice" className="btn-primary text-base px-8 py-4 inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Try Our AI Receptionist
              </ChatTrigger>
              <Link href="#how-it-works" className="btn-secondary text-base px-8 py-4">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Pain Section */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="container-lg py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-lg mb-4">
              Missed calls are killing your business
            </h2>
            <p className="text-lg text-zinc-400">
              Every unanswered call is a customer choosing your competitor. And it&apos;s
              happening more than you think.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <p className="text-3xl font-bold text-red-400 mb-2">62%</p>
              <p className="text-zinc-400">
                of calls to small businesses go unanswered
              </p>
            </div>
            <div className="card p-6">
              <p className="text-3xl font-bold text-red-400 mb-2">78%</p>
              <p className="text-zinc-400">
                of customers buy from whoever responds first
              </p>
            </div>
            <div className="card p-6">
              <p className="text-3xl font-bold text-red-400 mb-2">5 min</p>
              <p className="text-zinc-400">
                is all it takes for a lead to go cold after reaching out
              </p>
            </div>
            <div className="card p-6">
              <p className="text-3xl font-bold text-red-400 mb-2">$1000s</p>
              <p className="text-zinc-400">
                lost every month to missed calls and slow follow-ups
              </p>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="flex items-start gap-3">
              <span className="text-red-400 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-zinc-400">Missed calls while you&apos;re on the job</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-zinc-400">Leads going cold from slow response times</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-zinc-400">Manual follow-ups eating your evenings</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-zinc-400">Admin work pulling you from revenue-generating tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Solutions Section */}
      <section id="how-it-works" className="section-padding">
        <div className="container-lg">
          <div className="max-w-3xl mb-16">
            <div className="badge-primary mb-4">Our Solutions</div>
            <h2 className="heading-lg mb-4">
              Two AI agents. Every lead captured.
            </h2>
            <p className="text-zinc-400 text-lg">
              Whether they call, text, or message you online—our AI handles it
              instantly, 24 hours a day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Receptionist */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-0" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-3">AI Receptionist</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  A voice AI that answers every call on the first ring. It greets
                  callers naturally, qualifies leads by asking the right questions,
                  and books appointments directly on your calendar—24/7, even
                  holidays and weekends.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Answers every call instantly
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Qualifies leads with custom questions
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Books appointments on your calendar
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sends summaries to your phone or CRM
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/ai-receptionist" className="btn-primary">
                    Learn More
                  </Link>
                  <ChatTrigger mode="voice" className="btn-secondary inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Try Our AI Voice
                  </ChatTrigger>
                </div>
              </div>
            </div>

            {/* AI Messaging Agent */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-0" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="heading-md mb-3">AI Messaging Agent</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Handles webchat, SMS, Facebook, Instagram, and Google Business
                  messages. Engages every visitor, answers questions, qualifies
                  leads, and follows up automatically—so no conversation falls
                  through the cracks.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Webchat, SMS, and social DMs
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Engages visitors in real time
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated follow-up sequences
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Qualifies and routes leads to your team
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/ai-messaging" className="btn-primary">
                    Learn More
                  </Link>
                  <ChatTrigger mode="text" className="btn-secondary inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat with Our AI
                  </ChatTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="section-padding bg-zinc-900/30 border-y border-zinc-800">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="badge-primary mb-4">Simple Setup</div>
            <h2 className="heading-lg mb-4">Up and running in days, not months</h2>
            <p className="text-zinc-400 text-lg">
              We handle everything. You just keep doing what you do best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">We Set Up Your AI Agents</h3>
              <p className="text-zinc-400">
                We configure your AI receptionist and messaging agent with your
                business info, services, FAQs, and booking calendar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">They Handle Calls, Texts &amp; Messages 24/7</h3>
              <p className="text-zinc-400">
                Your AI agents answer every call, respond to every message, and
                engage every website visitor—around the clock.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">You Get Qualified Leads &amp; Booked Appointments</h3>
              <p className="text-zinc-400">
                Wake up to a full calendar. Every lead is qualified, every
                appointment is confirmed, and you didn&apos;t lift a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Built for businesses that run on leads</h2>
            <p className="text-zinc-400 text-lg">
              If your business depends on answering calls and booking appointments,
              conversational AI will transform how you capture revenue.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Home Services", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { name: "Healthcare", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { name: "Beauty & Wellness", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { name: "Professional Services", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { name: "Real Estate", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "And More", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="px-4 py-6 rounded-xl bg-zinc-800/30 border border-zinc-800 text-center hover:border-zinc-700 transition-colors"
              >
                <svg className="w-6 h-6 text-zinc-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                </svg>
                <span className="text-sm text-zinc-300">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="section-padding bg-zinc-900/30 border-y border-zinc-800">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="badge-success mb-4">Proven Results</div>
            <h2 className="heading-lg mb-4">Real numbers from real businesses</h2>
            <p className="text-zinc-400 text-lg">
              Our clients stop losing leads and start growing. Here&apos;s what
              happens when AI handles your front line.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card p-8 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">
                100%
              </p>
              <p className="text-zinc-300 font-medium mb-1">Call Answer Rate</p>
              <p className="text-sm text-zinc-500">Every call picked up, every time</p>
            </div>
            <div className="card p-8 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                3x
              </p>
              <p className="text-zinc-300 font-medium mb-1">More Booked Jobs</p>
              <p className="text-sm text-zinc-500">Triple the appointments from the same leads</p>
            </div>
            <div className="card p-8 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                80%
              </p>
              <p className="text-zinc-300 font-medium mb-1">Less Scheduling Work</p>
              <p className="text-sm text-zinc-500">AI handles the back-and-forth</p>
            </div>
            <div className="card p-8 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">
                60%
              </p>
              <p className="text-zinc-300 font-medium mb-1">Fewer No-Shows</p>
              <p className="text-sm text-zinc-500">Automated confirmations and reminders</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/work" className="btn-secondary">
              See Full Case Studies
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <h2 className="heading-lg mb-6">
              Stop losing leads today
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
              Every missed call is a missed customer. Let our AI answer for you—starting now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ChatTrigger mode="voice" className="btn-primary text-base px-8 py-4 inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to Our AI Now
              </ChatTrigger>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
