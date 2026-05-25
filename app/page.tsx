export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education API
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Simple plagiarism detection<br />
          <span className="text-[#58a6ff]">for educators</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Submit student text via API and get instant similarity scores with source citations — checked against web sources and academic databases.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get API Access — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <p className="mt-5 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-8">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["Web Sources", "Checks live web pages"],
            ["Academic DBs", "Scholarly article index"],
            ["Similarity Score", "0–100% match rating"],
            ["Source Citations", "Exact URLs returned"]
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="text-[#58a6ff] font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">One simple plan</h2>
        <p className="text-[#8b949e] mb-10">Everything you need to check student submissions.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-3">Educator Plan</p>
          <div className="flex items-end justify-center gap-1 mb-6">
            <span className="text-5xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "500 checks per month",
              "Web + academic source scanning",
              "Similarity score + source URLs",
              "REST API with JSON responses",
              "API key authentication",
              "Usage dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start for $8/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the plagiarism check work?",
              a: "You POST text to our API endpoint. We scan it against indexed web pages and academic sources, then return a similarity percentage and a list of matching source URLs with highlighted excerpts."
            },
            {
              q: "What counts as one check?",
              a: "Each API call with a text submission counts as one check, regardless of document length. Your plan includes 500 checks per month, which resets on your billing date."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal at any time. You keep access until the end of your current billing period with no cancellation fees."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} PlagiarismCheck API. Built for educators.</p>
      </footer>
    </main>
  );
}
