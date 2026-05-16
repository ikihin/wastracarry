import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function VerifyPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* HEADER STRIP */}
      <section className="border-b border-brand-border bg-brand-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs text-brand-muted">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-brand-text">
              ← All pieces
            </Link>
            <span className="font-mono">WC-000128</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono">Verified on: March 28, 2026</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live record
            </span>
          </div>
        </div>
      </section>

      {/* MAIN VERIFY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12">
        {/* PRODUCT EVIDENCE (close-up, not lifestyle) */}
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
            <img
              src="/images/totebag-1.png"
              alt="WC-000128 — primary view"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["/images/totebag-5.png", "/images/totebag-6.png", "/images/totebag-10.png"].map(
              (src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-brand-border bg-brand-card"
                >
                  <img
                    src={src}
                    alt={`detail-${i}`}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* RECORD PANEL */}
        <div className="md:col-span-6">
          {/* Stronger verified header */}
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l5 5L20 7"
                  stroke="#34d399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Verified
              </div>
              <h1 className="font-display text-2xl font-bold leading-tight text-brand-text md:text-3xl">
                Authentic Origin Confirmed
              </h1>
            </div>
          </div>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-muted">
            This record was issued by the WASTRA verification network and
            anchored on-chain. It cannot be edited, copied, or backdated.
          </p>

          {/* SECTION: PRODUCT IDENTITY */}
          <RecordSection title="Product Identity">
            <Row k="Product ID" v={<span className="font-mono">WC-000128</span>} />
            <Row k="Batch" v="01 / Yogyakarta-26-03" />
            <Row k="Fabric" v="Batik Tulis — natural indigo" />
            <Row k="Construction" v="Hand-woven, hand-finished" />
          </RecordSection>

          {/* SECTION: ORIGIN */}
          <RecordSection title="Origin">
            <Row k="Origin" v="Yogyakarta, Indonesia" />
            <Row k="Maker" v="Siti Aminah" />
            <Row k="Workshop" v="Studio Lestari · Kotagede" />
            <Row k="Production date" v="March 2026" />
          </RecordSection>

          {/* SECTION: VERIFICATION */}
          <RecordSection title="Verification">
            <Row
              k="Quality Check"
              v={
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase text-emerald-300">
                  Passed
                </span>
              }
            />
            <Row k="Field auditor" v="Andi Pratomo · WASTRA Field Node 04" />
            <Row k="Verified on" v="March 28, 2026" />
            <Row
              k="Transaction"
              v={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-mono text-brand-accent transition hover:text-brand-text"
                >
                  8fj3k…92ks
                  <span aria-hidden>↗</span>
                </a>
              }
            />
          </RecordSection>

          {/* CTA STRIP */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-brand-accent px-5 py-2.5 text-xs font-semibold text-brand-bg transition hover:bg-brand-text"
            >
              View on-chain →
            </a>
            <a
              href="#"
              className="rounded-full border border-brand-border bg-brand-card px-5 py-2.5 text-xs font-medium text-brand-text transition hover:border-brand-accent/40"
            >
              Download certificate
            </a>
            <a
              href="#"
              className="rounded-full border border-brand-border bg-brand-card px-5 py-2.5 text-xs font-medium text-brand-text transition hover:border-brand-accent/40"
            >
              Report a concern
            </a>
          </div>
        </div>
      </section>

      {/* CHAIN OF CUSTODY */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-brand-border bg-brand-card">
          <div className="flex items-center justify-between border-b border-brand-border px-6 py-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
              Chain of custody
            </div>
            <div className="font-mono text-[11px] text-brand-muted">
              4 attestations
            </div>
          </div>

          <ol className="divide-y divide-brand-border">
            {[
              {
                t: "Piece registered",
                who: "Siti Aminah — Verified maker",
                when: "Mar 14, 2026 · 09:12 WIB",
                hash: "0xa1f0…d233",
              },
              {
                t: "Origin attestation signed",
                who: "Andi Pratomo — Field Node 04",
                when: "Mar 18, 2026 · 14:03 WIB",
                hash: "0x44bc…8090",
              },
              {
                t: "Quality check passed",
                who: "QC Lab · Yogyakarta",
                when: "Mar 25, 2026 · 11:47 WIB",
                hash: "0x91d2…1c4a",
              },
              {
                t: "Anchored on-chain",
                who: "WASTRA Protocol",
                when: "Mar 28, 2026 · 16:22 WIB",
                hash: "8fj3k…92ks",
              },
            ].map((e, i) => (
              <li key={i} className="flex items-center gap-6 px-6 py-5">
                <div className="font-mono text-xs text-brand-muted">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-brand-text">
                    {e.t}
                  </div>
                  <div className="text-xs text-brand-muted">
                    {e.who} · {e.when}
                  </div>
                </div>
                <a
                  href="#"
                  className="font-mono text-xs text-brand-accent hover:text-brand-text"
                >
                  {e.hash}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function RecordSection({ title, children }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
      <div className="border-b border-brand-border bg-brand-surface/60 px-5 py-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
          {title}
        </div>
      </div>
      <div className="divide-y divide-brand-border">{children}</div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5">
      <div className="text-xs uppercase tracking-[0.15em] text-brand-muted">
        {k}
      </div>
      <div className="text-sm text-brand-text">{v}</div>
    </div>
  );
}
