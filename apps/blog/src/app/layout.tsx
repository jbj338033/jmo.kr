import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider, ThemeScript } from "@/features/theme";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: {
    default: "jmo's blog",
    template: "%s | jmo's blog",
  },
  description: "Personal blog",
  authors: [{ name: "jmo" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-foreground/10">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
