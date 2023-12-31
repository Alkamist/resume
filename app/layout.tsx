import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Providers } from "./providers"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corey Lehman",
  description: "Corey Lehman's resume.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <div className="text-black dark:text-white bg-neutral-300 dark:bg-[#18181b]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
