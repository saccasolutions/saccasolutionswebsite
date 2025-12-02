import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Us | Sacca Solutions',
  description: 'Ready to stop losing leads? Get in touch and let us show you how automation can transform your business.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="section-padding">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="heading-xl mb-6">
                Let&apos;s Fix Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Lead Problem</span>
              </h1>
              <p className="heading-md text-muted max-w-2xl mx-auto">
                Missing calls? Slow to respond? Losing leads to competitors? Let&apos;s change that.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="card">
                  <h2 className="heading-lg mb-6">Get Started</h2>
                  <div className="min-h-[772px]">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/b1fxwc5bYY6ljlskL6uj"
                      style={{ width: '100%', height: '772px', border: 'none', borderRadius: '3px' }}
                      id="inline-b1fxwc5bYY6ljlskL6uj"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="AI form"
                      data-height="772"
                      data-layout-iframe-id="inline-b1fxwc5bYY6ljlskL6uj"
                      data-form-id="b1fxwc5bYY6ljlskL6uj"
                      title="AI form"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="card">
                  <h3 className="heading-md mb-6">Contact Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted mb-1">Email</p>
                      <a
                        href="mailto:robert@saccasolutions.com"
                        className="text-zinc-100 hover:text-indigo-400 transition-colors"
                      >
                        robert@saccasolutions.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">Phone</p>
                      <a
                        href="tel:+12155095121"
                        className="text-zinc-100 hover:text-indigo-400 transition-colors"
                      >
                        (215) 509-5121
                      </a>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="card bg-gradient-to-br from-zinc-900 to-zinc-950 border-indigo-500/20">
                  <h3 className="heading-md mb-6">What Happens Next</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mr-3">
                        <span className="text-indigo-400 text-sm font-semibold">1</span>
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">We Review Your Info</p>
                        <p className="text-sm text-muted mt-1">Usually within a few hours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm font-semibold">2</span>
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">Schedule a Call</p>
                        <p className="text-sm text-muted mt-1">15-30 minutes to discuss your needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mr-3">
                        <span className="text-emerald-400 text-sm font-semibold">3</span>
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">Get Your Solution</p>
                        <p className="text-sm text-muted mt-1">Custom proposal tailored to your business</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
