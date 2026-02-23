import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recover 85-95% of Abandoned Carts Klaviyo Misses | Cartio.ai",
  description: "Email recovers 5-15% of abandoned carts. Cartio recovers the other 85-95% with AI voice calls, WhatsApp, and SMS. Commission-only. 5-minute Shopify install. Zero risk.",
  openGraph: {
    title: "You're Losing 85-95% of Abandoned Carts After Email Fails",
    description: "Klaviyo recovers 10%. What about the other 90%? Cartio uses AI voice calls and WhatsApp to recover what email misses. Commission-only pricing. Connect your Shopify store in 5 minutes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Losing 85-95% of Abandoned Carts After Email Fails",
    description: "Klaviyo recovers 10%. What about the other 90%? Cartio uses AI voice calls and WhatsApp to recover what email misses. Commission-only pricing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
