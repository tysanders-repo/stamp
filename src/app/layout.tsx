import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideMenu from "../components/SideMenu";
import MobileMenuButton from "../components/MobileMenuButton";
import { MobileMenuProvider } from "../components/MobileMenuContext";
import { SearchProvider } from "../components/SearchContext";
import LazySearchOverlay from "../components/LazySearchOverlay";
import DatadogInit from "../lib/datadog";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tysanders.xyz'),
  title: "Tristian 'Ty' Sanders",
  description: "Personal portfolio and blog of Tristian Sanders, a Computer Engineer",
  keywords: ["computer engineer", "software development", "portfolio", "blog", "technology", "devblog"],
  authors: [{ name: "Tristian Sanders" }],
  creator: "Tristian Sanders",
  openGraph: {
    title: "Tristian 'Ty' Sanders - Computer Engineer",
    description: "Personal portfolio and blog of Tristian Sanders, a Computer Engineer.",
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Tristian 'Ty' Sanders - Computer Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tristian 'Ty' Sanders - Computer Engineer",
    description: "Personal portfolio and blog of Tristian Sanders, a Computer Engineer.",
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
    suppressHydrationWarning
    className="bg-white"
    >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Theme appearance="light">
          <DatadogInit />
          <SearchProvider>
            <LazySearchOverlay />
            <MobileMenuProvider>
              <main className="min-h-screen bg-white">
                <MobileMenuButton />
                <div className="lg:flex">
                  <SideMenu>
                    {/* <MenuContent /> */}
                  </SideMenu>
                  <div className="flex flex-1 flex-row justify-center lg:ml-80">
                    {children}
                  </div>
                </div>
              </main>
            </MobileMenuProvider>
          </SearchProvider>
        </Theme>
      </body>
    </html>
  );
}
