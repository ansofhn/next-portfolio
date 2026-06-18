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
    default: "Ansof Habibunnadjar | Business Analyst & Software Developer",
  },
  description:
    "Bridging business needs and technology solutions through requirement analysis, stakeholder collaboration, and data-driven decision making.",
  keywords: ["business analyst", "software developer", "React", "Next.js", "portfolio", "Indonesia"],
  authors: [{ name: "Ansof Habibunnadjar" }],
  creator: "Ansof Habibunnadjar",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://unsoft.vercel.app",
    title: "Ansof Habibunnadjar | Business Analyst & Software Developer",
    description:
      "Business analyst and software developer based in Indonesia. Bridging business needs and technology solutions.",
    siteName: "Ansof Habibunnadjar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansof Habibunnadjar | Business Analyst & Software Developer",
    description:
      "Business analyst and software developer based in Indonesia. Bridging business needs and technology solutions.",
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
