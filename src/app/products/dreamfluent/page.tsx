import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DreamFluent - Wake Up Knowing What Your Dreams Meant | Sacca Solutions",
  description: "Stop forgetting your dreams and wondering what they meant. Get instant clarity, remember more, and spot the patterns your subconscious is showing you.",
};

export default function DreamFluentPage() {
  const outcomes = [
    {
      title: "Understand What It Meant",
      problem: "Wake up confused about that weird dream?",
      solution: "Get instant clarity on what your subconscious is telling you. No more wondering if it meant something.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Remember More Dreams",
      problem: "Can&apos;t remember your dreams 10 minutes after waking up?",
      solution: "Voice journaling captures everything before you forget. Build a dream library you can actually look back on.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "See the Patterns",
      problem: "Keep having similar dreams but don&apos;t know why?",
      solution: "Track dreams over time and spot the recurring themes your mind keeps showing you. Finally understand what&apos;s really going on.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Get Multiple Perspectives",
      problem: "One interpretation doesn&apos;t feel quite right?",
      solution: "View your dream through 8 different lenses. Psychological, spiritual, creative. Find the interpretation that clicks.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Have Better Conversations",
      problem: "Generic dream meanings from Google don&apos;t help?",
      solution: "AI asks you questions about YOUR life, YOUR feelings. Get interpretations that actually relate to you.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "See What Others Dream About",
      problem: "Curious if others have dreams like yours?",
      solution: "Explore global dream trends. Discover you&apos;re not the only one having that recurring dream about flying.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const interpretationLenses = [
    {
      name: "Tarot",
      description: "Archetypal symbols and spiritual meaning",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Astrology",
      description: "Cosmic patterns and celestial influence",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "I Ching",
      description: "Ancient wisdom and life guidance",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Numerology",
      description: "Number meanings and life path insights",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Creative",
      description: "Artistic inspiration and problem-solving",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Psychology",
      description: "Subconscious patterns and emotions",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Lucid Dreaming",
      description: "Dream control and awareness",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Shadow Work",
      description: "Hidden aspects of yourself",
      color: "from-zinc-500 to-slate-500",
    },
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "3 interpretations per month",
        "Voice journaling",
        "All 8 interpretation lenses",
        "Dream history",
        "Basic insights",
      ],
    },
    {
      name: "Unlimited",
      price: "$9.99",
      period: "per month",
      features: [
        "Unlimited interpretations",
        "Extended AI conversations",
        "Advanced pattern analysis",
        "Global trend insights",
        "Priority support",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              Available Now
            </div>
            <h1 className="heading-xl mb-6">
              Wake Up Knowing What Your Dreams Meant
            </h1>
            <p className="heading-md text-purple-400 mb-8">
              Stop forgetting. Start understanding.
            </p>
            <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
              You wake up from a vivid dream. 10 minutes later, it&apos;s gone. Or you remember it but have no idea what it meant. You Google it and get generic answers that don&apos;t help. Sound familiar?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="#pricing" className="btn-primary px-8 py-4 text-base">
                Start Free Today
              </Link>
              <Link href="#outcomes" className="btn-secondary px-8 py-4 text-base">
                See What You Get
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Actually Changes</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Not dream dictionaries. Real understanding of what your subconscious is telling you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  {outcome.icon}
                </div>
                <h3 className="heading-md mb-3">{outcome.title}</h3>
                <p className="text-sm text-amber-400 mb-2 font-medium">{outcome.problem}</p>
                <p className="text-muted">{outcome.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interpretation Lenses Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">8 Ways to Understand Your Dream</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Same dream. Different perspectives. Find the interpretation that resonates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interpretationLenses.map((lens, index) => (
              <div
                key={index}
                className="card card-hover group"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${lens.color} mb-4`} />
                <h3 className="heading-md mb-2">{lens.name}</h3>
                <p className="text-sm text-muted">{lens.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How It Works</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              From confused to clear in 3 steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="heading-md mb-2">Capture It Before You Forget</h3>
                <p className="text-muted">
                  Wake up, tap record, speak your dream. No typing. No forgetting half of it. The AI transcribes everything.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="heading-md mb-2">Pick Your Lens</h3>
                <p className="text-muted">
                  Want psychological insight? Spiritual meaning? Creative inspiration? Choose how you want to explore it.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="heading-md mb-2">Have a Real Conversation</h3>
                <p className="text-muted">
                  AI asks about YOUR life, YOUR feelings, YOUR experiences. Get interpretations that actually make sense for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Start Free. Upgrade When Ready.</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Try it free. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`card ${
                  tier.popular
                    ? "border-purple-500/50 bg-purple-500/5 relative"
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="badge-primary">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="heading-md mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-muted ml-2">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    tier.popular ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  {tier.name === "Free" ? "Start Free" : "Upgrade Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="card text-center max-w-3xl mx-auto border-purple-500/20">
            <h2 className="heading-lg mb-4">
              Stop Wondering. Start Understanding.
            </h2>
            <p className="text-xl text-muted mb-8">
              Your dreams are trying to tell you something. Join thousands who&apos;ve discovered what their subconscious has been showing them all along.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Start Free Today
              </button>
              <Link href="/products" className="btn-secondary px-8 py-4">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
