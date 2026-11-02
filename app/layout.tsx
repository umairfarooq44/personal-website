import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import { analytics } from "@/content/profile";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "Umair Farooq is a senior frontend engineer who builds interfaces for real-time video, sensor and map data with React, TypeScript, Next.js and Angular. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://umairfarooq44.github.io"),
  title: "Umair Farooq, Senior Frontend Engineer",
  description,
  openGraph: {
    title: "Umair Farooq, Senior Frontend Engineer",
    description,
    url: "https://umairfarooq44.github.io",
    siteName: "Umair Farooq",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Umair Farooq, Senior Frontend Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Farooq, Senior Frontend Engineer",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8ebef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans leading-relaxed">
        {children}
        {analytics.goatcounter && (
          <Script
            data-goatcounter={`https://${analytics.goatcounter}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
