import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our AI Products | Sacca Solutions",
  description: "Transform your dating life, understand your dreams, and make photos beautiful. Real results, powered by AI.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "BetterDatingAI",
      slug: "betterdatingai",
      outcome: "Get More Dates",
      description: "Stop swiping endlessly with zero matches. Get professional photos that stand out, know exactly what to say, and finally meet people you&apos;re excited about.",
      results: ["More matches with people you like", "Confidence in every conversation", "Dates that actually happen"],
      status: "Live on iOS & Android",
      badge: "badge-success",
      accentColor: "indigo",
    },
    {
      name: "DreamFluent",
      slug: "dreamfluent",
      outcome: "Understand Your Dreams",
      description: "Wake up confused about what your dreams mean? Get instant clarity on what your subconscious is telling you and track patterns over time.",
      results: ["Know what your dreams meant", "Remember dreams better", "Spot patterns you&apos;ve been missing"],
      status: "Available Now",
      badge: "badge-primary",
      accentColor: "purple",
    },
    {
      name: "PhotoHut",
      slug: "photohut",
      outcome: "Photos That Look Like Film",
      description: "Your digital photos look too perfect. Get that authentic analog look without expensive cameras or darkroom skills.",
      results: ["Film-style photos in seconds", "No editing skills needed", "That analog look you love"],
      status: "Coming Soon",
      badge: "badge-warning",
      accentColor: "pink",
    },
  ];

  const getAccentClasses = (color: string) => {
    const colors = {
      indigo: {
        border: "hover:border-indigo-500/50",
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        gradient: "from-transparent to-indigo-500/5",
      },
      purple: {
        border: "hover:border-purple-500/50",
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        gradient: "from-transparent to-purple-500/5",
      },
      pink: {
        border: "hover:border-pink-500/50",
        text: "text-pink-400",
        bg: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
        gradient: "from-transparent to-pink-500/5",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              AI That Delivers Real Results
            </h1>
            <p className="heading-md text-muted mb-12">
              We don&apos;t build features. We build outcomes. Each product solves a real problem and delivers measurable results in your life.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.map((product) => {
              const accent = getAccentClasses(product.accentColor);
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={`card card-hover group ${accent.border} transition-all duration-300`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className={`inline-block px-3 py-1 text-xs font-medium ${accent.text} ${accent.bg} border ${accent.borderColor} rounded-full mb-4`}>
                        {product.status}
                      </div>
                      <h3 className={`heading-lg mb-2 group-hover:${accent.text} transition-colors`}>
                        {product.name}
                      </h3>
                      <p className={`text-xl font-semibold ${accent.text} mb-4`}>
                        {product.outcome}
                      </p>
                      <p className="text-muted mb-6">{product.description}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="space-y-3 mb-6">
                        {product.results.map((result, index) => (
                          <div key={index} className="flex items-start text-sm text-zinc-300">
                            <svg
                              className={`w-5 h-5 mr-2 ${accent.text} flex-shrink-0 mt-0.5`}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </div>
                        ))}
                      </div>

                      <div className={`flex items-center ${accent.text} font-medium group-hover:gap-2 transition-all`}>
                        Learn more
                        <svg
                          className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-indigo-500/5">
        <div className="container-lg">
          <div className="card text-center max-w-3xl mx-auto border-indigo-500/20">
            <h2 className="heading-lg mb-4">
              Ready to see results?
            </h2>
            <p className="text-muted mb-8">
              Stop buying tools you don&apos;t use. Get products that actually change things.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
