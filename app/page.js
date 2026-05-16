import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-[140px]" />
          <div className="absolute right-[-160px] top-40 h-[420px] w-[420px] rounded-full bg-emerald-500/5 blur-[120px]" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Verification protocol v0.4 — live
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-7xl">
              Every piece carries
              <br />
              <span className="text-brand-accent">a verifiable origin.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted md:text-lg">
              WASTRA CARRY is a verification system for textiles and crafted
              goods. Each piece is tied to a maker, a place, and a permanent
              record — readable by anyone, owned by no one.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/verify"
                className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
              >
                Verify a piece →
              </Link>
              <Link
                href="/builder"
                className="rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent/40"
              >
                See it built live
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-border pt-8">
              {[
                { k: "128", l: "Pieces verified" },
                { k: "14", l: "Active makers" },
                { k: "0", l: "Forgeries possible" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-brand-text">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE — product evidence, not lifestyle */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[24px] border border-brand-border bg-brand-card grain">
                <img
                  src="/images/totebag-1.png"
                  alt="WASTRA CARRY tote"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-[78%] rounded-2xl border border-brand-border bg-brand-surface/95 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                      Product ID
                    </div>
                    <div className="mt-1 font-mono text-sm text-brand-text">
                      WC-000128
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Authentic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR — faint background */}
      <section className="relative overflow-hidden border-y border-brand-border bg-brand-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-12 gap-y-4 px-6 text-[11px] uppercase tracking-[0.25em] text-brand-muted">
          <span>Yogyakarta · Indonesia</span>
          <span>Hand-woven Batik Tulis</span>
          <span>On-chain provenance</span>
          <span>Tamper-evident</span>
          <span>Field-audited</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              The system
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-brand-text md:text-5xl">
              A chain of custody, from loom to owner.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-brand-muted">
              Every step a piece passes through is recorded and signed by a
              verified party. The result is a single record anyone can read,
              and no one can fake.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "Maker registers piece",
                  d: "A verified artisan registers a new piece with fabric type, batch, and production date.",
                },
                {
                  n: "02",
                  t: "Field auditor signs origin",
                  d: "A WASTRA field auditor visits the workshop and signs an origin attestation.",
                },
                {
                  n: "03",
                  t: "Quality check recorded",
                  d: "QC results are written as a separate attestation — pass / partial / fail, with notes.",
                },
                {
                  n: "04",
                  t: "Anchored on-chain",
                  d: "The combined record is anchored as a single transaction. Anyone can view it.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group relative rounded-2xl border border-brand-border bg-brand-card p-6 transition hover:border-brand-accent/30"
                >
                  <div className="font-mono text-xs text-brand-accent">
                    {step.n}
                  </div>
                  <div className="mt-3 font-display text-lg font-semibold text-brand-text">
                    {step.t}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {step.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              Recent pieces
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-text md:text-5xl">
              From the registry.
            </h2>
          </div>
          <Link
            href="/verify"
            className="hidden text-sm text-brand-muted hover:text-brand-text md:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { id: "WC-000128", img: "/images/totebag-1.png", origin: "Yogyakarta", maker: "Siti Aminah" },
            { id: "WC-000131", img: "/images/totebag-5.png", origin: "Yogyakarta", maker: "Siti Aminah" },
            { id: "WC-000136", img: "/images/totebag-6.png", origin: "NTT", maker: "I Wayan Suarta" },
            { id: "WC-000142", img: "/images/totebag-10.png", origin: "Yogyakarta", maker: "Endang Pratiwi" },
          ].map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition hover:border-brand-accent/40"
            >
              <div className="aspect-square overflow-hidden bg-brand-bg">
                <img
                  src={p.img}
                  alt={p.id}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-brand-text">
                    {p.id}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Verified
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-brand-muted">
                  <span>{p.maker}</span>
                  <span>{p.origin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WATERMARK SECTION — faint big logo background */}
      <section className="relative overflow-hidden border-y border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <div className="font-display text-[18vw] font-bold tracking-[0.05em] text-brand-text">
            WASTRA
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-4">
            <div className="text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted">
                The thesis
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-brand-text md:text-4xl">
                If a label can be copied, it isn’t proof. If a record can be
                changed, it isn’t proof.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                We don’t sell a product. We sell certainty about a product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-card to-brand-bg p-10 md:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl font-semibold text-brand-text md:text-4xl">
                Hold a piece. Scan it. See the record.
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Try a live verification flow with a sample piece from the
                Yogyakarta batch.
              </p>
            </div>
            <Link
              href="/verify"
              className="rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
            >
              Open sample verification →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
