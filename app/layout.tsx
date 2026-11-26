import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const title = `${profile.name} | Data Analyst, Sales & Operations Analytics`;
const description = "Data Analyst with 5+ years in BI, sales analytics and reporting automation. Power BI, SQL, Python and Advanced Excel. Based in Dubai, UAE.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title, description,
  openGraph: { title, description, url: profile.siteUrl, siteName: profile.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Data Analyst",
  url: profile.siteUrl, email: profile.email, sameAs: [profile.linkedin, profile.github],
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  knowsAbout: ["Power BI", "SQL", "Python", "Business Intelligence", "Sales Analytics"],
};

// Sets theme before paint (no flash). Defaults to the visitor's system preference.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
