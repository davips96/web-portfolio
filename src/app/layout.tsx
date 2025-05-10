import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Bechara | Lead Frontend Developer",
  description: "Portfolio website of David Bechara, Lead Frontend Developer based in Montreal, QC",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL('https://www.davidbechara.ca'),
  openGraph: {
    title: "David Bechara | Lead Frontend Developer",
    description: "Portfolio website of David Bechara, Lead Frontend Developer based in Montreal, QC",
    url: "https://www.davidbechara.ca",
    siteName: "David Bechara",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Bechara - Lead Frontend Developer"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
