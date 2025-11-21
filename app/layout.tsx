import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookADoc - Modern Booking & Billing Solution for Healthcare",
  description: "Transform your healthcare practice with BookADoc. Automate appointment scheduling, billing, and patient communication. Features WhatsApp reminders, real-time analytics, and role-based dashboards.",
  keywords: [
    "healthcare management",
    "appointment booking system",
    "medical billing software",
    "clinic management",
    "hospital management system",
    "patient scheduling",
    "WhatsApp appointment reminders",
    "healthcare analytics",
    "medical practice software",
    "BookADoc"
  ],
  authors: [{ name: "BookADoc Team" }],
  creator: "BookADoc",
  publisher: "BookADoc",
  metadataBase: new URL('https://bookadoc-xi.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookadoc-xi.vercel.app/',
    title: 'BookADoc - Modern Booking & Billing Solution for Healthcare',
    description: 'Transform your healthcare practice with automated appointment scheduling, billing, and patient communication. Try our 5-day free trial.',
    siteName: 'BookADoc',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BookADoc - Healthcare Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookADoc - Modern Booking & Billing Solution for Healthcare',
    description: 'Transform your healthcare practice with automated appointment scheduling, billing, and patient communication.',
    images: ['/og-image.png'],
    creator: '@bookadoc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
