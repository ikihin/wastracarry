import "./globals.css";

export const metadata = {
  title: "WASTRA CARRY — Make physical products verifiable",
  description:
    "WASTRA CARRY is a verification system for physical products. Each piece carries a verifiable origin, maker, and on-chain proof of authenticity.",
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
