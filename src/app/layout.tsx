import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sidahmed Frioui | Full Stack Developer (React, Angular, NestJS)",
  description:
    "Portfolio of Sidahmed Frioui — Full Stack Developer specializing in React, Angular, NestJS, and high-performance web applications.",
  keywords: [
    "Sidahmed Frioui",
    "Full Stack Developer",
    "React Developer",
    "Angular Developer",
    "NestJS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Algeria",
    "React Portfolio",
    "Angular Portfolio"
  ],
  authors: [{ name: "Sidahmed Frioui" }],
  creator: "Sidahmed Frioui",
  openGraph: {
    title: "Sidahmed Frioui — Full Stack Developer Portfolio",
    description:
      "Full Stack Developer skilled in React, Angular, NestJS, and mobile development.",
    url: "https://your-domain.com",
    siteName: "Sidahmed Frioui Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sidahmed Frioui Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidahmed Frioui — Full Stack Developer",
    description:
      "Portfolio showcasing React, Angular, NestJS, and modern web/mobile projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Ikfr0OswDYru9it5O_X0xJIHfLAlVd5Y4fTXQByt2TQ" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
