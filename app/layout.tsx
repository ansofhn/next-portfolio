import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ansof Habibunnadjar",
    default: "Ansof Habibunnadjar — Front End Developer",
  },
  description:
    "Front end developer based in Indonesia. Building fast, accessible, and beautifully crafted web experiences.",
  keywords: ["front end developer", "React", "Next.js", "portfolio", "Indonesia"],
  authors: [{ name: "Ansof Habibunnadjar" }],
  creator: "Ansof Habibunnadjar",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ansofhn.dev",
    title: "Ansof Habibunnadjar — Front End Developer",
    description:
      "Front end developer based in Indonesia. Building fast, accessible, and beautifully crafted web experiences.",
    siteName: "Ansof Habibunnadjar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansof Habibunnadjar — Front End Developer",
    description:
      "Front end developer based in Indonesia. Building fast, accessible, and beautifully crafted web experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${raleway.variable} ${poppins.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
