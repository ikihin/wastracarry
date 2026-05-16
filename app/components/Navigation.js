import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/wc-logo.png"
            alt="WASTRA CARRY"
            className="h-9 w-9 rounded-md object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-[0.18em] text-brand-text">
              WASTRA CARRY
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-muted">
              Verifiable Origin
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-brand-muted transition hover:text-brand-text"
          >
            Home
          </Link>
          <Link
            href="/verify"
            className="text-sm text-brand-muted transition hover:text-brand-text"
          >
            Verify
          </Link>
          <Link
            href="/builder"
            className="text-sm text-brand-muted transition hover:text-brand-text"
          >
            Builder
          </Link>
          <a
            href="#system"
            className="text-sm text-brand-muted transition hover:text-brand-text"
          >
            System
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/verify"
            className="hidden rounded-full border border-brand-border bg-brand-card px-4 py-2 text-xs font-medium text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent md:inline-block"
          >
            Scan a piece
          </Link>
          <Link
            href="/builder"
            className="rounded-full bg-brand-text px-4 py-2 text-xs font-semibold text-brand-bg transition hover:bg-brand-accent"
          >
            Open Builder
          </Link>
        </div>
      </div>
    </header>
  );
}
