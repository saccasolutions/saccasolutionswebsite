import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <h1 className="heading-xl mb-6">
              Built by Someone Who Actually <span className="text-indigo-400">Builds Things</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted">
              No team. No outsourcing. Just one person who designs, codes, and ships everything.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <h2 className="heading-lg mb-8">
              Why This Exists
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 mb-12">
              <p>
                Most AI consultants talk about what&apos;s possible. I build what actually works.
              </p>

              <p>
                I&apos;m Rob DeMaria. I started Sacca Solutions because I was tired of seeing businesses
                get sold on AI hype while getting stuck with systems that don&apos;t deliver. Too much
                strategy deck, not enough working code.
              </p>

              <p>
                My background is all over the place—filmmaker training, MBA, years in media—but it gave me
                something useful: I understand how to communicate complex ideas clearly, and I know how
                businesses actually operate. Then I taught myself to code and build AI systems.
              </p>

              <p>
                Now I do everything myself. Design, development, integration, automation, deployment.
                Not because I&apos;m trying to be a hero, but because it&apos;s the only way to guarantee
                the work actually gets done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <h2 className="heading-lg mb-8">
              How I Work
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 mb-12">
              <p>
                When you work with me, you&apos;re working with the person who will actually build your system.
                No account managers. No handoffs. No lost context between &quot;the strategist&quot; and &quot;the developer.&quot;
              </p>

              <p>
                I care about one thing: does it work? Not &quot;does it use the latest model&quot; or &quot;does it sound
                impressive in a meeting.&quot; Does it solve the problem you hired me to solve?
              </p>

              <p>
                That means I pick the right tools for the job, not the trendy ones. Sometimes that&apos;s
                cutting-edge AI. Sometimes it&apos;s a well-designed workflow and a Supabase backend.
                I don&apos;t care about my portfolio as much as I care about your results.
              </p>
            </div>

            <div className="card bg-zinc-900 border border-zinc-800 p-8">
              <h3 className="heading-md mb-6 text-indigo-400">What I Actually Do</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Build conversational voice AI that answers calls 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Design AI messaging agents for SMS, webchat, and social</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Create lead generation automation that converts around the clock</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Set up CRM integrations and automated follow-up workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Build appointment booking and lead qualification systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▸</span>
                  <span>Integrate everything into your existing operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-lg">
          <div className="max-w-4xl">
            <h2 className="heading-lg mb-8">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">Speed</h3>
                <p className="text-zinc-300">
                  No committee meetings. No approval chains. I make decisions and ship fast.
                </p>
              </div>

              <div className="card bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">Clarity</h3>
                <p className="text-zinc-300">
                  You&apos;ll always understand what I&apos;m building and why. No jargon walls.
                </p>
              </div>

              <div className="card bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">Accountability</h3>
                <p className="text-zinc-300">
                  One person owns the whole project. If something breaks, you know who to call.
                </p>
              </div>

              <div className="card bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">Systems That Work</h3>
                <p className="text-zinc-300">
                  Not prototypes. Not proofs of concept. Production-ready tools that solve real problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-zinc-900/50">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Let&apos;s Build Something That <span className="text-indigo-400">Actually Works</span>
            </h2>
            <p className="text-xl text-muted mb-8">
              If you need AI automation built by someone who&apos;ll do the work themselves,
              let&apos;s talk.
            </p>
            <Link href="/contact" className="btn-primary">
              Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
