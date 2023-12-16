import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Providers } from "./providers"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Resume",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
