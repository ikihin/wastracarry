import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Demo — WASTRA CARRY",
  description:
    "Watch the WASTRA CARRY verification flow end-to-end: scan a piece, open the verification page, view structured product data, and trace the Solana on-chain anchor.",
};

const DRIVE_FILE_ID = "1Z_PFNb-UNvUjrVwC0A_Fu_AhU6vcCXjb";
const DRIVE_EMBED = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
const DRIVE_OPEN = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`;

export default function DemoPage() {
  return (
    <main className="relative">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-12 pt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live walkthrough
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-brand-text md:text-6xl">
            See the verification flow,
            <br />
            <span className="text-brand-accent">end to end.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-muted">
            From a sealed piece on the table — through QR scan, branded
            verification page, structured product data, and the Solana
            on-chain anchor.
          </p>
        </div>
      </section>

      {/* VIDEO PLAYER */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
          <div className="flex items-center justify-between border-b border-brand-border bg-brand-surface/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-brand-muted">
                wastracarry · demo.mp4
              </span>
            </div>
            <a
              href={DRIVE_OPEN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-muted hover:text-brand-text"
            >
              Open in Drive ↗
            </a>
          </div>
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src={DRIVE_EMBED}
              title="WASTRA CARRY demo"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/verify"
            className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
          >
            Try a live verification →
          </Link>
          <Link
            href="/"
            className="rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent/40"
          >
            Read the system
          </Link>
        </div>
      </section>

      {/* WHAT YOU'LL SEE */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
            What you'll see
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-text md:text-4xl">
            The 4-step flow, on a real piece.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              n: "01",
              t: "Scan QR",
              d: "Phone camera reads the tamper-evident origin label on the piece.",
            },
            {
              n: "02",
              t: "Verification page opens",
              d: "Branded record loads in the browser. No app install required.",
            },
            {
              n: "03",
              t: "Structured product data",
              d: "Maker, origin, batch, fabric type, and QC pass-date displayed.",
            },
            {
              n: "04",
              t: "On-chain record",
              d: "Single tap reveals the Solana transaction anchoring the record.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-brand-border bg-brand-card p-6"
            >
              <div className="font-mono text-xs text-brand-accent">{s.n}</div>
              <div className="mt-3 font-display text-base font-semibold text-brand-text">
                {s.t}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-brand-muted">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXT STRIP */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {[
            { k: "3", l: "SKUs in demo" },
            { k: "15", l: "Early users tested" },
            { k: "$17", l: "Willingness to pay" },
            { k: "Solana", l: "On-chain anchor" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-brand-text">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-[#161108] via-brand-card to-brand-bg p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
                For textile brands
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-brand-text md:text-3xl">
                Want this same verification stack for your own pieces?
              </h3>
              <p className="mt-3 text-sm text-brand-muted">
                Join the Wastra Verified waitlist. Plug into the same
                infrastructure — keep your brand on the scan page.
              </p>
            </div>
            <a
              href="mailto:hello@wastracarry.com?subject=Wastra%20Verified%20waitlist"
              className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
            >
              Join the waitlist →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
