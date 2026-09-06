import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Galaxia Geotech — Python with GIS & Geospatial Technology Institute (Pune)',
  description:
    'Galaxia Geotech offers offline hands-on Python with GIS training in Pune (FC Road). Master Spatial Analysis, QGIS, GeoPandas, Remote Sensing, and DEM Hydrology with practical projects.',
  generator: 'Galaxia Geotech',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16203b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
