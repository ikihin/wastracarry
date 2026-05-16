export default function QRLabel({
  productId = "WC-000128",
  fabric = "Batik Tulis",
  url = "https://wastracarry.vercel.app/verify",
  size = 240,
  variant = "label",
}) {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=${size * 2}x${size * 2}&data=${encodeURIComponent(url)}&margin=8&qzone=2`;

  if (variant === "plain") {
    return (
      <div
        className="inline-block rounded-xl bg-white p-3"
        style={{ width: size + 24 }}
      >
        <img
          src={qrSrc}
          alt={`QR code for ${productId}`}
          width={size}
          height={size}
          className="block"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }

  return (
    <div className="inline-block w-[260px] overflow-hidden rounded-xl border border-brand-border bg-white text-neutral-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-sm bg-neutral-900" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-900">
            Wastra Carry
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
          ✓ Verified
        </span>
      </div>

      <div className="flex flex-col items-center px-4 pb-4 pt-5">
        <img
          src={qrSrc}
          alt={`Scan to verify ${productId}`}
          width={size}
          height={size}
          className="block"
          style={{ width: size, height: size }}
        />
        <div className="mt-3 w-full text-center">
          <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Scan to verify origin
          </div>
          <div className="mt-1 font-mono text-sm font-semibold text-neutral-900">
            {productId}
          </div>
          <div className="text-[11px] text-neutral-600">{fabric}</div>
        </div>
      </div>

      <div className="border-t border-neutral-200 bg-neutral-50 px-3 py-1.5 text-center text-[9px] uppercase tracking-[0.2em] text-neutral-500">
        Anchored on Solana
      </div>
    </div>
  );
}
