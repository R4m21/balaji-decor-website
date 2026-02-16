import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import ThemeProvider from "@/components/providers/ThemeProvider";
import config from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: "Balaji Decor | Premium Interior Solutions",
    template: "%s | Balaji Decor",
  },
  description:
    "Balaji Decor provides premium wallpaper, flooring, blinds & interior solutions with expert installation.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Balaji Decor",
    description: "Premium Interior Wallpaper, Flooring & Blinds Solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
        {/* reCAPTCHA – Always Load */}
        {config.recaptchaSiteKey && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${config.recaptchaSiteKey}`}
            strategy="afterInteractive"
          />
        )}

        {/* Google Analytics – Optional */}
        {config.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
