import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['700', '800', '900']
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Bhoomi's Housekeeping | Premium Cleaning Services in Jaipur",
  description: "Professional housekeeping and cleaning services in Jaipur. We serve hotels, restaurants, offices, homes, and commercial spaces with premium care.",
  keywords: "housekeeping, cleaning services, Jaipur, home cleaning, office cleaning, sofa cleaning, carpet cleaning, pest control",
  metadataBase: new URL("https://bhoomi-housekeeping.vercel.app"),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Bhoomi's Housekeeping | Premium Cleaning Services in Jaipur",
    description: "Professional housekeeping and cleaning services in Jaipur. Hotels, restaurants, offices, homes and more.",
    url: "https://bhoomi-housekeeping.vercel.app",
    siteName: "Bhoomi's Housekeeping",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhoomi's Housekeeping - Premium Cleaning Services in Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhoomi's Housekeeping | Premium Cleaning Services in Jaipur",
    description: "Professional housekeeping and cleaning services in Jaipur. Hotels, restaurants, offices, homes and more.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${nunito.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
