import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechKim - Monastery360 | Digital Heritage Platform for Sikkim's Monasteries",
  description: "Discover Sikkim's 200+ monasteries through immersive 360° virtual tours, digital archives, and AI-powered cultural preservation. Experience centuries of Buddhist heritage digitally.",
  keywords: "Sikkim monasteries, virtual tours, cultural preservation, Buddhist heritage, Smart India Hackathon, digital archives, 360 panoramic views, tourism",
  authors: [{ name: "TechKim Team" }],
  openGraph: {
    title: "TechKim - Monastery360 Digital Heritage Platform",
    description: "Immersive digital platform showcasing Sikkim's monastery heritage with 360° tours and AI-powered preservation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechKim - Monastery360 Digital Heritage Platform",
    description: "Discover Sikkim's monasteries through cutting-edge digital preservation technology",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-amber-50 to-orange-50 text-gray-900 antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}