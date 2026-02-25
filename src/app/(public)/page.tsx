import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b hairline-dark">
        <div className="flex items-center justify-between h-[64px] w-full">
          {/* Logo */}
          <div className="flex items-center h-full px-8 md:px-12 border-r hairline-dark">
            <Link href="/" className="text-[20px] font-black tracking-tight whitespace-nowrap">
              TRACTION<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Nav links + CTA grouped on the right */}
          <div className="hidden md:flex items-center h-full">
            <Link
              href="#capabilities"
              className="swiss-label text-gray-300 hover:text-black transition-colors px-6 lg:px-8"
            >
              Work
            </Link>
            <Link
              href="#capabilities"
              className="swiss-label text-gray-300 hover:text-black transition-colors px-6 lg:px-8"
            >
              Services
            </Link>
            <Link
              href="/login"
              className="swiss-label text-gray-300 hover:text-black transition-colors px-6 lg:px-8"
            >
              Log In
            </Link>

            {/* Black CTA button */}
            <Link
              href="/signup"
              className="flex items-center h-full px-8 lg:px-12 ml-4 bg-black text-white swiss-label hover:bg-gray-400 transition-colors whitespace-nowrap"
            >
              START PROJECT&nbsp;&nbsp;&rarr;
            </Link>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden ml-auto px-8 flex flex-col gap-[5px]" aria-label="Menu">
            <span className="block w-5 h-[1.5px] bg-black" />
            <span className="block w-5 h-[1.5px] bg-black" />
          </button>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-[64px] min-h-screen flex">
        {/* Vertical sidebar label */}
        <div className="hidden lg:flex items-center justify-center w-[64px] border-r hairline flex-shrink-0">
          <span className="vertical-label text-gray-300">Manifesto</span>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-32">
          <h1 className="text-display-xl font-black uppercase tracking-tight leading-[0.88] animate-fade-up">
            Turn
            <br />
            any idea
            <br />
            into a
            <br />
            pitch.
          </h1>

          {/* Description + meta row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mt-16 lg:mt-20">
            <p className="text-body-lg text-gray-300 max-w-[480px] leading-relaxed animate-fade-up delay-2">
              Enter a prompt. Get a complete pitch deck,
              financial projections, market research, and
              everything investors need to say yes.
            </p>

            <div className="animate-fade-up delay-3">
              <div className="border-t hairline-dark pt-4">
                <span className="swiss-label text-gray-200">
                  EST. 2026 — San Francisco
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 animate-fade-up delay-4">
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-gray-400"
            >
              Start Building — Free&nbsp;&nbsp;&rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section id="capabilities">
        {/* Full-width hairline */}
        <div className="border-t hairline-dark" />

        <div className="flex">
          {/* Vertical sidebar label */}
          <div className="hidden lg:flex items-start justify-center w-[64px] border-r hairline flex-shrink-0 pt-16">
            <span className="vertical-label text-gray-300">Capabilities</span>
          </div>

          <div className="flex-1 px-8 md:px-16 lg:px-20 py-20 lg:py-28">
            <p className="swiss-label text-gray-200 mb-16 animate-fade-in">
              What you get
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
              {[
                {
                  n: "01",
                  title: "AI-Generated Decks",
                  desc: "Complete pitch decks from a single prompt. HTML, CSS, and JavaScript slides ready to present.",
                },
                {
                  n: "02",
                  title: "Business Documents",
                  desc: "SWOT analysis, financial projections, market research, and timelines generated automatically.",
                },
                {
                  n: "03",
                  title: "Investor Sharing",
                  desc: "Share your complete pitch with investors via a single link. Professional, polished, ready to impress.",
                },
                {
                  n: "04",
                  title: "Iterative Refinement",
                  desc: "Chat with AI to refine any slide or document. Highlight, comment, and watch changes apply in real-time.",
                },
              ].map((f) => (
                <div key={f.n}>
                  <span className="text-[11px] font-mono text-gray-200 block mb-5">
                    {f.n}
                  </span>
                  <h3 className="text-[17px] font-bold leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-body-sm text-gray-300 mt-3 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER — Black block ═══ */}
      <footer className="bg-black text-white">
        <div className="px-8 md:px-16 lg:px-20 pt-24 pb-16 lg:pt-32 lg:pb-20">
          {/* Massive text */}
          <h2 className="text-display-lg font-black uppercase tracking-tight leading-[0.88]">
            LET&apos;S
            <br />
            BUILD.
          </h2>

          {/* CTA row */}
          <div className="mt-12 lg:mt-16">
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors"
            >
              Get Started&nbsp;&nbsp;&rarr;
            </Link>
          </div>

          {/* Footer meta row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-20 lg:mt-28 pt-8 border-t border-white/20">
            <div>
              <Link
                href="mailto:hello@traction.ai"
                className="text-body-sm font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                hello@traction.ai
              </Link>
            </div>

            <div className="flex gap-10 mt-6 md:mt-0">
              <span className="swiss-label text-white/50 hover:text-white cursor-pointer transition-colors">
                Privacy
              </span>
              <span className="swiss-label text-white/50 hover:text-white cursor-pointer transition-colors">
                Terms
              </span>
              <span className="swiss-label text-white/50">
                &copy; 2026 Traction
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
