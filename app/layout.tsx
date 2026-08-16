import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/src/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  applicationName: portfolio.profile.name,
  authors: [{ name: portfolio.profile.name }],
  creator: portfolio.profile.name,
  keywords: [
    portfolio.profile.name,
    "Software Engineer",
    "Product Engineering",
    "Frontend Systems",
    "Automation",
    "Infrastructure Automation",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    siteName: portfolio.profile.name,
    images: siteUrl
      ? [
          {
            url: "/og-v2.png",
            width: 1728,
            height: 910,
            alt: portfolio.seo.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: siteUrl ? ["/og-v2.png"] : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f4" },
    { media: "(prefers-color-scheme: dark)", color: "#07090c" },
  ],
};

const themeScript = [
  "(() => {",
  "try {",
  "const stored = localStorage.getItem('vinit-portfolio-theme');",
  "const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;",
  "const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');",
  "document.documentElement.dataset.theme = theme;",
  "} catch { document.documentElement.dataset.theme = 'light'; }",
  "})();",
].join("");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={geistSans.variable + " " + geistMono.variable}>
        {children}
      </body>
    </html>
  );
}
