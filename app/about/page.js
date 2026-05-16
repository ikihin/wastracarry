import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — WASTRA CARRY",
  description:
    "Behind the system. Who is building WASTRA CARRY, why, and the unfair advantage that makes the verification network work.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-12 pt-24">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
            Behind the system
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-brand-text md:text-7xl">
            Built in Yogyakarta,
            <br />
            <span className="text-brand-accent">with the makers it serves.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            WASTRA CARRY isn't a brand pretending to be infrastructure. It's
            infrastructure being shipped one piece at a time, alongside the
            artisans who make every record matter.
          </p>
        </div>
      </section>

      {/* FOUNDER CARD */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Avatar */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#1a1407] via-brand-card to-brand-bg p-10 md:col-span-5">
              <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>
              <div className="relative text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-brand-border bg-gradient-to-br from-brand-accent to-brand-accent2 font-display text-6xl font-bold text-brand-bg shadow-2xl shadow-black/40">
                  R
                </div>
                <div className="mt-6 font-display text-2xl font-bold text-brand-text">
                  Rizqy Mohammad
                </div>
                <div className="mt-1 text-sm text-brand-muted">
                  Founder · WASTRA CARRY
                </div>
                <div className="mt-1 text-xs text-brand-muted">
                  Yogyakarta, Indonesia
                </div>
                <div className="mt-5 flex justify-center gap-2">
                  <a
                    href="mailto:rizqymohammadz@gmail.com"
                    className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-medium text-brand-text/80 hover:border-brand-accent/40 hover:text-brand-text"
                  >
                    Email
                  </a>
                  <a
                    href="https://github.com/ikihin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-medium text-brand-text/80 hover:border-brand-accent/40 hover:text-brand-text"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-10 md:col-span-7 md:p-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Why I'm building this
              </div>
              <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                I grew up around Indonesian textiles. Batik tulis, tenun
                ikat, lurik — pieces that take weeks of human labor and
                carry centuries of cultural lineage.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                And I kept watching the same gap repeat: a piece leaves the
                workshop with an honest story attached, and by the time it
                reaches a buyer, that story is unverifiable. Anyone can sew
                on a label. Anyone can write &ldquo;handmade&rdquo; on a
                tag. Makers don&apos;t get credit. Buyers don&apos;t get
                proof.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                WASTRA CARRY is what I&apos;m building to close that gap —
                starting with three SKUs out of Yogyakarta, NTT, and
                Klaten, ending with infrastructure any cultural-product
                brand can plug into.
              </p>

              <div className="mt-8 rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-accent">
                  In one sentence
                </div>
                <div className="mt-2 font-display text-lg leading-snug text-brand-text">
                  Cultural products deserve a chain of custody that
                  survives the moment they leave the workshop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNFAIR ADVANTAGE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
          Why me, why now
        </div>
        <h2 className="mt-3 font-display text-3xl font-semibold text-brand-text md:text-4xl">
          The unfair advantage.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              t: "Direct maker network",
              d: "Working relationships with verified artisans across three regions — Yogyakarta (Studio Lestari, Siti Aminah), NTT (I Wayan Suarta), and Klaten. The same people whose names appear on the records.",
            },
            {
              t: "Full-stack execution",
              d: "Designed and shipped the entire 3-layer system end to end — physical product, origin label, and verification interface — without outsourcing the core stack.",
            },
            {
              t: "Cultural fluency",
              d: "Based in Indonesia's textile heartland. I speak the language of the workshop and the language of the chain — most teams have one, not both.",
            },
            {
              t: "Validated unit economics",
              d: "Already proved a 52% gross margin on the first three SKUs and willingness to pay at $17 with 15 early users — not a thesis, a number.",
            },
          ].map((p) => (
            <div
              key={p.t}
              className="rounded-2xl border border-brand-border bg-brand-card p-6"
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                <span className="h-1 w-1 rounded-full bg-brand-accent" />
                Advantage
              </div>
              <div className="mt-3 font-display text-lg font-semibold text-brand-text">
                {p.t}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-brand-muted">
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW I'M BUILDING */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
            How I'm building
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-text md:text-4xl">
            Lean, on-the-ground, in the open.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Stat k="Solo" l="founder, for now. Expanding once Wastra Verified ships." />
            <Stat k="3" l="maker workshops in the active production batch." />
            <Stat k="On Solana" l="for permanent records — initiated, rolling out." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-[#161108] via-brand-card to-brand-bg p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-semibold text-brand-text md:text-3xl">
                Want to support the system, partner, or join?
              </h3>
              <p className="mt-3 text-sm text-brand-muted">
                Open to grant programs, ecosystem partners, textile brands
                interested in Wastra Verified, and contributors who care
                about cultural-product provenance.
              </p>
            </div>
            <a
              href="mailto:rizqymohammadz@gmail.com?subject=WASTRA%20CARRY"
              className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ k, l }) {
  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-6">
      <div className="font-display text-3xl font-bold text-brand-accent">
        {k}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-brand-muted">{l}</div>
    </div>
  );
}
