import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { CookieConsent } from "@/components/cookie-consent"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Load Outfit font for all text
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "A-Smiles Dental Clinic | Small Fixes. Big Transformations",
  description:
    "A-Smiles Dental Clinic in Siliguri offers premium dental care with a self-care lounge experience. Led by Dr. Ankita Debnath.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          {children}
          <WhatsAppButton />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
