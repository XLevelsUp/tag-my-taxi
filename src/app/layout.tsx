import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taxi Dispatch Software | Taxi Booking App | Taxi Booking Software | Taxi Management Software | TagMyTaxi",
  description: "TagMyTaxi – On-demand taxi dispatch software to build an Uber-like business. White-label taxi solution, real-time tracking, and seamless fleet management.",
  icons: {
    icon: "/tagmytaxilogo.jpg",
    shortcut: "/tagmytaxilogo.jpg",
    apple: "/tagmytaxilogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-base">
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

