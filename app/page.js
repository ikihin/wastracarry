import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import QRLabel from "./components/QRLabel";

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
              Verification infrastructure · Solana
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-7xl">
              Trust infrastructure
              <br />
              for{" "}
              <span className="text-brand-accent">cultural products.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted md:text-lg">
              WASTRA CARRY gives physical textiles a permanent, on-chain
              identity. Scan a piece, see its origin — verified, not claimed.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/verify"
                className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
              >
                Try a verification →
              </Link>
              <a
                href="#system"
                className="rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent/40"
              >
                Read the system
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-brand-border pt-8 sm:grid-cols-4">
              {[
                { k: "3", l: "SKUs live" },
                { k: "15", l: "Early users tested" },
                { k: "$17", l: "Avg. willingness to pay" },
                { k: "52%", l: "Gross margin" },
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

          {/* HERO IMAGE */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[24px] border border-brand-border bg-brand-card grain">
                <img
                  src="/images/totebag-1.png"
                  alt="WASTRA CARRY tote — Batik Tulis"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-[78%] rounded-2xl border border-brand-border bg-brand-surface/95 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                      Product ID · Solana
                    </div>
                    <div className="mt-1 font-mono text-sm text-brand-text">
                      WC-000128
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
                The problem
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-brand-text md:text-4xl">
                Authenticity in cultural products cannot be verified at point
                of purchase.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-brand-muted">
                Batik tulis, tenun ikat, lurik — these textiles carry months
                of skilled human labor and centuries of cultural lineage. But
                the moment they leave the workshop, that story becomes a
                claim. Tags can be sewn on. Labels can be copied. Stories can
                be invented.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                We close that gap with a verification layer that travels with
                the product itself — physical, visible, and anchored on-chain
                so it cannot be edited, copied, or backdated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-LAYER SYSTEM */}
      <section id="system" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              The system
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-brand-text md:text-5xl">
              A 3-layer verification stack.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-brand-muted">
              Each layer reinforces the others. Remove one and the whole
              record collapses — by design.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-4">
              {[
                {
                  n: "Layer 01",
                  t: "Physical product",
                  d: "The textile itself — handcrafted by a verified maker, photographed and registered at the workshop before it leaves.",
                },
                {
                  n: "Layer 02",
                  t: "Origin label",
                  d: "A tamper-evident label attached to the piece. Carries the unique Product ID and a scannable QR that opens the verification record.",
                },
                {
                  n: "Layer 03",
                  t: "Digital record (on-chain)",
                  d: "Maker, origin, batch, production date, and QC result are anchored on Solana. Permanent, public, unforgeable — integration initiated, rolling out across the current batch.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group relative flex items-start gap-6 rounded-2xl border border-brand-border bg-brand-card p-6 transition hover:border-brand-accent/30"
                >
                  <div className="shrink-0 font-mono text-xs text-brand-accent">
                    {step.n}
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-brand-text">
                      {step.t}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {step.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QR FLOW DIAGRAM */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              The flow
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-text md:text-5xl">
              Four taps from doubt to proof.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                t: "Scan QR",
                d: "Phone camera reads the label on the piece.",
                icon: "▣",
              },
              {
                step: "02",
                t: "Verification page opens",
                d: "Branded record loads — no app install required.",
                icon: "↗",
              },
              {
                step: "03",
                t: "Structured product data",
                d: "Maker, origin, batch, fabric, QC date.",
                icon: "≡",
              },
              {
                step: "04",
                t: "On-chain record",
                d: "Single tap reveals the Solana transaction anchor.",
                icon: "◈",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-brand-border bg-brand-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-brand-muted">
                    {s.step}
                  </div>
                  <div className="text-xl text-brand-accent">{s.icon}</div>
                </div>
                <div className="mt-4 font-display text-base font-semibold text-brand-text">
                  {s.t}
                </div>
                <div className="mt-2 text-xs leading-relaxed text-brand-muted">
                  {s.d}
                </div>
                {i < 3 && (
                  <div className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 text-brand-border md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/verify"
              className="rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent/40"
            >
              See a live verification record →
            </Link>
          </div>
        </div>
      </section>

      {/* TRY IT NOW — interactive QR */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card">
          <div className="grid grid-cols-1 items-center md:grid-cols-12">
            <div className="p-10 md:col-span-7 md:p-14">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
                Try it now
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-text md:text-5xl">
                Scan this with your phone.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-brand-muted md:text-base">
                This is the exact same QR code that gets printed on the
                origin label of every piece. Open your phone camera, point at
                the code, tap the notification. The verification record
                opens — no app install.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-brand-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-brand-accent">
                    01
                  </span>
                  <span>Open your phone camera</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-brand-accent">
                    02
                  </span>
                  <span>Point at the QR code →</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-brand-accent">
                    03
                  </span>
                  <span>
                    Tap the notification — the WC-000128 record opens in
                    your browser
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/verify"
                  className="rounded-full border border-brand-border bg-brand-bg px-5 py-2.5 text-xs font-medium text-brand-text transition hover:border-brand-accent/40"
                >
                  Or click here to open it →
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#1a1407] to-[#0a0a0a] p-10 md:col-span-5 md:p-14">
              <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>
              <div className="relative">
                <QRLabel
                  productId="WC-000128"
                  fabric="Batik Tulis · Yogyakarta"
                  url="https://wastracarry.vercel.app/verify"
                  size={220}
                />
                <div className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                  Live · scannable
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 SKUs */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              The pieces
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-text md:text-5xl">
              Three textiles, three traditions.
            </h2>
            <p className="mt-4 max-w-lg text-sm text-brand-muted">
              Each SKU runs through the same verification stack. Different
              fabric, same proof.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              sku: "WC-BT",
              name: "Batik Tulis",
              origin: "Yogyakarta",
              tradition: "Hand-drawn wax-resist",
              img: "/images/totebag-1.png",
            },
            {
              sku: "WC-TI",
              name: "Tenun Ikat",
              origin: "Nusa Tenggara Timur",
              tradition: "Hand-woven yarn-dyed",
              img: "/images/totebag-6.png",
            },
            {
              sku: "WC-LK",
              name: "Lurik",
              origin: "Klaten, Central Java",
              tradition: "Hand-loomed stripe weaving",
              img: "/images/totebag-10.png",
            },
          ].map((p) => (
            <div
              key={p.sku}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition hover:border-brand-accent/40"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-bg">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[11px] text-brand-muted">
                    {p.sku}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Verifiable
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-brand-text">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs text-brand-muted">
                    {p.tradition}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-brand-border pt-3 text-xs">
                  <span className="text-brand-muted">Origin</span>
                  <span className="text-brand-text">{p.origin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POSITIONING — watermark section */}
      <section className="relative overflow-hidden border-y border-brand-border bg-brand-surface">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <div className="font-display text-[18vw] font-bold tracking-[0.05em] text-brand-text">
            WASTRA
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <div className="text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted">
                Positioning
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-brand-text md:text-5xl">
                Not a product brand.
                <br />
                <span className="text-brand-accent">
                  A trust infrastructure
                </span>{" "}
                expressed through physical goods.
              </h3>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-brand-muted">
                The textiles are the proof-of-system. The system is the
                product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY VALIDATION */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
              Early validation
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold text-brand-text md:text-4xl">
              Tested before launch.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Before scaling, we ran the system with 15 early users to
              measure willingness to pay and the actual driver of value.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ValidationCard
                k="15"
                l="early users"
                note="ran the full scan-to-on-chain flow before public launch"
              />
              <ValidationCard
                k="$17"
                l="willingness to pay"
                note="strong majority of testers, on a hand-made textile piece"
              />
              <ValidationCard
                k="52%"
                l="gross margin"
                note="defined unit economics across all three SKUs"
              />
              <ValidationCard
                k="#1"
                l="purchase driver"
                note="origin transparency outweighed design and price in qualitative feedback"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WASTRA VERIFIED — future direction */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-[#161108] via-brand-card to-brand-bg p-10 md:p-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-accent">
                Coming next · Wastra Verified
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold text-brand-text md:text-5xl">
                The verification layer, opened up to every textile brand.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-muted md:text-base">
                Wastra Verified is the same 3-layer infrastructure delivered
                as a service. Brands plug in once and certify product origin
                on-chain — without owning the chain stack, the registry, or
                the field network.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-brand-text/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-1 w-1 rounded-full bg-brand-accent" />
                  Issuer dashboard for makers, batches, and QC.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1 w-1 rounded-full bg-brand-accent" />
                  Branded scan page on your domain.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1 w-1 rounded-full bg-brand-accent" />
                  Solana-anchored records, API access to the registry.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@wastracarry.com?subject=Wastra%20Verified%20waitlist"
                  className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition hover:bg-brand-text"
                >
                  Join brand waitlist →
                </a>
                <a
                  href="#"
                  className="rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-medium text-brand-text transition hover:border-brand-accent/40"
                >
                  Read the spec (soon)
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-brand-border bg-brand-bg/60 p-6 font-mono text-xs text-brand-text/80">
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                  POST /v1/pieces
                </div>
                <pre className="mt-3 whitespace-pre-wrap leading-relaxed">{`{
  "brand": "yourbrand",
  "sku": "BT-2026-Q2",
  "maker": "Siti Aminah",
  "origin": "Yogyakarta, ID",
  "fabric": "Batik Tulis",
  "batch": 12,
  "qc": "passed"
}`}</pre>
                <div className="mt-4 border-t border-brand-border pt-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                    → response
                  </div>
                  <div className="mt-2 text-brand-accent">
                    tx: 8fj3k…92ks
                  </div>
                  <div className="text-brand-text/70">
                    qr: wastracarry.com/v/WC-000142
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT STATUS — honest "where we are" */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
                Where we are
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold text-brand-text md:text-4xl">
                Project status.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We ship what's real, mark what's in progress, and flag
                what's next. No vaporware framing.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
                {[
                  {
                    state: "live",
                    layer: "L1",
                    t: "Physical product layer",
                    d: "3 SKUs in production: Batik Tulis, Tenun Ikat, Lurik.",
                  },
                  {
                    state: "live",
                    layer: "L2",
                    t: "Origin label layer",
                    d: "QR-bearing tamper-evident labels attached to every piece.",
                  },
                  {
                    state: "live",
                    layer: "UI",
                    t: "Verification interface",
                    d: "Scan-to-record flow live, structured product data displayed.",
                  },
                  {
                    state: "rolling",
                    layer: "L3",
                    t: "Solana on-chain anchoring",
                    d: "Integration initiated on Solana to anchor product records permanently. Rollout in progress across the current batch.",
                  },
                  {
                    state: "next",
                    layer: "B2B",
                    t: "Wastra Verified API",
                    d: "Same infrastructure opened to external textile brands. Waitlist open.",
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.t}
                    className={`flex items-start gap-5 px-6 py-5 ${
                      i < arr.length - 1 ? "border-b border-brand-border" : ""
                    }`}
                  >
                    <div className="shrink-0">
                      <StatusBadge state={row.state} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="rounded border border-brand-border bg-brand-bg px-1.5 py-0.5 font-mono text-[10px] text-brand-muted">
                          {row.layer}
                        </span>
                        <span className="font-display text-sm font-semibold text-brand-text md:text-base">
                          {row.t}
                        </span>
                      </div>
                      <div className="mt-1.5 text-xs leading-relaxed text-brand-muted md:text-sm">
                        {row.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[11px] text-brand-muted">
                Status as of {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING / FOCUS */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="text-[11px] uppercase tracking-[0.25em] text-brand-accent">
          Focus
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-text md:text-4xl">
          Closing the trust gap in cultural products — at the point of
          purchase.
        </h3>
      </section>

      <Footer />
    </main>
  );
}

function ValidationCard({ k, l, note }) {
  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-6">
      <div className="font-display text-4xl font-bold text-brand-text">
        {k}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-accent">
        {l}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-brand-muted">
        {note}
      </div>
    </div>
  );
}

function StatusBadge({ state }) {
  const map = {
    live: {
      label: "Live",
      cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      dot: "bg-emerald-400",
    },
    rolling: {
      label: "Rolling out",
      cls: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      dot: "bg-amber-400 animate-pulse",
    },
    next: {
      label: "Next",
      cls: "border-brand-border bg-brand-bg text-brand-muted",
      dot: "bg-brand-muted",
    },
  };
  const s = map[state] ?? map.next;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${s.cls}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
