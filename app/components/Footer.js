import Link from "next/link";

export default function Footer() {
  return (
    <footer id="system" className="relative mt-32 overflow-hidden border-t border-brand-border bg-brand-surface">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-brand-accent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-6">
              <img
                src="/images/wc-logo.png"
                alt="WASTRA CARRY"
                className="h-32 w-32 rounded-2xl object-contain ring-1 ring-brand-border md:h-40 md:w-40"
              />
              <div>
                <div className="font-display text-4xl font-bold tracking-[0.06em] text-brand-text md:text-6xl">
                  WASTRA CARRY
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.35em] text-brand-muted">
                  Trust infrastructure · on-chain origin
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-xl text-sm leading-relaxed text-brand-muted">
              A 3-layer verification infrastructure for textiles and cultural
              products. Each piece carries a permanent record — physical,
              labeled, and anchored on Solana.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
                System
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/verify" className="text-brand-text/80 hover:text-brand-text">
                    Verify
                  </Link>
                </li>
                <li>
                  <Link href="/builder" className="text-brand-text/80 hover:text-brand-text">
                    Builder
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Registry
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
                Makers
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Join program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Wastra Verified (API)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Field network
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
                Company
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Press kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-text/80 hover:text-brand-text">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-brand-border pt-8 text-xs text-brand-muted md:flex-row md:items-center">
          <div>© 2026 WASTRA CARRY — Yogyakarta, Indonesia</div>
          <div className="flex items-center gap-6">
            <span>Verification protocol v0.4</span>
            <span className="rounded-full border border-brand-border px-3 py-1 font-mono uppercase tracking-widest text-brand-text/70">
              Solana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
