import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Shreyas P",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="px-8 md:w-2/5 mx-auto text-lg">
              <Navbar />
              {children}
            </div>
            <div className="fixed bottom-7 right-7">
              <ModeToggle />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
