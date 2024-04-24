import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel-Perfect",
  description: "Pixel Perfect is your go-to destination for flawless digital designs. From websites to graphics, we ensure every pixel is perfectly placed to create stunning visuals. Let us bring your vision to life, pixel by pixel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <SpeedInsights />
      <Analytics/>
      </body>
    </html>
  );
}
