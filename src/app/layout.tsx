import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideMenu from "../components/SideMenu";
import MobileMenuButton from "../components/MobileMenuButton";
import { MobileMenuProvider } from "../components/MobileMenuContext";
import { SearchProvider } from "../components/SearchContext";
import SearchOverlay from "../components/SearchOverlay";

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
  title: "Tristian 'Ty' Sanders",
  description: "Personal portfolio and blog of Tristian Sanders, a Computer Engineer",
  keywords: ["computer engineer", "software development", "portfolio", "blog", "technology", "devblog"],
  authors: [{ name: "Tristian Sanders" }],
  creator: "Tristian Sanders",
  openGraph: {
    title: "Tristian 'Ty' Sanders - Computer Engineer",
    description: "Personal portfolio and blog of Tristian Sanders, a Computer Engineer passionate about technology and innovation.",
    type: "website",
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
          <SearchProvider>
            <SearchOverlay />
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
