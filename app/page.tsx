export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For open source developers &amp; indie hackers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Predict if your open source project<br />will get stars
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze your GitHub repo metadata, README quality, and launch timing to forecast your star growth trajectory in the first 30 days.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started – $12/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block"></span>
            <span className="text-[#8b949e] text-xs ml-2">star-predictor analysis</span>
          </div>
          <div className="space-y-2 text-sm font-mono">
            <p><span className="text-[#58a6ff]">repo:</span> <span className="text-[#c9d1d9]">your-org/awesome-project</span></p>
            <p><span className="text-[#58a6ff]">readme_score:</span> <span className="text-[#3fb950]">87/100</span></p>
            <p><span className="text-[#58a6ff]">launch_timing:</span> <span className="text-[#3fb950]">optimal (Tuesday 10am UTC)</span></p>
            <p><span className="text-[#58a6ff]">predicted_stars_30d:</span> <span className="text-[#e3b341]">142–310</span></p>
            <p><span className="text-[#58a6ff]">confidence:</span> <span className="text-[#3fb950]">high</span></p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to launch with confidence</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repo analyses",
              "README quality scoring",
              "Launch timing recommendations",
              "30-day star growth forecast",
              "Competitor benchmarking",
              "Email alerts & reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Predicting
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the star prediction work?</h3>
            <p className="text-[#8b949e] text-sm">We analyze your repository metadata, README readability and completeness, topic tags, and historical patterns from thousands of repos to generate a data-driven star growth forecast for your first 30 days.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do you need write access to my GitHub repo?</h3>
            <p className="text-[#8b949e] text-sm">No. We only need read access to public repository data. We never modify your code or settings.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GitHub Star Predictor. Built for open source developers.
      </footer>
    </main>
  );
}
