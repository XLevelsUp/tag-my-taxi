import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taxi Dispatch Software | Taxi Booking App | Taxi Booking Software | Taxi Management Software | TagMyTaxi",
  description: "TagMyTaxi – On-demand taxi dispatch software to build an Uber-like business. White-label taxi solution, real-time tracking, and seamless fleet management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-P366V5Q4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GT-P366V5Q4');
            gtag('config', 'AW-633411275');
          `}
        </Script>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

