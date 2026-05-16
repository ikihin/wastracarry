import Link from "next/link";

export const metadata = {
  title: "Builder — WASTRA CARRY",
};

const recentTasks = [
  { name: "Auramax headphone website", active: false },
  { name: "Ops manager", active: false },
  { name: "Meditation app", active: false },
  { name: "Ocean research platform", active: false },
  { name: "Spiderman launch website", active: false },
  { name: "Location based memory app", active: false },
  { name: "WASTRA CARRY — verify page", active: true },
];

export default function BuilderPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0a0a0a] text-brand-text">
      {/* SIDEBAR */}
      <aside className="hidden w-[280px] shrink-0 flex-col border-r border-brand-border bg-[#0c0c0c] md:flex">
        {/* App brand */}
        <div className="flex items-center gap-3 border-b border-brand-border px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-accent to-brand-accent2 text-xs font-bold text-brand-bg">
            E
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">App builder</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
              Wingman
            </div>
          </div>
          <div className="ml-auto rounded border border-brand-border px-1.5 py-0.5 text-[10px] text-brand-muted">
            ⌘K
          </div>
        </div>

        {/* Nav top */}
        <nav className="space-y-1 px-3 py-3">
          <SidebarLink icon="home" label="Home" active />
          <SidebarLink icon="branch" label="origin-check-1" />
          <SidebarLink icon="branch" label="comp-studio-1" />
        </nav>

        <div className="px-5 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
          Background
        </div>

        {/* Promo banner */}
        <div className="mx-3 mt-2 overflow-hidden rounded-lg border border-brand-border bg-gradient-to-br from-[#1c1408] to-[#0f0f0f] p-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand-accent">
            Series B · 95% Off
          </div>
          <div className="mt-1 text-sm font-medium text-brand-text">
            Promotional banner
          </div>
          <div className="mt-1 text-xs text-brand-muted">
            Annual plans, this week only.
          </div>
          <button className="mt-3 w-full rounded-md bg-brand-accent px-3 py-1.5 text-xs font-semibold text-brand-bg">
            Claim offer
          </button>
        </div>

        {/* Recent tasks */}
        <div className="mt-5 px-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
          Recent tasks
        </div>
        <div className="mt-2 flex-1 space-y-0.5 overflow-y-auto px-3 pb-4">
          {recentTasks.map((t) => (
            <button
              key={t.name}
              className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] transition ${
                t.active
                  ? "bg-[#1a1a1a] text-brand-text"
                  : "text-brand-muted hover:bg-[#141414] hover:text-brand-text"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent/60" />
              <span className="truncate">{t.name}</span>
            </button>
          ))}
        </div>

        {/* Bottom brand row */}
        <div className="flex items-center justify-between border-t border-brand-border px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-text text-[10px] font-bold text-brand-bg">
              E
            </div>
            <span className="text-xs text-brand-muted">Emergent</span>
          </div>
          <span className="text-[10px] text-brand-muted">v0.4 · build</span>
        </div>
      </aside>

      {/* MAIN PANEL */}
      <section className="flex flex-1 flex-col overflow-hidden">
        {/* TOP BAR */}
        <header className="flex items-center justify-between border-b border-brand-border bg-[#0c0c0c] px-6 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-brand-muted hover:text-brand-text"
            >
              ← Back to site
            </Link>
            <span className="text-brand-border">/</span>
            <span className="text-xs text-brand-muted">project</span>
            <span className="text-brand-border">/</span>
            <span className="text-xs font-medium text-brand-text">
              wastra-carry-verify
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-md border border-brand-border bg-[#141414] px-3 py-1.5 text-xs text-brand-text hover:border-brand-accent/40">
              Preview
            </button>
            <button className="rounded-md bg-brand-text px-3 py-1.5 text-xs font-semibold text-brand-bg hover:bg-brand-accent">
              Deploy
            </button>
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent2" />
          </div>
        </header>

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-6 py-10">
            {/* Header card with logo + status */}
            <div className="flex items-center gap-4 rounded-2xl border border-brand-border bg-[#101010] p-4">
              <img
                src="/images/wc-logo.png"
                alt="WASTRA CARRY"
                className="h-12 w-12 rounded-lg object-contain ring-1 ring-brand-border"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold">WASTRA CARRY</div>
                <div className="text-xs text-brand-muted">
                  Loading… verification page rebuild in progress
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Building
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mt-8 space-y-6">
              <AgentEvent
                kind="edit"
                file="/app/frontend/src/components/HeroSection.js"
                time="Mar 26, 12:39 PM"
              />

              <QuickInput
                time="Mar 26, 12:39 PM"
                text="logo nya di jelaskan lagi dan di perbesar lebih besar lagi agar kelihatan"
              />

              <AgentEvent
                kind="edit"
                file="/app/frontend/src/components/Navigation.js"
                time="Mar 26, 12:40 PM"
              />
              <AgentEvent
                kind="edit"
                file="/app/frontend/src/components/Footer.js"
                time="Mar 26, 12:41 PM"
              />
              <AgentEvent
                kind="edit"
                file="/app/frontend/src/pages/VerifyPage.js"
                time="Mar 26, 12:41 PM"
              />

              <QuickInput
                time="Mar 26, 12:41 PM"
                text={
                  <>
                    masih kurang besar logonya 🔥 <strong>TEMPAT YANG BENAR UNTUK BESARIN LOGO</strong>
                    <br />
                    <br />
                    <strong>1. DI FOOTER (WAJIB)</strong> — claim identity. Bikin 2–3× ukuran navbar, clean, centered atau left.
                    <br />
                    <strong>2. DI END VIDEO / CLOSE SCENE</strong> — ini yang orang ingat. Bukan navbar.
                    <br />
                    <strong>3. OPTIONAL — MID SECTION</strong> — watermark besar (opacity rendah) di background section. Elegan, premium, tidak norak.
                    <br />
                    <br />
                    <strong>JANGAN</strong>: besarin logo di navbar / taruh logo gede di hero / bikin logo jadi fokus utama.
                  </>
                }
              />

              <AgentEvent
                kind="edit"
                file="/app/frontend/src/components/Navigation.js"
                time="Mar 26, 12:42 PM"
              />
              <AgentEvent
                kind="edit"
                file="/app/frontend/src/components/Footer.js"
                time="Mar 26, 12:42 PM"
              />

              <QuickInput
                time="Mar 26, 12:43 PM"
                text={
                  <>
                    Terlalu “bersih” = terasa mockup. Beberapa fix wajib:
                    <ul className="ml-4 mt-2 list-disc space-y-1">
                      <li>
                        Ganti <code className="rounded bg-[#1a1a1a] px-1 font-mono text-[11px]">Maker: Verified Artisan</code> →{" "}
                        <code className="rounded bg-[#1a1a1a] px-1 font-mono text-[11px]">Maker: Siti Aminah (Yogyakarta)</code>
                      </li>
                      <li>
                        Tambah Transaction ID + “View on-chain →” (proof signal)
                      </li>
                      <li>
                        Ganti foto lifestyle → close-up tas / flat lay / detail kain
                      </li>
                      <li>
                        Header: <em>Product Verified</em> →{" "}
                        <em>✔ Verified — Authentic Origin Confirmed</em>
                      </li>
                      <li>
                        Tambah <code className="rounded bg-[#1a1a1a] px-1 font-mono text-[11px]">Verified on: March 28, 2026</code>
                      </li>
                      <li>
                        Group jadi 3 section: Product Identity / Origin / Verification
                      </li>
                    </ul>
                  </>
                }
              />

              <AgentEvent
                kind="edit"
                file="/app/frontend/src/pages/VerifyPage.js"
                time="Mar 26, 12:44 PM"
                note="Restructured into 3 sections, added Maker (Siti Aminah), on-chain TX, verified-on date, close-up imagery."
              />

              {/* Agent done preview */}
              <div className="rounded-2xl border border-brand-border bg-[#101010] p-5">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Agent — preview ready
                </div>
                <div className="mt-3 text-sm text-brand-text">
                  Verify page rebuilt with all 6 fixes. Maker, Yogyakarta
                  origin, batch, QC pass, on-chain TX, and verified-on date are
                  now present. Layout grouped into Product Identity / Origin /
                  Verification.
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-brand-border">
                  <div className="flex items-center gap-2 border-b border-brand-border bg-[#0c0c0c] px-4 py-2 text-xs text-brand-muted">
                    <span className="h-2 w-2 rounded-full bg-red-500/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono">/verify · WC-000128</span>
                  </div>
                  <div className="grid grid-cols-2 gap-0">
                    <div className="bg-[#0a0a0a]">
                      <img
                        src="/images/totebag-1.png"
                        alt="preview"
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 bg-[#0c0c0c] p-4 text-xs">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-300">
                        ✔ Verified
                      </div>
                      <div className="font-display text-sm font-semibold text-brand-text">
                        Authentic Origin Confirmed
                      </div>
                      <div className="border-t border-brand-border pt-2 text-brand-muted">
                        ID <span className="ml-1 font-mono text-brand-text">WC-000128</span>
                      </div>
                      <div className="text-brand-muted">
                        Maker <span className="ml-1 text-brand-text">Siti Aminah</span>
                      </div>
                      <div className="text-brand-muted">
                        Origin <span className="ml-1 text-brand-text">Yogyakarta</span>
                      </div>
                      <div className="text-brand-muted">
                        TX <span className="ml-1 font-mono text-brand-accent">8fj3k…92ks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/verify"
                    className="rounded-md bg-brand-accent px-3 py-1.5 text-xs font-semibold text-brand-bg hover:bg-brand-text"
                  >
                    Open live verify page →
                  </Link>
                  <button className="rounded-md border border-brand-border bg-[#141414] px-3 py-1.5 text-xs text-brand-text hover:border-brand-accent/40">
                    Show diff
                  </button>
                  <button className="rounded-md border border-brand-border bg-[#141414] px-3 py-1.5 text-xs text-brand-text hover:border-brand-accent/40">
                    Roll back
                  </button>
                </div>
              </div>

              <div className="pb-6 text-center text-xs text-brand-muted">
                Agent is waiting…
              </div>
            </div>
          </div>
        </div>

        {/* COMPOSER */}
        <div className="border-t border-brand-border bg-[#0c0c0c] px-6 py-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-end gap-3 rounded-2xl border border-brand-border bg-[#101010] p-3">
              <textarea
                rows={2}
                placeholder="Reply to the agent — ask for changes, paste references, or approve…"
                className="flex-1 resize-none bg-transparent text-sm text-brand-text placeholder-brand-muted focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-brand-border bg-[#141414] px-2 py-1.5 text-xs text-brand-muted hover:text-brand-text">
                  📎
                </button>
                <button className="rounded-md bg-brand-accent px-4 py-2 text-xs font-semibold text-brand-bg hover:bg-brand-text">
                  Send ↵
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-brand-muted">
              <span>Wingman · WASTRA CARRY · auto-saved 2s ago</span>
              <span>Enter to send · Shift+Enter for newline</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SidebarLink({ icon, label, active }) {
  const icons = {
    home: (
      <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2v-9z" />
    ),
    branch: (
      <path d="M6 3v12a4 4 0 0 0 4 4h4M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    ),
  };
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
        active
          ? "bg-[#1a1a1a] text-brand-text"
          : "text-brand-muted hover:bg-[#141414] hover:text-brand-text"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {icons[icon]}
      </svg>
      <span className="truncate">{label}</span>
    </button>
  );
}

function AgentEvent({ kind, file, time, note }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-border bg-[#141414] text-[10px] text-brand-accent">
        ✎
      </div>
      <div className="flex-1">
        <div className="rounded-xl border border-brand-border bg-[#101010] px-4 py-3">
          <div className="text-xs text-brand-muted">
            <span className="text-brand-text">Edited</span>{" "}
            <code className="rounded bg-[#1a1a1a] px-1.5 py-0.5 font-mono text-[11px] text-brand-text">
              {file}
            </code>
          </div>
          {note && (
            <div className="mt-2 text-sm text-brand-text/80">{note}</div>
          )}
        </div>
        <div className="mt-1 text-[11px] text-brand-muted">{time}</div>
      </div>
    </div>
  );
}

function QuickInput({ time, text }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-[10px] font-bold text-brand-accent ring-1 ring-brand-accent/40">
        A
      </div>
      <div className="flex-1">
        <div className="rounded-xl border border-brand-border bg-[#0e0d0a] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
              Quick input
            </span>
            <span className="text-[11px] text-brand-muted">Hey Auah,</span>
          </div>
          <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-brand-text">
            {text}
          </div>
          <div className="mt-3 inline-flex items-center gap-1 rounded-md border border-brand-border bg-[#141414] px-2 py-1 text-[10px] font-medium text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Answered
          </div>
        </div>
        <div className="mt-1 text-[11px] text-brand-muted">{time}</div>
      </div>
    </div>
  );
}
