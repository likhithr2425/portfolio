import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "./components/navbar/Index";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Likhith Reddy | Software Engineer",
    template: "%s | Likhith Reddy",
  },
  description: "Full-stack developer building scalable web & mobile products",
  keywords: [
    "Likhith Reddy",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Likhith Reddy" }],
  creator: "Likhith Reddy",

  openGraph: {
    title: "Likhith Reddy | Portfolio",
    description: "Engineer building production-grade systems & startups",
    url: "https://likhithr.in",
    siteName: "Likhith Reddy Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://likhithr.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
