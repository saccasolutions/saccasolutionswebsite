import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetterDatingAI - Get More Dates with People You Actually Like | Sacca Solutions",
  description: "Stop getting zero matches. Look your best, know what to say, and get dates with people you&apos;re excited about. Built for men who are done guessing.",
};

export default function BetterDatingAIPage() {
  const outcomes = [
    {
      title: "Get More Matches",
      problem: "Swiping endlessly with zero results?",
      solution: "Photos that make people stop scrolling. Your profile becomes the one they tell their friends about.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Look Your Best",
      problem: "Don&apos;t have professional photos?",
      solution: "AI-generated photos that show you at your most confident. No awkward photoshoot required.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Know What to Say",
      problem: "Conversations go nowhere?",
      solution: "Real-time coaching that helps you build connection and actually get the date. Never run out of things to say.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Stop Guessing What Works",
      problem: "No idea why your profile isn&apos;t working?",
      solution: "Instant analysis that tells you exactly what&apos;s wrong and how to fix it. See results in days, not months.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Write a Bio That Works",
      problem: "Your bio is boring and generic?",
      solution: "A bio that shows your personality and attracts the right people. Written specifically for you, not copy-pasted templates.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Get Dates That Actually Happen",
      problem: "Matches that never turn into dates?",
      solution: "Strategic coaching on when to ask, how to ask, and how to set up dates that actually happen. No more endless texting.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      price: "$29.99",
      period: "per month",
      features: [
        "Photos that actually get matches",
        "Unlimited conversation coaching",
        "Profile fixes that work",
        "Bios written for you",
        "Cancel anytime",
      ],
    },
    {
      name: "Annual",
      price: "$199.99",
      period: "per year",
      savings: "Save 44%",
      features: [
        "Everything in Monthly",
        "Priority response times",
        "Advanced strategy coaching",
        "Photo A/B testing",
        "2 months free",
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
              Available on iOS & Android
            </div>
            <h1 className="heading-xl mb-6">
              Get More Dates with People You Actually Like
            </h1>
            <p className="heading-md text-indigo-400 mb-8">
              Stop swiping. Start meeting.
            </p>
            <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
              You&apos;re getting zero matches. Your conversations go nowhere. You&apos;re starting to think dating apps don&apos;t work for you. Here&apos;s the truth: your profile is killing your chances. We fix that.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="btn-primary px-8 py-4 text-base">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </button>
              <button className="btn-secondary px-8 py-4 text-base">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What You Actually Get</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Not features. Results. Here&apos;s what changes in your dating life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
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

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-indigo-500/5">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Get Results in 4 Steps</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Transform your dating profile today. See results this week.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="heading-md mb-2">Tell Us About You</h3>
                <p className="text-muted">
                  Quick personality assessment. We figure out what makes you unique and who you&apos;re looking for.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="heading-md mb-2">Get Photos That Stand Out</h3>
                <p className="text-muted">
                  AI creates professional photos that show you at your best. No awkward photoshoot. No expensive photographer.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="heading-md mb-2">Fix Your Profile</h3>
                <p className="text-muted">
                  Upload a screenshot. Get instant feedback on what&apos;s wrong and how to fix it. New bio written for you in minutes.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="heading-md mb-2">Get Coaching When You Need It</h3>
                <p className="text-muted">
                  Match with someone? Ask the AI what to say next. Get real-time advice that keeps conversations going and leads to dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">One Coffee. More Dates.</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Less than a single first date. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`card ${
                  plan.popular
                    ? "border-indigo-500/50 bg-indigo-500/5 relative"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="badge-primary">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.savings && (
                  <div className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                    {plan.savings}
                  </div>
                )}
                <h3 className="heading-md mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0"
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
                    plan.popular ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  Start Getting Matches
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-indigo-500/5">
        <div className="container-lg">
          <div className="card text-center max-w-3xl mx-auto border-indigo-500/20">
            <h2 className="heading-lg mb-4">
              Ready to Stop Guessing and Start Dating?
            </h2>
            <p className="text-xl text-muted mb-8">
              Thousands of guys have already upgraded their dating game. Photos that work. Conversations that flow. Dates that actually happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Download Now
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
