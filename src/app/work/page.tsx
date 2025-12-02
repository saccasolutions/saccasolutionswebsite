import Link from 'next/link';

interface CaseStudy {
  id: string;
  industry: string;
  problem: string;
  outcome: string;
  metrics: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'transportation',
    industry: 'Transportation & Logistics',
    problem: 'Missing 40% of inbound calls during peak hours. Customers calling competitors when they couldn&apos;t get through.',
    outcome: 'Now books appointments and quotes 24/7. Never misses a lead, even at 2am.',
    metrics: [
      '100% call answer rate',
      '3x increase in booked jobs',
      'Zero after-hours missed opportunities',
      'Customers get instant responses, not voicemail',
    ],
  },
  {
    id: 'medical-practice',
    industry: 'Medical Practice',
    problem: 'Front desk staff spending 4-5 hours daily just scheduling appointments. Phone lines constantly busy. Patients frustrated.',
    outcome: 'Patients now book, reschedule, and confirm appointments themselves. Staff focuses on in-office patient care.',
    metrics: [
      '80% reduction in scheduling time',
      '60% fewer no-shows with automated reminders',
      'Patients book appointments in under 2 minutes',
      'Staff freed up for patient-facing work',
    ],
  },
  {
    id: 'home-services',
    industry: 'Home Services',
    problem: 'Leads requesting quotes would wait hours or days for a response. By then, they&apos;d already hired someone else.',
    outcome: 'Quote requests get responses within minutes. Leads stay hot and convert while they&apos;re still interested.',
    metrics: [
      'Average quote time: 8 minutes (was 4+ hours)',
      '2.5x increase in quote-to-booking rate',
      '90% of leads contacted same day',
      'Competitors left wondering what happened',
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="section-padding">
        <div className="container-lg">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="heading-xl mb-6">
              Real Businesses. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Real Results.</span>
            </h1>
            <p className="heading-md text-muted">
              These aren&apos;t features. These are transformations. See how businesses stopped losing leads and started growing.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card card-hover">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-emerald-400">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="heading-lg mb-4">Case Study #{index + 1}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-indigo-400">The Problem</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">{study.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">The Outcome</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">{study.outcome}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 text-emerald-400">The Numbers</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-zinc-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <div className="card text-center max-w-3xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 border-indigo-500/20">
              <h2 className="heading-lg mb-4">
                Your Turn
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                You&apos;re losing leads right now. While you&apos;re busy, while you&apos;re closed, while you&apos;re on the phone with someone else. Let&apos;s fix that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Fix My Lead Problem
                </Link>
                <a href="mailto:robert@saccasolutions.com" className="btn-secondary">
                  Email Robert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
