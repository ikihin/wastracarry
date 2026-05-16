import "./globals.css";

export const metadata = {
  title: "WASTRA CARRY — Trust infrastructure for cultural products",
  description:
    "WASTRA CARRY is a verification infrastructure that gives physical textiles a permanent, on-chain identity on Solana. Scan a piece, see its origin — verified, not claimed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-bg text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
