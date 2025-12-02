import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoHut - Make Your Photos Look Like Film | Sacca Solutions",
  description: "Your digital photos look too perfect. Get that authentic analog look in seconds. No editing skills needed. Coming soon.",
};

export default function PhotoHutPage() {
  const outcomes = [
    {
      title: "Get That Film Look",
      problem: "Digital photos look too clean and perfect?",
      solution: "Authentic film aesthetics in seconds. Warm tones, natural grain, subtle imperfections that make photos feel real.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "No Editing Skills Needed",
      problem: "Spend hours in Lightroom and still can&apos;t get it right?",
      solution: "Choose a film stock. Done. Professional results without learning complicated editing software.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Looks Like Real Film",
      problem: "Tired of fake Instagram filters?",
      solution: "Real grain from actual film scans. Color science from legendary film stocks. It looks authentic because it is.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Process Everything Instantly",
      problem: "Hate waiting for photos to upload and process?",
      solution: "Everything happens in your browser. No uploading. No waiting. Complete privacy.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Every Photo Looks Better",
      problem: "Some photos just don&apos;t pop?",
      solution: "Classic film stocks add character and mood to any photo. Street photography, portraits, travel. All of it.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Access Photos Anywhere",
      problem: "Edited photos stuck on one device?",
      solution: "Cloud library keeps your film-style photos accessible from anywhere. Phone, tablet, laptop. All synced.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  const filmStocks = [
    {
      name: "Kodak Gold 200",
      look: "Warm nostalgia, rich yellows",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "110 Film",
      look: "Lo-fi aesthetic, soft focus",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Kodak Portra 400",
      look: "Natural skin tones, subtle warmth",
      color: "from-rose-400 to-pink-500",
    },
    {
      name: "Fuji Superia 400",
      look: "Vibrant colors, punchy greens",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Ilford HP5",
      look: "Classic B&W, deep contrast",
      color: "from-zinc-600 to-slate-700",
    },
    {
      name: "Cinestill 800T",
      look: "Cinematic mood, halation glow",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 text-sm font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              Coming Soon
            </div>
            <h1 className="heading-xl mb-6">
              Make Your Photos Look Like Film
            </h1>
            <p className="heading-md text-pink-400 mb-8">
              Beautiful analog aesthetics. Zero editing skills required.
            </p>
            <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
              Your digital photos are too clean. Too perfect. They don&apos;t have soul. You want that film look but don&apos;t want to buy expensive cameras or spend hours learning Lightroom. We get it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="btn-primary px-8 py-4 text-base">
                Join the Waitlist
              </button>
              <Link href="#outcomes" className="btn-secondary px-8 py-4 text-base">
                See What You Get
              </Link>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="card border-pink-500/20 bg-pink-500/5 text-center">
              <svg
                className="w-16 h-16 text-pink-400 mx-auto mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="heading-md mb-3">We&apos;re Perfecting the Film Look</h3>
              <p className="text-muted mb-6">
                Join the waitlist to be the first to transform your photos when we launch. Get early access and exclusive launch pricing.
              </p>
              <button className="btn-primary">
                Notify Me at Launch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What You Actually Get</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Not complicated editing tools. Beautiful photos with that analog look you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-4">
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

      {/* Film Stocks Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Classic Film Stocks</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              The looks that made film photography legendary. Now for your digital photos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmStocks.map((stock, index) => (
              <div
                key={index}
                className="card card-hover group"
              >
                <div className={`w-full h-3 rounded-full bg-gradient-to-r ${stock.color} mb-4`} />
                <h3 className="heading-md mb-2">{stock.name}</h3>
                <p className="text-sm text-muted">{stock.look}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Film-Style Photos in Seconds</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Upload. Choose. Download. That&apos;s it.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="heading-md mb-2">Pick Your Photo</h3>
                <p className="text-muted">
                  Select any digital photo. Everything processes in your browser. No uploading to servers. Complete privacy.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="heading-md mb-2">Choose Your Film Stock</h3>
                <p className="text-muted">
                  Want warm nostalgia? Kodak Gold. Cinematic mood? Cinestill 800T. Classic B&W? Ilford HP5. One click. Done.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="heading-md mb-2">Fine-Tune if You Want</h3>
                <p className="text-muted">
                  Adjust grain intensity. Add a vignette. Or just leave it. The default settings already look great.
                </p>
              </div>
            </div>

            <div className="card flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="heading-md mb-2">Download or Save to Cloud</h3>
                <p className="text-muted">
                  Get your high-res photo instantly. Save to your cloud library to access from any device. Share everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="card border-pink-500/20">
              <div className="text-center mb-8">
                <h2 className="heading-lg mb-4">Why It Looks So Good</h2>
                <p className="text-muted">
                  Real film characteristics, not fake filters. The difference is obvious.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-zinc-200">Real Film Grain</h4>
                    <p className="text-sm text-muted">
                      Actual grain scanned from film. Not generated. Not fake. The texture that makes film photography beautiful.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-zinc-200">Professional LUTs</h4>
                    <p className="text-sm text-muted">
                      Color science from legendary film stocks. Recreated by professionals who know what film actually looks like.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-zinc-200">Complete Privacy</h4>
                    <p className="text-sm text-muted">
                      Processing happens in your browser. Your photos never leave your device during editing. We never see them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-zinc-200">Instant Processing</h4>
                    <p className="text-sm text-muted">
                      No waiting for uploads. No slow servers. Transform photos instantly right in your browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="card text-center max-w-3xl mx-auto border-pink-500/20">
            <h2 className="heading-lg mb-4">
              Get the Film Look Without the Film Camera
            </h2>
            <p className="text-xl text-muted mb-8">
              Join the waitlist for early access. Be the first to transform your digital photos into beautiful film-style images. Launch pricing available to waitlist members only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Join the Waitlist
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
