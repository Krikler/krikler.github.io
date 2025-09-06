import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://krikler.github.io"),
  alternates: {
    canonical: "https://krikler.github.io",
  },
  title: "Zalán Krikler - Junior Software Developer",
  description:
    "Zalán Krikler is a Computer Engineering student.",
  keywords:
    "",
  openGraph: {
    locale: "en_US",
    siteName: "Zalán Krikler",
    type: "website",
    title: "Zalán Krikler",
    description:
      "Zalán Krikler is a Junior Software Developer.",
    url: "https://krikler.github.io",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
