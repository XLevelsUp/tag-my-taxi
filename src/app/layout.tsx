import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "#1 Taxi Dispatch Software | Cloud-Based Taxi Booking Software | Fleet Management Software — TagMyTaxi",
  description: "TagMyTaxi is the #1 cloud-based taxi dispatch software trusted by 500+ fleet operators in 42 countries. AI-powered dispatch, real-time GPS tracking, white-label taxi app for Android & iOS, and complete fleet management software. Start your free trial today.",
  keywords: "taxi dispatch software, taxi clone app, taxi booking software, fleet management software, cloud-based taxi system, AI-powered dispatch, real-time GPS tracking, taxi app for Android & iOS, software for taxi company, dispatch management software, cloud taxi dispatch system, taxi software",
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
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MT73X4B8');
          `}
        </Script>
      <body className="min-h-full flex flex-col text-base">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT73X4B8"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-P366V5Q4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent values to deny third-party ad tracking by default
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted',
              'wait_for_update': 500
            });

            gtag('js', new Date());

            gtag('config', 'GT-P366V5Q4', {
              cookie_flags: 'SameSite=None;Secure'
            });
            gtag('config', 'AW-633411275', {
              cookie_flags: 'SameSite=None;Secure'
            });
            gtag('config', 'AW-17760687003', {
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

